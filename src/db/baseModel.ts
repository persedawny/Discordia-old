import { CustomClient } from "../classes/customClient";

export class BaseModel {
    rowid: number;
    client: CustomClient;
    tableName: string;

    constructor(client, tableName?) {
        this.rowid = 0;
        this.client = client;
        this.tableName = tableName;
    }

    RunQuery(query){
        try {
            let preparedQuery = this.client.databaseConnection.prepare(query);
            preparedQuery.run()
        } catch (ex) {
            throw ex;
        }
    }

    RunQueryWithParameters(query, paramaters) {
        try {
            let preparedQuery = this.client.databaseConnection.prepare(query);
            preparedQuery.run(paramaters)
        } catch (ex) {
            throw ex;
        }
    }

    CreateTable() {
        let properties = this.GetDerivedClassProperties();
        let query = "CREATE TABLE IF NOT EXISTS " + this.tableName + " (rowid, " + properties.join(', ') + ")";

        this.RunQuery(query);
    }

    GetDerivedClassProperties(){
        let newBase = new BaseModel(this.client);
        let baseProperties = Object.getOwnPropertyNames(newBase);
        let properties = Object.getOwnPropertyNames(this);

        for (let i = 0; i < baseProperties.length; i++)
            properties.shift();

        if(!properties.length)
            throw 'No properties were found in the derived class!'
        
        return properties;
    }
}