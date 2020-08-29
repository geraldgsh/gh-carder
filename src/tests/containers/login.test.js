import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Login from '../../containers/login';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <Login />,
  );
  return component;
};

describe('Login container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render seven div', () => {
    expect(component.find('div').length).toBe(5);
  });

  it('should render 2 p tag', () => {
    expect(component.find('p').length).toBe(1);
  });
});

describe('Login', () => {
  test('renders Login Container', () => {
    render(<Login />);
    expect(screen.getByText(/House of GitHub Cards/)).toBeInTheDocument();
  });
});
