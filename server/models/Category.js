
//Construct Category model with active database object.
//Make sure Category is instantiated

function Category(db){
    'use strict';
    // If this constructor is called without the "new" operator, "this" points
    // to the global object. Log a warning and call it correctly.
    if (false === (this instanceof Category)) {
        console.log('Warning: Category constructor called without "new" operator');
        return new Category(db);
    }

    category = db.collection('Category');
    this.insertCategory = function(categoryData, cb){
        console.log('inserting a new Category');
        cb(null, 'inserted a new category');

    };

    this.updateCategory = function(categoryData){


    };

    this.deleteCategory = function(categoryData){


    };

    this.findChildCategories = function(categoryData){


    };

    this.updateIndexSchema = function(categoryData){


    };

}

module.exports.Model = Category;


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
