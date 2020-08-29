import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import Followers from '../../components/followers';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <Followers />,
  );
  return component;
};

describe('Followers component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render 1 div tag', () => {
    expect(component.find('div').length).toBe(1);
  });
});
