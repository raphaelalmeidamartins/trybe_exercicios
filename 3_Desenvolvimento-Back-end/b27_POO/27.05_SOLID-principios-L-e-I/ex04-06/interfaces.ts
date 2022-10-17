// ./interfaces.ts
interface ILandVehicle {
  drive(): void;  
}

interface IAirVehicle {
  fly(): void;
}

export {
  ILandVehicle,
  IAirVehicle,
}
