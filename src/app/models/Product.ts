export class Product {
  public id: number;
  public model: string;
  public make: string;
  public year: number;
  public vin: string;

  constructor(id: number, model: string, make: string, year: number, vin: string) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.year = year;
    this.vin = vin;
  }
}
