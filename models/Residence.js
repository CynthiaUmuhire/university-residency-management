
export default class Residence {
  constructor(name, address, isOccupied = false) {
    this.name = name;
    this.address = address;
    this.isOccupied = isOccupied;
  }

  get details() {
    return {
      name: this.name,
      address: this.address,
      isOccupied: this.isOccupied,
    };
  }

  set updateOccupancy(status) {
    if (typeof status !== 'boolean')
      throw new Error('Status should be either true or false');
    this.isOccupied = status;
  }
}
