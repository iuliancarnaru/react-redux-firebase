

const appInfo = {
    title: 'React.js',
    subtitle: 'the best framework to create apps.',
    apps: ['App 1', 'App 2', 'App 3']
}

const template = (
    <div>
        <h1>{appInfo.title}</h1>
        <p>{appInfo.subtitle}</p>
        <ul>
            {appInfo.apps.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
);

// EXERCISE:

const user = {
    name: 'Mike',
    age: 25,
    location: 'Uk'
};

const template2 = (
    <div>
        <h1>{user.name.toUpperCase() + '!'}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const appRoute = document.getElementById('appRoute');

ReactDOM.render(template, appRoute);

