/* eslint-disable no-undef */
import moxios from 'moxios';
import { correctGuess, fetchAndSetSecretWord, actionTypes } from '.';
import { storeFactory } from '../../test/testUtils';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    // toEqual is deep equality test
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

// When using moxios as fake server
// BE CAREFUL to see tests fail !!! if tests don't fail
// likely did not return store.dispatch() promise
// 1. Dispatch action creator using store.dispatch()
// 2. store.dispatch() returns promise
// 3. check state in .then() callback
describe('fetchAndSetSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    // FAKEING the Server Response with secretWord
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // Promise needs to be returned
    return store.dispatch(fetchAndSetSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
