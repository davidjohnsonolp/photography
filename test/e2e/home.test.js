Feature('home');

Scenario('test something', (I) => {
  I.amOnPage('http://localhost:3000');
  I.see('David Johnson');
  I.see('Outdoor & Landscape Photography');
});
