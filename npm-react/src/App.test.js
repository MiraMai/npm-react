import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './form';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
  let wrapper = shallow(<Form/>);
	let actual = wrapper.contains(<input />);
	let expected = true;
	expect(actual).toBe(expected);

});

test('renders input-email', () => {
  let wrapper = shallow(<Form/>);
	let actual = wrapper.contains(<input />);
	let expected = true;
	expect(actual).toBe(expected);

});
