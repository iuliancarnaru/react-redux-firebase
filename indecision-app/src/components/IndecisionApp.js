
import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import ActionModal from './OptionModal';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }

    handlePick = () => {
        const randomNum = ~~(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add items';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            // Do nothing
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;

