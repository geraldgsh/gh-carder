import { createUser, removeUser } from '../../actions/index';

describe('add user', () => {
  it('should add user to reducer', () => {
    const user = {
      login: 'geraldgsh',
      id: 29500109,
    };
    const expectedAction = {
      user,
      type: 'CREATE_USER',
    };
    expect(createUser(user)).toEqual(expectedAction);
  });
});

describe('remove user', () => {
  it('should remove user from reducer', () => {
    const user = {
      login: 'geraldgsh',
      id: 29500109,
    };
    const expectedAction = {
      user,
      type: 'REMOVE_USER',
    };
    expect(removeUser(user)).toEqual(expectedAction);
  });
});
