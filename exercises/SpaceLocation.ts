// Paste in the provided code here:
import { Spacecraft } from "./parts1-5";

export class SpaceLocation {
    kilometersAway: number;
    name: string;
 
    constructor(name: string, kilometersAway: number) {
       this.name = name;
       this.kilometersAway = kilometersAway;
    }
}