export default class MaintenanceRequest {
  constructor(description, student, status = 'submitted', employee = null) {
    this.description = description;
    this.student = student;
    this.status = status;
    this.employee = employee;
  }

  modifyStatus(status) {
    this.status = status;
  }
 
  setEmployee(employee) {
    this.employee = employee;
  }

  get details() {
    return {
      description: this.description,
      student: this.student.details,
      status: this.status,
      employee: this.employee,
    };
  }
}
