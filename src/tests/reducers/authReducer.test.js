import { types } from "../../types/types";
import { authReducer } from "../../reducers/authReducer";

describe("Pruebas en el authReducer", () => {
  test("debe retornar el estado para el login", () => {
    const state = authReducer(
      {},
      {
        type: types.login,
        payload: {
          uid: "61390a1d18c64010a412479c",
          displayName: "Anthony",
        },
      }
    );
    expect(state).toEqual({ uid: "61390a1d18c64010a412479c", name: "Anthony" });
  });

  test("debe retornar el estado correcto para la accion logout {}", () => {
    const state = authReducer(
      {
        uid: "61390a1d18c64010a412479c",
        displayName: "Anthony",
      },
      { type: types.logout }
    );
    expect(state).toEqual({});
  });

  test("debe retornar el estado por default", () => {
    const state = authReducer(
      {
        uid: "61390a1d18c64010a412479c",
        displayName: "Anthony",
      },
      { type: "El Pepe" }
    );
    expect(state).toEqual({
      uid: "61390a1d18c64010a412479c",
      displayName: "Anthony",
    });
  });
});
