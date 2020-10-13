Feature('home');

Scenario('App loads', (I) => {
  I.amOnPage('/');
  I.see('David Johnson');
  I.see('Outdoor & Landscape Photography');
});
