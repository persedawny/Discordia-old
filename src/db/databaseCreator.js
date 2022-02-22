const TestModel = require('./testModel');

class DatabaseCreator{
    static CreateDatabase(client){
        new TestModel(client).CreateTable();
    }
}

module.exports = DatabaseCreator;