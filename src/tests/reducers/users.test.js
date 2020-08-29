import userReducer from '../../Reducers/users';

const newState = [{
  uid: 1234,
  user: 'geraldgsh',
}];

const action = { type: 'CREATE_USER' };

describe('Add user', () => {
  it('should add user', () => {
    expect(userReducer(newState, action.type)).toEqual(newState, action.type);
  });
});
