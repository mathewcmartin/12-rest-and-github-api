'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${myGitHubToken}`,
      }
      .then(
        console.log('test');
      )
    })
  };

  module.aboutController = aboutController;
})(app);
