import React, { Component } from 'react';

class ExpenseForm extends Component {

    state = {
        description: '',
        note: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onTextareaChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note}))
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onTextareaChange}
                    >
                    </textarea>
                    <button type="submit">Add expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;