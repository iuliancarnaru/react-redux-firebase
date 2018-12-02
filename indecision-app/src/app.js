
/* 

React dom elements
React dom events
e = event
preventDefault - prevent full page refresh

INFO: JSX support stings, numbers and arrays by default. It doesn't support objects and ignore booleans, null or undefined by not rendering them. We can render JSX inside JSX. Adding key to elements hepls JSX to optimize renderind.

*/


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    // get the value that user type
    const option = e.target.elements.option.value;

    //check if there is any option
    if (option) {
        app.options.push(option);

        //clear the input
        e.target.elements.option.value = '';

        //render the new data
        renderApp();
    }
}

const removeOptions = () => {
    app.options = [];
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>

            {app.subtitle && <p>{app.subtitle}</p>}

            <p>{(app.options.length > 0) ? 'Here are your options:' : 'No options.'}</p>

            <ul>
                {
                    app.options.map((option, index) => <li key={index+1}>{option}</li>)
                }
            </ul>

            <p>You have {app.options.length} {app.options.length === 1 ? 'option' : 'options'} available.</p>

            <p>{app.options.length > 0 && <button onClick={removeOptions}>Remove all options</button>}</p>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>

        </div>
    );

    ReactDOM.render(template, appRoute);
}

const appRoute = document.getElementById('appRoute');

renderApp();


