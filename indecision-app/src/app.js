
// Creating the app based on components

class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>put your life in the hands of a computer...</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
                <p>Options component</p>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                <p>Option component</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return(
            <div>
                <p>AddOption component</p>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp /> , document.getElementById('appRoute'));