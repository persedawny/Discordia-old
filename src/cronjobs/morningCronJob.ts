import { CustomCronJob } from "../classes/CustomCronJob";

class MorningCronJob extends CustomCronJob{
    constructor(){
        super('00', '00', '9', func)
    }
}

function func() {
    console.log("asdbhasdlkiasd");
}

export{MorningCronJob}