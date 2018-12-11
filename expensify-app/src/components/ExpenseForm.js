import React, { Component } from 'react';

class ExpenseForm extends Component {

    state = {
        description: '',
        note: '',
        amount: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onTextareaChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
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
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
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