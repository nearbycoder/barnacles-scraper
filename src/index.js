import { TopStories, RecentStories, Stories, User, Tags } from './lib';

export default {
  getTopStories: TopStories.get.bind(TopStories),
  getRecentStories: RecentStories.get.bind(RecentStories),
  getStories: Stories.get.bind(Stories),
  getStoriesByFilter: Stories.getByFilter.bind(Stories),
  getUser: User.get.bind(User),
  getTags: Tags.get.bind(Tags)
};
