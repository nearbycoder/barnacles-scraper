import fetch from 'node-fetch';
import constants from './constants';

class Stories {
  constructor() {
    this.defaultParams = {
      page: 1,
      filter: 'web'
    };
  }
  get(params = this.defaultParams) {
    return fetch(`${constants.URL}/${params.page}`)
      .then(resp => resp.json())
      .then(results => results);
  }
  getByFilter(params = this.defaultParams) {
    return fetch(`${constants.URL}/filter/${params.filter}/${params.page}`)
      .then(resp => resp.json())
      .then(results => results);
  }
}

export default new Stories();
