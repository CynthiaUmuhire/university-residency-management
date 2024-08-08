# University Residence Management System

## Goals

- Utilize Object-Oriented Programming (OOP) principles in JavaScript.
- Design and implement classes for managing university housing.

## Implementation Details

1. **Residence Class:**
   - Serves as a base class for DormRoom and Apartment.
   - Includes common attributes such as name, address, and occupancy status.

2. **DormRoom Class:**
   - Inherits from Residence.
   - Adds an attribute for size.
   - Includes a method to calculate rent based on room size.

3. **Apartment Class:**
   - Inherits from Residence.
   - Adds an attribute for the number of bedrooms.
   - Includes a method to calculate rent based on the number of bedrooms.

4. **Student Class:**
   - Contains attributes like name, studentId, gender, and residence.
   - Includes a method to assign a residence to the student and mark it as occupied.

5. **MaintenanceRequest Class:**
   - Includes attributes such as description, student, status, and employee.
   - Provides methods for updating the request status and assigning an employee.
