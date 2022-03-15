import { BaseEntity } from "./baseEntity";

export class TestEntity extends BaseEntity { 
    TestValue: string;

    constructor(client){
        super(client, "Test");
        
        this.TestValue = "Test";
    }
}