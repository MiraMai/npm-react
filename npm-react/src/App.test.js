import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './form';
import Button from './button';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
  let wrapper = shallow(<Form myprops="this.props.saveName" />);
	let actual = wrapper.contains(<input onChange={this.props.saveName} placeholder="name" />);
	let expected = true;
	expect(actual).toBe(expected);

});

test('renders input-email', () => {
    
   let wrapper = shallow(<Form/>); expect(wrapper.find('.email').hasClass('disabled')).toBe(true);
  
	
});

test('renders button', () => {
  let wrapper = shallow(<Button />);
	let actual = wrapper.find("button").hasClass("buttonClass");
	let expected = true;
	expect(actual).toBe(expected);

});
