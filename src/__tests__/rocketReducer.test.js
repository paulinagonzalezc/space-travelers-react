import { bookRocket } from '../redux/rockets/rockets';

describe('missionsReducer.js tests', () => {
  it('Expect ID of second mission to be 2', () => {
    expect(bookRocket(2).payload).toBe(2);
  });

  it('Expect type of joinMission dispatch to be JOIN_MISSION', () => {
    expect(bookRocket(2).type).toBe('space-travelers-react/rocketsReducer/BOOK');
  });
});
