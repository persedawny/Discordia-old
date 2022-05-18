# How to make a database model
```typescript
import { BaseEntity } from "../../abstractions/baseEntity";

export default class extends BaseEntity { 
    text: string;
    
    constructor(){
        super("Test");
    }
}
```

All you need to do is make a new class in the database -> models folder.
The class should always extend ```BaseEntity```! And in the constuctor you will need to call the constructor of ```BaseEntity``` with the name of the table.
All the properties you give this class will be used while generating your new database table.