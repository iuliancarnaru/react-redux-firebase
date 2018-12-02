'use strict';

/* 

React dom elements
React dom events
e = event
preventDefault - prevent full page refresh

INFO: JSX support stings, numbers and arrays by default. It doesn't support objects and ignore booleans, null or undefined by not rendering them. We can render JSX inside JSX. Adding key to elements hepls JSX to optimize renderind.

*/

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    // get the value that user type
    var option = e.target.elements.option.value;

    //check if there is any option
    if (option) {
        app.options.push(option);

        //clear the input
        e.target.elements.option.value = '';

        //render the new data
        renderApp();
    }
};

var removeOptions = function removeOptions() {
    app.options = [];
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
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options.'
        ),
        React.createElement(
            'ul',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index + 1 },
                    option
                );
            })
        ),
        React.createElement(
            'p',
            null,
            'You have ',
            app.options.length,
            ' ',
            app.options.length === 1 ? 'option' : 'options',
            ' available.'
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 && React.createElement(
                'button',
                { onClick: removeOptions },
                'Remove all options'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoute);
};

var appRoute = document.getElementById('appRoute');

renderApp();
