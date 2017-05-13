import bs from '../dist/barnacles-scraper';

bs.getTopStories().then(results => {
  console.log(results);
});
