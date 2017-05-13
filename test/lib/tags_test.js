import { Tags } from '../../src/lib';

describe('Tags', function() {
  describe('Method Check', function() {
    it('should have `get` defined', function() {
      expect(Tags.get).toEqual(jasmine.any(Function));
    });
  });
});
