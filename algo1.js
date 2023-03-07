
class Ninja {
    constructor( name, health) {
        this.name = name;
        this.health = 50;
        this.strength = 0;
        this.speed = 0;
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