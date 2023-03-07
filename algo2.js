class Ninja {
    constructor( name,health,speed,strength) {
        this.name = name 
        this.health = health || 10
        this.strength = strength ||  10
        this.speed = speed || 10
    }
    showStats(){
        console.log(`name: ${this.name}  strength: ${this.strength} speed: ${this.speed}`)

    }
    SayName() {
        console.log(`name: ${this.name}`)

    }
    drinkSake() {
        this.health += 10 ; 
        console.log(`health: ${this.health}`)
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.SayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja{
    constructor (name,health,strength,speed,wisdom){
        super(name, health, strength, speed)
         this.wisdom = wisdom = 10
    }
    speakWisdom(){
        this.drinkSake()
            console.log("What one programmer can do in one month, two programmers can do in two months.");

        
        
    }
    
   
    }
  const superSensei = new Sensei("Master Splinter",200,10,10);
  superSensei.showStats();
  superSensei.speakWisdom();