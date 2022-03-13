import { TestModel } from "./testModel";

export class DatabaseCreator{
    static CreateDatabase(client){
        new TestModel(client).CreateTable();
    }
}