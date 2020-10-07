Feature('home');

Scenario('test something', (I) => {
  I.amOnPage('http://app:3000/');
  I.see('David Johnson');
  I.see('Outdoor & Landscape Photography');
});
