import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';


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

export default IndecisionApp;