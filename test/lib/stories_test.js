import { Stories } from '../../src/lib';

describe('Stories', function() {
  describe('Method Check', function() {
    it('should have `get` defined', function() {
      expect(Stories.get).toEqual(jasmine.any(Function));
    });
    it('should have `getByFilter` defined', function() {
      expect(Stories.getByFilter).toEqual(jasmine.any(Function));
    });
  });
});
