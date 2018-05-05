import React from 'react'
import DashboardPage from '../../pages/DashboardPage';
import {shallow} from 'enzyme';

test('should run Expense Dashboard page', () => {
const wrapper = shallow(<DashboardPage />);
expect(wrapper).toMatchSnapshot();
});