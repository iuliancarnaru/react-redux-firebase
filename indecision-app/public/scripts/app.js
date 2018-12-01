'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is JSX from app.js!'
    ),
    React.createElement(
        'p',
        null,
        'This is some info.'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Item1'
        ),
        React.createElement(
            'li',
            null,
            'Item2'
        ),
        React.createElement(
            'li',
            null,
            'Item3'
        )
    )
);
var appRoute = document.getElementById('appRoute');

ReactDOM.render(template, appRoute);
