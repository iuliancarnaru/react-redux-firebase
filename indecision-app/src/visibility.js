

// VISIBILITY TOGGLE EXERCISE

const app = {
    title: 'Visibility Toggle',
    visibility: false
}

const toggleVisibility = () => {
    app.visibility = !app.visibility;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{app.visibility ? 'Hide details' : 'Show details'}</button>
            {app.visibility && <h3>Now you see me!</h3>}
        </div>
    );

    ReactDOM.render(template, appRoute);
}



const appRoute = document.getElementById('appRoute');

renderApp();