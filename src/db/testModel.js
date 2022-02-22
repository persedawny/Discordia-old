const DatabaseModel = require('./databaseModel');

class TestModel extends DatabaseModel {
    constructor(client){
        super(client, "Test");
        this.TestValue = "Value"
    }
}

module.exports = TestModel;