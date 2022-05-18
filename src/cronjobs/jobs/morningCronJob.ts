import { CustomClient } from "../../client/customClient";
import { CustomCronJob } from "../customCronJob";

export default class extends CustomCronJob{
    constructor(client: CustomClient){
        super('00', '00', '9', () => {
            // Your code goes here
        })
    }
}