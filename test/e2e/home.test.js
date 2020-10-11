Feature('home');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.see('David Johnson');
  I.see('Outdoor & Landscape Photography');
});
