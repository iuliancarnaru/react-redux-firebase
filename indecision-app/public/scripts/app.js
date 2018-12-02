'use strict';

// VISIBILITY TOGGLE EXERCISE

var app = {
    title: 'Visibility Toggle',
    visibility: false
};

var toggleVisibility = function toggleVisibility() {
    app.visibility = !app.visibility;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            app.visibility ? 'Hide details' : 'Show details'
        ),
        app.visibility && React.createElement(
            'h3',
            null,
            'Now you see me!'
        )
    );

    ReactDOM.render(template, appRoute);
};

var appRoute = document.getElementById('appRoute');

renderApp();
