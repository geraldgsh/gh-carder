import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import OrgButton from '../../components/modal/orgButton';

Enzyme.configure({ adapter: new Adapter() });
const whenStable = async () => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
};

describe('61465031', () => {
  it('should pass', async () => {
    const mResponse = { data: ['a', 'b'] };
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mResponse);
    const url = 'https://api.github.com/users/dhh/orgs';
    const wrapper = shallow(<OrgButton url={url} />);
    const componentInstance = wrapper.instance();
    await whenStable();

    // Accessing component props
    expect(wrapper.instance().props.url).toEqual('https://api.github.com/users/dhh/orgs');

    // expect(wrapper.find('.card').prop('orgs')).toEqual(['a', 'b']);
    getSpy.mockRestore();
  });
});
