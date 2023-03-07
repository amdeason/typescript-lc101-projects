import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let x: number[] = [1, 2, 3, 4, 5];        

        x.forEach( number => {
            console.log(number);
        })


        let test = 0;
        return test;
    }

    currentMassKg(): number {
        return this.sumMass( this.astronauts ) + this.sumMass( this.cargoItems );
    }

    canAdd( item: Payload ): boolean {
        return ( this.currentMassKg() + item.massKg ) <= this.totalCapacityKg;
    } 

    addCargo( cargo: Cargo ): boolean {
        if ( this.canAdd( cargo )) {
            this.cargoItems.push( cargo );
            return true;
        }
        else {
            return false;
        }
    }

    addAstronaut( astronaut: Astronaut ): boolean {
        if (this.canAdd( astronaut )) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
