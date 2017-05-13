import fetch from 'node-fetch';
import constants from './constants';

class User {
  constructor() {}
  get(params) {
    return fetch(
      `${constants.URL}${constants.GET_USER_PROFILE}/${params.username}`
    )
      .then(resp => resp.json())
      .then(results => results);
  }
}

export default new User();
