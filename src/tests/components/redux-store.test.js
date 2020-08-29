import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { createUser } from '../../actions/index';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('Redux store', () => {
  it('should dispatch createUser action', () => {
    store.dispatch(createUser({
      login: 'geraldgsh',
      id: 29500109,
    }));
    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
