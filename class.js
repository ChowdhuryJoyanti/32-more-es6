// syntactic sugar

class Instructor {
    name ;
    designation = 'Web course Instractor'
    team = 'web team'
    location;

    constructor(name ,location){
         name = name;
         this.name = name;
         this.location = location;
    }
    startSupportSession (time){
        console.log(`start the support session at ${time}`);
    }
    creatQuize(module){
        console.log(`Please create quize for module ${module}`);
    }

}const aamir = new Instructor('aamir','mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.creatQuize(60);

const solaiman = new Instructor('Solaiman Khan', 'Dhaka');
console.log(solaiman);