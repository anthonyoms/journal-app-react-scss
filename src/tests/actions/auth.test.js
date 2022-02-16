import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";

import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from "../../actions/auth";

jest.mock("../../firebase/firebase-config", () => ({
  firebase: {
    auth: () => ({
      signOut: jest.fn(),
      signInWithEmailAndPassword: jest.fn(() =>
        Promise.resolve({
          user: { uid: "HKJEDUEzkefYtZ5xMIhHcVJ283x2", displayName: "Anthony" },
        })
      ),
    }),
  },
}));

import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initlState = {};

let store = mockStore(initlState);

describe("Pruebas con las acciones de Auth", () => {
  beforeEach(() => {
    store = mockStore(initlState);
  });

  test("login y logout deben crear la accion respectiva", () => {
    const loginAction = login("TESTING", "Anthony");
    expect(loginAction).toEqual({
      type: types.login,
      payload: { uid: "TESTING", displayName: "Anthony" },
    });
    const logoutAction = logout();
    expect(logoutAction).toEqual({ type: types.logout });
  });

  test("debe de  realizar el startLogout", async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.logout });
    expect(actions[1]).toEqual({ type: types.notesLogoutCleaning });
  });
  test("debe de iniciar el startLoginEmailPassword", async () => {
    await store.dispatch(startLoginEmailPassword("test@test.com", "123456"));
    const actions = store.getActions();

    expect(actions[1]).toEqual({
      type: types.login,
      payload: { uid: "HKJEDUEzkefYtZ5xMIhHcVJ283x2", displayName: "Anthony" },
    });
  });
});
