function displayEmployeeDetails() {

var EmployeeDetails= [		// variable Employee details is an array of objects. It has 5 different objects
	 {
			empName  	: "Shruthi",
			empAge   	: 24,
			empSalary	: 30000,
			empAddress	: {
						City  		: "Bangalore",
						State		: "Karnataka",
						pinCode 	: 560076
					 	  }	
	}
	,
	{
			empName  	: "swati",
			empAge   	: 24,
			empSalary	: 40000,
			empAddress	: {
						City  		: "Bangalore",
						State		: "Karnataka",
						pinCode 	: 560076
						  }
	},
	{
			empName  	: "veda",
			empAge   	: 25,
			empSalary	: 50000,
			empAddress	: {
						City  		: "Mangalore",
						State		: "Karnataka",
						pinCode 	: 560076
					  	  }
	},
	{
			empName  	: "Manasa",
			empAge   	: 26,
			empSalary	: 60000,
			empAddress	: {
						City  		: "Pune",
						State		: "Karnataka",
						pinCode 	: 560076
						  }
	},
	{
			empName  	: "Shwetha",
			empAge   	: 27,
			empSalary	: 70000,
			empAddress	: {				//nested object
						City  		: "Mumbai",
						State		: "Karnataka",
						pinCode 	: 560076
						}
	}
];

var x;

var text;

for (x in EmployeeDetails) {	// here x takes the index of the array i.e x = 0, 1,2, 3, 4, 5 in this case
	text = EmployeeDetails[x];  // x is passed as the index to EmployeeDetails array since it stored the index value of EmployeeDetails array
	//text variable stores the objects of the array.

	console.log("Employee Name : " + text.empName);
	console.log("Employee Age :  " + text.empAge);
	console.log("Employee Salary : " + text.empSalary);
	console.log("Employee Address : " + text.empAddress["City"] + " " + text.empAddress["State"] + " " + text.empAddress["pinCode"]);
}

}

displayEmployeeDetails();	//function call to display all the employee details