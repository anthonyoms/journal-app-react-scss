import {types} from "../../types/types";
const testTypes = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",

  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",

  uiStartLoading: "[UI] Start loading",
  uiFinishLoading: "[UI] Finish loading",

  notesAddNew: "[Notes] New notes",
  notesActive: "[Notes] Set active note",
  notesLoad: "[Notes] Load notes",
  notesUpdated: "[Notes] Update note",
  notesFileUrl: "[Notes] Updated image url",
  notesDelete: "[Notes] Delete note",
  notesLogoutCleaning: "[Notes] Logout Cleaning",
};

describe("Pruebas archivo types", () => {
  test("Deben coincidir los tipos", () => {
    expect(testTypes).toEqual(types);
  });
});
