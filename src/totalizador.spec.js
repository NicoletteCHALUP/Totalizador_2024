import totalizador from "./totalizador.js";

describe("totalizador", () => {
  it("deberia delvolver el numeron ingresado en la cantidad de items", () => {
    expect(totalizador(3)).toEqual(3);
  });
});
