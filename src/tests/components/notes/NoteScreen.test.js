import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { NoteScreen } from "../../../components/notes/NoteScreen";
import { activeNote } from "../../../actions/notes";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    notes: [],
    active: {
      id: 123456,
      title: "hola",
      body: "Mundo",
      date: 0,
    },
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();
const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);
describe("Pruebas en <NoteScreen/>", () => {
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de dispara el activeNote", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: { name: "title", value: "Hola de nuevo" },
    });
    expect(activeNote).toHaveBeenLastCalledWith(123456, {
      body: "Mundo",
      title: "Hola de nuevo",
      date: 0,
      id: 123456,
    });
  });
});
