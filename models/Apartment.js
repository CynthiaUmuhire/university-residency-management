import Residence from './Residence.js';


export default class Apartment extends Residence {
  constructor(name, address, bedrooms, isOccupied = false) {
    super(name, address, isOccupied);
    this.bedrooms = bedrooms;
  }

  calculateRent() {
    const baseRate = 500; 
    const bedroomRate = 200;
    return baseRate + this.bedrooms * bedroomRate;
  }

  get details() {
    return {
      ...super.details,
      bedrooms: this.bedrooms,
    };
  }
}
