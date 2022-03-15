import { BaseEntity } from "./baseModel";

export class TestEntity extends BaseEntity {
    TestValue: string;
    
    constructor(client){
        super(client, "Test");
        this.TestValue = "Value"
    }
}