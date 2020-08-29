/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import OrgButton from '../../components/modal/orgButton';

const axios = require('axios');

Enzyme.configure({ adapter: new Adapter() });
const whenStable = async () => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
};

describe('pass props to OrgButton component', () => {
  it('should pass props to OrgButton component', async () => {
    const mResponse = { data: ['a', 'b'] };
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mResponse);
    const url = 'https://api.github.com/users/dhh/orgs';
    const wrapper = shallow(<OrgButton url={url} />);
    await whenStable();
    // Accessing component props
    expect(wrapper.instance().props.url).toEqual('https://api.github.com/users/dhh/orgs');
    getSpy.mockRestore();
  });

  it('calls componentDidMount', () => {
    jest.spyOn(OrgButton.prototype, 'componentDidMount');
    const url = 'https://api.github.com/users/dhh/orgs';
    const wrapper = mount(<OrgButton url={url} />);
    expect(OrgButton.prototype.componentDidMount.mock.calls.length).toBe(1);
  });

  it('h2 in modal render', () => {
    jest.spyOn(OrgButton.prototype, 'componentDidMount');
    const url = 'https://api.github.com/users/dhh/orgs';
    const wrapper = mount(<OrgButton url={url} />);
    const value = wrapper.find('h2').text();
    expect(value).toEqual('Organizations');
  });
});
