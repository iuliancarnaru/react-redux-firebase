'use strict';

var appInfo = {
    title: 'React.js',
    subtitle: 'the best framework to create apps.',
    apps: ['App 1', 'App 2', 'App 3']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appInfo.title
    ),
    React.createElement(
        'p',
        null,
        appInfo.subtitle
    ),
    React.createElement(
        'ul',
        null,
        appInfo.apps.map(function (item) {
            return React.createElement(
                'li',
                { key: item },
                item
            );
        })
    )
);

// EXERCISE:

var user = {
    name: 'Mike',
    age: 25,
    location: 'Uk'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoute = document.getElementById('appRoute');

ReactDOM.render(template, appRoute);
