const BaseModel = require('./baseModel');

class TestModel extends BaseModel {
    constructor(client){
        super(client, "Test");
        this.TestValue = "Value"
    }
}

module.exports = TestModel;