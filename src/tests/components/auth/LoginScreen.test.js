import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initlState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initlState);
store.dispatch = jest.fn();
const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <Routes>
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </MemoryRouter>
  </Provider>
);
describe("Pruebas en el <LoginScreen />", () => {
  beforeEach(() => {
    store = mockStore(initlState);
    jest.clearAllMocks;
  });

  test("debe de mostrase correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar la accion de startGoogleLogin", () => {
    wrapper.find(".google-btn").prop("onClick")();

    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("debe de disparar startLoginEmailPassword con sus argumentos", () => {
    const submit = wrapper.find("form").prop("onSubmit");
    submit({ preventDefault() {} });

    expect(startLoginEmailPassword).toHaveBeenCalledWith(
      "anthony.otoniel@hotmail.com",
      "Anthony123456@123"
    );
  });
});
