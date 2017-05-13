import bs from '../src';

describe('barnacles-scraper', function() {
  describe('getTopStories', function() {
    it('should return an array', function(done) {
      bs.getTopStories().then(results => {
        expect(results).toEqual(jasmine.any(Array));
        expect(results.length).toEqual(25);
        done();
      });
    });
  });

  describe('getRecentStories', function() {
    it('should return an array', function(done) {
      bs.getRecentStories().then(results => {
        expect(results).toEqual(jasmine.any(Array));
        expect(results.length).toEqual(25);
        done();
      });
    });
  });

  describe('getStories', function() {
    it('should return an array', function(done) {
      bs.getStories().then(results => {
        expect(results).toEqual(jasmine.any(Array));
        expect(results.length).toEqual(25);
        done();
      });
    });
  });

  describe('getStoriesByFilter', function() {
    it('should return an array', function(done) {
      bs.getStoriesByFilter().then(results => {
        expect(results).toEqual(jasmine.any(Array));
        expect(results.length).toEqual(25);
        done();
      });
    });
  });

  describe('getUser', function() {
    it('should return a username', function(done) {
      bs.getUser({ username: 'fireupyourshop' }).then(results => {
        expect(results.name).toEqual('fireupyourshop');
        done();
      });
    });
  });

  describe('getTags', function() {
    it('should return an array and include web', function(done) {
      bs.getTags().then(results => {
        expect(results).toEqual(jasmine.any(Array));
        expect(results).toContain({
          name: 'web',
          url: 'http://barnacles.nullable.tk/filter/web'
        });
        done();
      });
    });
  });
});
