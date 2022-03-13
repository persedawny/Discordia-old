import { BaseModel } from "./baseModel";

export class TestModel extends BaseModel {
    TestValue: string;
    
    constructor(client){
        super(client, "Test");
        this.TestValue = "Value"
    }
}