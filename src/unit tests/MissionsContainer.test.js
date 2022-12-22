import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionContainer from '../components/MissionContainer';
import store from '../redux/configureStore';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

it('render', () => {
 const tree = renderer
   .create(
    <Provider store={store}>
   <MissionContainer />
   </Provider>)
   .toJSON();
 expect(tree).toMatchSnapshot();
});

test('renders content', () => {
  const component = render(<Provider store={store}>
    <MissionContainer />
    </Provider>)
 expect(component.container).toHaveTextContent('Mission');
 expect(component.container).toHaveTextContent('Description');
 expect(component.container).toHaveTextContent('Status');
})