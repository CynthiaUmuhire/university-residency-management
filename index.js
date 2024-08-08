import DormRoom from './models/DormRoom.js';
import Apartment from './models/Apartment.js';
import Student from './models/Student.js';
import MaintenanceRequest from './models/MaintenanceRequest.js';

const dorm = new DormRoom("UR residency", 'Kigali, Kiyovu', 120);
const apartment = new Apartment(24, 'Kigali street', 3);
const student = new Student('Aura Dushime', '1234ddd', 'Female');

student.assignResidence(dorm);
const request = new MaintenanceRequest('Squeky noices', student);

console.log(`Details of a student: ${student.details}`);
console.log(`Student's request: ${request.details}`);

console.log(`Dorm rent: $${dorm.calculateRent()}`);
console.log(`Apartment rent: $${apartment.calculateRent()}`);
