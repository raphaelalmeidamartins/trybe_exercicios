interface IRepository<Entity, EntityEdit> {
  list(): Promise<Entity[]>;
  getById(id: number): Promise<Entity>;
  register(data: Entity): Promise<Entity>;
  update(id: number, data: EntityEdit): Promise<Entity>;
  remove(id: number): Promise<Entity>;
}

export default IRepository;
