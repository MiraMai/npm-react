import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './form';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders input-name', () => {
  let wrapper = shallow(<Form/>);
	let actual = wrapper.contains(<input />);
	let expected = true;
	expect(actual).toBe(expected);

});
