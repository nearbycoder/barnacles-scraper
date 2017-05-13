import { TopStories } from '../../src/lib';

describe('TopStories', function() {
  describe('Method Check', function() {
    it('should have `get` defined', function() {
      expect(TopStories.get).toEqual(jasmine.any(Function));
    });
  });
});
