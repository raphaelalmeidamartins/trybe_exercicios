import { ILandVehicle } from "./interfaces";

class Car implements ILandVehicle {
  drive(): void {
    console.log('Drive car');
  }
}