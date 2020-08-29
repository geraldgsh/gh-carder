import userReducer from '../../Reducers/users';

const initialState = {
  pending: false,
  categories: [],
  error: undefined,
};

describe('update category', () => {
  it('should fetch the categories', () => {
    expect(userReducer(initialState, { type: 'FETCH_CATEGORIES_SUCCESS', categories: ['beef', 'chicken'] })).toEqual({ ...initialState, categories: ['beef', 'chicken'] });
  });
});
