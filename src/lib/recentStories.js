import fetch from 'node-fetch';
import constants from './constants';

class RecentStories {
  constructor() {
    this.defaultParams = {
      page: 1
    };
  }
  get(params = this.defaultParams) {
    return fetch(
      `${constants.URL}${constants.GET_RECENT_STORIES}/${params.page}`
    )
      .then(resp => resp.json())
      .then(results => results);
  }
}

export default new RecentStories();
