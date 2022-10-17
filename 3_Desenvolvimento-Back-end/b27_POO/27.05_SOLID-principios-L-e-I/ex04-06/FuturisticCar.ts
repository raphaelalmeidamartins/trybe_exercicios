// ./FuturisticCar.ts
import { IAirVehicle, ILandVehicle } from './interfaces';

export default class FuturisticCar implements ILandVehicle, IAirVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
