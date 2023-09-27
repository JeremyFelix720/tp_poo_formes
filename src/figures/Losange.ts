import { Iforme } from "./Iforme";

export class Losange implements Iforme {
    private _petiteDiagonale: number;
    private _grandeDiagonale: number;

    constructor(petiteDiagonale: number, grandeDiagonale: number) {
        this._petiteDiagonale = petiteDiagonale,
        this._grandeDiagonale = grandeDiagonale
    }

    public calculerAire(): number{
        return (this.grandeDiagonale * this.petiteDiagonale) / 2; // (D x d) / 2
    }

    public calculerPerimetre(): number{
       return Math.round((2 * Math.sqrt(this._petiteDiagonale ^ 2 + this._grandeDiagonale ^ 2))*100)/100; // 2 x √(d ^ 2 + D ^ 2);
   }

    public get petiteDiagonale(): number {
        return this._petiteDiagonale;
    }
    public set petiteDiagonale(value: number) {
        this._petiteDiagonale = value;
    }

    public get grandeDiagonale(): number {
        return this._grandeDiagonale;
    }
    public set grandeDiagonale(value: number) {
        this._grandeDiagonale = value;
    }
}