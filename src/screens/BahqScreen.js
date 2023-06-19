import React, {useState} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

function BahqScreen({navigation, route}) {
  const [indicator, setIndicator] = useState(true);

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: route.params.link,
        }}
        javaScriptEnabled={true}
        injectedJavaScript={
          "document.body.insertAdjacentHTML('afterbegin', '<style>#smart-banner-ios {display: none !important}</style>')"
        }
        style={{marginTop: 35}}
        onLoadEnd={syntheticEvent => {
          setIndicator(false);
        }}
        allowsInlineMediaPlayback={true}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          if (nativeEvent.statusCode === 404) {
            navigation.push('Home', {err: 404});
          }
        }}
      />
      {indicator && (
        <View style={styles.loader}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    width: 55,
    height: 55,
    top: Dimensions.get('window').height / 2 - 25,
    left: Dimensions.get('window').width / 2 - 25,
  },
});

export default BahqScreen;
