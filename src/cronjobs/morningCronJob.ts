import { CustomCronJob } from "./customCronJob";

class MorningCronJob extends CustomCronJob{
    constructor(){
        super('00', '00', '9', func)
    }
}

function func() {
    console.log("asdbhasdlkiasd");
}

export{MorningCronJob}