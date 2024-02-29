import totalizador from "./totalizador.js";

describe("totalizador", () => {
 /* it("deberia delvolver el numeron ingresado en la cantidad de items", () => {
    expect(totalizador(3)).toEqual(3);
  });*/
  it("deberia delvolver el numeron ingresado del precio neto  de item respectivo con la cantidad", () => {
    expect(totalizador(3,4)).toEqual(12);
  });
});
