import ICepAPI from "./@types/ICepAPI";

class MockCepAPI implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `Alguma coisa blablabla ${cep} - ${number}`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `Outra coisa blablabla ${address} - ${number}`
  }
}

export default MockCepAPI;
