## Page Navigation

| Path | _ |
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

Api Endpoints

GET	/organization	Organization lists
GET	/organization/:id/	Get organization 
POST	/organization	Create organization
PUT	/organization/:id/	Update organization
GET	/organization/:id/customer	Organization's customers list
POST	/customer	new Customer
GET	/ customer /:id	Get customer
PUT	/ customer /:id/	Update Customer
GET	/ customer /:id/program	List of customer programs
POST	/program	New program
GET	/program/:id	Get program
PUT	/program/:id	Update program
GET	/organization/:id/project	Get organization project
Post	/project	New project
Put	/project/:id	Update project
GET	/project/:id	Get project

Models

Organization
Name	Organization name	String
Length:25
Required
		

Customer
Id	Identity num	String
Length:9
Required
Id validation
First name		String
Length:25
Required
Last Name		String
Length:25
Required
Street		String 
Length:30
City	CityID , CityName	ObjectId

Email		String
Length:50

Phone		String
Length:10
Organization	OrganizationID	ObjectId

Project
Name	Project Name	String
Length:25
Required
Organization	Organization id	ObjectId
required

Program
Sum		Number
Required
StartDate 	Organization id	Date
Required

NumOfPayments		Number

launchDay
		Number
Required
PaymentMethod		
Project	Project ID	Objectid
Required
Customer	Customer ID	objectID
Required

