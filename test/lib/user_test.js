import { User } from '../../src/lib';

describe('User', function() {
  describe('Method Check', function() {
    it('should have `get` defined', function() {
      expect(User.get).toEqual(jasmine.any(Function));
    });
  });
});
