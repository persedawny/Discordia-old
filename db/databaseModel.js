class DatabaseModel {
    constructor(client, tableName) {
        this.client = client;
        this.tableName = tableName;
    }

    RunQuery(query, paramaters) {
        try {
            let preparedQuery = this.client.databaseConnection.prepare(query);
            preparedQuery.run(paramaters)
        } catch (ex) {
            throw ex;
        }
    }

    CreateTable() {
        let newBase = new DatabaseModel(this.client);
        let baseProperties = Object.getOwnPropertyNames(newBase);
        let properties = Object.getOwnPropertyNames(this);

        for (let i = 0; i < baseProperties.length; i++)
            properties.shift();

        let query = "CREATE TABLE IF NOT EXISTS " + this.tableName + " (rowid, " + properties.join(', ') + ")";
        this.client.databaseConnection.prepare(query);
    }
}

module.exports = DatabaseModel