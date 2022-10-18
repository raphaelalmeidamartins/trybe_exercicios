import IRepository from "../interfaces/IRepository";

class PlantRepository implements IRepository<IPlant, IPlantEdit> {
  async list(): Promise<IPlant[]> {
    
  }
}

export default PlantRepository;
