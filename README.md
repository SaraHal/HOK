## Models

##### Organization
 * name (Required, Type: string, max-length:25)
 * communication (Required, Type: Communication)
 * masavData (Required at least 1 of the properties: credit or charge)
    * Credit
      * CodeNosse (Type: string, length:8)
      * senderCode (Type: string, length:5)
    * Charge
      * CodeNosse (Type: string, length:8)
      * senderCode (Type: string, length:5)
 * concats (Type: [ Concat ])
 * paymentAgreement
    * minPrice (Required, Type: Number)
    * commissionPerUnit (Required, Type: Number)
    * dayOfCharge (Required, Type: Number, range: 1-28)
    * paymentMethod (Required, Type: PaymentMethod)
    
##### Customer
 * Id (Required, Type: string, length:9)
 * First name (Required, Type: string, max-length:25)
 * Last Name (Required, Type: string, max-length:25)
 * communication (Required, Type: Communication)
 * Organization (Type: ObjectId)
 
##### Project
 * Name (Required, Type: string, max-length:25)
 * Organization (Required, Type: ObjectId)
 
##### Program
 * sum (Required, Type: Number)
 * startDate  (Required, Type: Date)
 * numOfPayments (Type: Number)
 * launchDay (Required, Type: Number)
 * paymentMethod (Required, Type: PaymentMethod)
 * project (Required, Type: ObjectId)
 * customer (Required, Type: ObjectId)

##### PaymentMethod (Required at least 1 of the properties: bankAccount or creditCard)
 * bankAccount
    * bankId (Required, Type: Number, length: 2)
    * branchId (Required, Type: string, length: 3)
    * accountNumber (Required, Type: string)
 * creditCard
    * creditNumber (Required, Type: string)
    * expiringDate (Required, Type: Mm/yyyy)
    * cvv2 (Required, Type: string, length: 3)
    
##### Concat
 * name (Required, Type: string, max-length:35)
 * celular (Required, Type: string, length:10)
 * email (Type: Email, max-length:50)
 * remarks  (Type: Email, max-length:50)
 
##### Communication 
 * address
    * city
      * id (Required, Type: string, length: 15)
      * name (Required, Type: string, length: 25)
    * street (Type: string, max-length:50)
 * phone (Type: string, length:10)
 * email (Type: Email, max-length:50)
    
## Page Navigation

|  |  |
| ------ | ------ |
| / | Redirect to / organization |
| /organization | Organization lists |
| /organization/:id/ | Redirect to /organization/:id/customer |
| /organization/:id/customer | Organization's customers list |
| /organization/:id/customer/create | new organization Customer |
| /organization/:id/edit | Edit organization details |
| /organization/:id/view | View organization details |
| /organization/:id/program | List of organization programs |
| /organization/:id/project | List of organization project |
| /organization/:id/project/create | New organization project |
| /customer/:id/ | Redirect to /customer/:id/program |
| /customer/:id/program | List of customer's programs |
| /customer/:id/program/create | New customer program |
| /customer/:id/edit | Edit customer details |
| /program/:id | View program details |
| /program/:id/edit | Edit program |

## Endpoints

|  |  |   |
| ------ | ------ | ------ |
| GET | /organization | Organization lists |
| GET | /organization/:id/ | Get organization |
| POST | /organization | Create organization |
| PUT | /organization/:id/ | Update organization |
| GET | /organization/:id/customer | Organization's customers list |
| POST | /customer | Create customer |
| GET | /customer/:id/ | Get customer |
| PUT | /customer/:id/ | Update customer |
| GET | /customer/:id/program | List of customer programs |
| POST | /program | Create program |
| GET | /program/:id/ | Get program |
| PUT | /program/:id/ | Update program |
| GET | /organization/:id/project | Get organization project |
| POST | /project | Create project |
| GET | /project/:id/ | Get project |
| PUT | /project/:id/ | Update project |

