// ./CepService.ts
import FooCepAPI from './FooCepAPI';
import ICepAPI from './@types/ICepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor(cepApi: ICepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
