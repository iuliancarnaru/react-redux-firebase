
// class based component - manage complex states
// stateless functional component - presentation of information

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        }
    }

    // lifecycle methods only work on class based component
    // (there is no lifecycle for stateless components)
    // localStorage only works with string data (JSON) - JSON.stringify() / JSON.parse()

    componentDidMount() {
        // check if is valid JSON data
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            //check if are any data in local storage
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // update the component if previous state is different than current one
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
    }

    // remove all options
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    //remove individual option
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }

    handlePick() {
        const randomNum = ~~(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        // form validation
        if (!option) {
            return 'Enter valid value to add items';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    render() {

        const subtitle = "put your life in the hands of a computer";

        return (
            <div>
                <Header 
                    subtitle={subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}
            > What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((option, index) => (
                <Option 
                    key={index+1} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    );
}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>remove</button>
        </div>
    );
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        // trim remove white spaces from before and after the text
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        // clear the input if it was no errors
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp /> , document.getElementById('appRoute'));

