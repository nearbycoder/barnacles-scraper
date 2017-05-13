import fetch from 'node-fetch';
import constants from './constants';

class Tags {
  constructor() {}
  get() {
    return fetch(`${constants.URL}${constants.GET_TAGS}`)
      .then(resp => resp.json())
      .then(results => results);
  }
}

export default new Tags();
