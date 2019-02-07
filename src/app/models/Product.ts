export class Product {
  private id: number;
  private model: string;
  private make: string;
  private year: number;
  private vin: string;

  constructor(id: number, model: string, make: string, year: number, vin: string) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.year = year;
    this.vin = vin;
  }
}
