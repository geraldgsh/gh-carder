import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import UserProfile from '../../components/userProfile';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <UserProfile />,
  );
  return component;
};

describe('UserProfile component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render seven div', () => {
    expect(component.find('div').length).toBe(7);
  });

  it('should render 2 p tag', () => {
    expect(component.find('p').length).toBe(2);
  });
});

describe('UserProfile', () => {
  test('renders UserProfile component', () => {
    render(<UserProfile />);
    expect(screen.getByText(/followers/)).toBeInTheDocument();
  });
});
