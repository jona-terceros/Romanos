//import sumar from "./sumador.js";

import romano from "./romanos";

describe("numero romano", () => {
  it("deberia tomar el numero 1 y representarlo a romano", () => {
    expect(romano(1)).toEqual("I");
  });
  it("deberia tomar el numero 2 y representarlo a romano", () => {
    expect(romano(2)).toEqual("II");
  });
});

