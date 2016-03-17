
//Construct Document model with active database object.
//Make sure Document is instantiated

function Document(db){
    'use strict';
    // If this constructor is called without the "new" operator, "this" points
    // to the global object. Log a warning and call it correctly.
    if (false === (this instanceof Document)) {
        console.log('Warning: Document constructor called without "new" operator');
        return new Document(db);
    }

    category = db.collection('Document');
    this.insertDocument = function(documentInfo){


    };

    this.updateDocument = function(documentInfo){


    };

    this.deleteDocument = function(documentInfo){


    };

    this.searchDocument = function(documentInfo){


    };

}

module.exports.Model = Document;


/*
"_id": 2,
	"isRoot": false,
	"parent_id": 1,
	"hasChild": false,
	"indexSchema":
		[
		{
			"fieldId": "001",
			"fieldName": "Payroll Date",
			"fieldType": "datetime",
			"isMandatory": true
		},
		{
			"fieldId": "002",
			"fieldName": "Salary Amount",
			"fieldType": "number",
			"isMandatory": true
		}

		]
*/
