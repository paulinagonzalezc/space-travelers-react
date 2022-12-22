import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionsProfile from '../components/MissionsProfile';
import store from '../redux/configureStore';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';


it('render', () => {
 const tree = renderer
   .create(
    <Provider store={store}>
   <MissionsProfile />
   </Provider>)
   .toJSON();
 expect(tree).toMatchSnapshot();
});

test('renders content', () => {
  const component = render(<Provider store={store}>
    <MissionsProfile />
    </Provider>)
 expect(component.container).toHaveTextContent('My Missions')
})