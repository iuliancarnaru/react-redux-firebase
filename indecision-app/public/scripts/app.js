'use strict';

var template = React.createElement(
  'h1',
  null,
  'This is JSX from app.js!'
);
var appRoute = document.getElementById('appRoute');

ReactDOM.render(template, appRoute);
