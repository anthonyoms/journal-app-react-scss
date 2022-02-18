import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";

jest.mock("../../firebase/firebase-config", () => ({
  firebase: {
    auth: () => ({
      onAuthStateChanged: jest.fn((callback) =>
        callback({ uid: '1234', displayName: "John" })
      ),
    }),
  },
}));

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: "El email no es correcto",
  },
  notes: {
    notes: [],
    active: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en AppRouter", () => {
  test("debe de llamar el login si estoy autenticado", async () => {
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );

    expect(login).toHaveBeenCalledWith('1234', "John");
  });
});
