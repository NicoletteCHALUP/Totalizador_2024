import { totalizador,Impuestos } from './totalizador';
describe("totalizador", () => {
  it("deberia delvolver el numero ingresado del precio neto  de item respectivo con la cantidad", () => {
    expect(totalizador(3,4)).toEqual(12);
  });
 
});

describe("Impuestos", () => {

     it("deberia delvolver el impuesto del estado seleccionado en este caso de CA", () => {
       expect(Impuestos("CA")).toEqual(8.25);
     });

     it("deberia delvolver el impuesto del estado seleccionado en este caso de UT", () => {
      expect(Impuestos("UT")).toEqual(6.65);
     });

    it("deberia delvolver el impuesto del estado seleccionado en este caso de NV", () => {
      expect(Impuestos("NV")).toEqual(8.00);
     });
    it("deberia delvolver el impuesto del estado seleccionado en este caso de TX", () => {
      expect(Impuestos("TX")).toEqual(6.25);
     });
    it("deberia delvolver el impuesto del estado seleccionado en este caso de AL", () => {
      expect(Impuestos("AL")).toEqual(4.00);
     });
   });