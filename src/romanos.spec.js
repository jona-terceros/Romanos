//import sumar from "./sumador.js";

import romano from "./romanos";

describe("numero romano", () => {
  it("deberia tomar el numero 1 y representarlo a romano", () => {
    expect(romano(1)).toEqual("I");
  });
  it("deberia tomar el numero 2 y representarlo a romano", () => {
    expect(romano(2)).toEqual("II");
  });
  it("deberia tomar el numero 3 y representarlo a romano", () => {
    expect(romano(3)).toEqual("III");
  });
  it("deberia tomar el numero 5 y representarlo a romano", () => {
    expect(romano(5)).toEqual("V");
  });
  it("deberia tomar el numero 6 y representarlo a romano", () => {
    expect(romano(6)).toEqual("VI");
  });
  it("deberia tomar el numero  y representarlo a romano", () => {
    expect(romano(8)).toEqual("VIII");
  });
  it("deberia tomar el numero  y representarlo a romano", () => {
    expect(romano(9)).toEqual("IX");
  });
  it("deberia tomar el numero  y representarlo a romano", () => {
    expect(romano(20)).toEqual("XX");
  });
  it("deberia tomar el numero  y representarlo a romano", () => {
    expect(romano(50)).toEqual("L");
  });
});

