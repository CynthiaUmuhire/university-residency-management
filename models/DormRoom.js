import Residence from './Residence.js';


export default class DormRoom extends Residence {
  constructor(name, address, size, isOccupied) {
 
    super(name, address, isOccupied);
    this.size = size; 
  }

  computeRent() {
    const ratePerSquareRoot = 2;
    return this.size * ratePerSquareRoot;
  }

  get details() {
    return {
      ...super.details,
      size: this.size,
    };
  }
}
