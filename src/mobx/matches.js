import {action, makeObservable, observable} from 'mobx';

class Matches {
  list = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      add: action,
    });
  }

  add(list) {
    this.list = [...list];
  }
}

const matches = new Matches();

export default matches;
