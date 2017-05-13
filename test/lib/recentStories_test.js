import { RecentStories } from '../../src/lib';

describe('RecentStories', function() {
  describe('Method Check', function() {
    it('should have `get` defined', function() {
      expect(RecentStories.get).toEqual(jasmine.any(Function));
    });
  });
});
