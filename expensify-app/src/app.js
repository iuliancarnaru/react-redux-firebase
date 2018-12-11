import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Gass bill', amount: 2000, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 1950}));
store.dispatch(setTextFilter('water'));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));
