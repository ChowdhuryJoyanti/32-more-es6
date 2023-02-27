class TeamMember {
    name;
    location;
    constructor(name ,location){
        this.name = name;
        this.location =location;

    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
       
     }
}


class Instructor  extends TeamMember{
    // name ;
    designation = 'Web course Instractor'
    team = 'web team'
    // location;
    constructor(name,location){
        super(name,location);
    }

    // constructor(name ,location){
       
    //     //  this.name = name;
    //     //  this.location = location;
    // }
    startSupportSession (time){
        console.log(`start the support session at ${time}`);
    }
    creatQuize(module){
        console.log(`Please create quize for module ${module}`);
    }
//  provideFeedback(){
//     console.log(`${this.name}thank you for your feedback`);
//     console.log(``);
//  }
}



class Developer extends TeamMember {
    // name ;
    designation = 'Web course Instractor'
    team = 'web team'
    tech;
    // location;

    constructor(name ,location,tech){
       
        //  this.name = name;
        //  this.location = location;
        super(name ,location);
         this.tech = tech;
    }
   developFeature (featurer){
        console.log(`Please develiop the   ${featurer}`);
    }
 release(version){
        console.log(`Please realese the version ${version}`);
    }
//  provideFeedback(){
//     console.log(`${this.name} thank you for your feedback`);

//  }
}


class JobPlacement extends TeamMember {
    // name ;
    designation = 'Job placement commandos'
    team = 'Job Placement'
    region;
    // location;

    constructor(name ,location, region){
       
        //  this.name = name;
        //  this.location = location;

        super(name ,location);
         this.region = region;
    }
   provideResume (featurer){
        console.log(`Please develiop the   ${featurer}`);
    }
 prepareStudent(version){
        console.log(`Please realese the version ${version}`);
    }
//  provideFeedback(){
//     console.log(`${this.name} thank you for your feedback`);
//     console.log(``);
//  }
}


const alia = new Developer('Alia Bhat' , 'Dhaka', 'React')
console.log(alia);
alia.provideFeedback();
const bipasa = new JobPlacement ('bipasa' , 'kolkakta','India');
console.log(bipasa);