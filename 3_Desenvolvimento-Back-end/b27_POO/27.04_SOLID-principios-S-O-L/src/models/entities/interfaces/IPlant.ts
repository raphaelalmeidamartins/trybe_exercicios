interface IPlant {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface PlantEdit {
  breed?: string,
  needsSun?: boolean,
  origin?: string,
  size?: number,
  specialCare?: { waterFrequency: number }
}

export { IPlant, PlantEdit };
