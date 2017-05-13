import fetch from 'node-fetch';
import constants from './constants';

class TopStories {
  constructor() {
    this.defaultParams = {
      page: 1
    };
  }
  get(params = this.defaultParams) {
    return fetch(`${constants.URL}${constants.GET_TOP_STORIES}/${params.page}`)
      .then(resp => resp.json())
      .then(results => results);
  }
}

export default new TopStories();
