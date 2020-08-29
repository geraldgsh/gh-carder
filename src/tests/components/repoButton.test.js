/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import RepoButton from '../../components/modal/repoButton';

const axios = require('axios');

Enzyme.configure({ adapter: new Adapter() });
const whenStable = async () => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
};

describe('pass props to RepoButton component', () => {
  it('should pass props to RepoButton component', async () => {
    const mResponse = { data: ['a', 'b'] };
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mResponse);
    const url = 'https://api.github.com/users/dhh/repos';
    const wrapper = shallow(<RepoButton url={url} />);
    await whenStable();
    // Accessing component props
    expect(wrapper.instance().props.url).toEqual('https://api.github.com/users/dhh/repos');
    getSpy.mockRestore();
  });

  it('calls componentDidMount', () => {
    jest.spyOn(RepoButton.prototype, 'componentDidMount');
    const url = 'https://api.github.com/users/dhh/repos';
    const wrapper = mount(<RepoButton url={url} />);
    expect(RepoButton.prototype.componentDidMount.mock.calls.length).toBe(1);
  });

  it('contains h2 render', () => {
    jest.spyOn(RepoButton.prototype, 'componentDidMount');
    const url = 'https://api.github.com/users/dhh/repos';
    const wrapper = mount(<RepoButton url={url} />);
    const value = wrapper.find('h2').text();
    expect(value).toEqual('Public Repository');
  });
});
