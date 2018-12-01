

const template = (
    <div>
        <h1>This is JSX from app.js!</h1>
        <p>This is some info.</p>
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
        </ul>
    </div>
);
const appRoute = document.getElementById('appRoute');

ReactDOM.render(template, appRoute);