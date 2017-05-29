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
  let wrapper = shallow(<Form myprops="this.props.saveName" />);
	let actual = wrapper.contains(<input className="name" onChange={this.props.saveName} placeholder="name" />);
	let expected = true;
	expect(actual).toBe(expected);

});

test('renders input-email', () => {
  let wrapper = shallow(<Form/>);
	let actual = wrapper.find(<input />).hasClass("email");
	let expected = true;
	expect(actual).toBe(expected);

});

test('renders button', () => {
  let wrapper = shallow(<Form/>);
	let actual = wrapper.find(<button />).hasClass("buttonClass");
	let expected = true;
	expect(actual).toBe(expected);

});
