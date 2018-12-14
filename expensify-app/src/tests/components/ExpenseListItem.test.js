import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures(test data)/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});