import { Iforme } from "./Iforme";

export class Parallelogramme implements Iforme {
    private _hauteur: number;
    private _cote: number;

    constructor(hauteur: number, cote: number) {
        this._hauteur = hauteur,
        this._cote = cote
    }

    public calculerAire(): number{
        return this.hauteur * this.cote; // H x C
    }

    public calculerPerimetre(): number{
       return 2 * (this.hauteur + this.cote); // 2 x (H + C)
   }

    public get hauteur(): number {
        return this._hauteur;
    }
    public set hauteur(value: number) {
        this._hauteur = value;
    }

    public get cote(): number {
        return this._cote;
    }
    public set cote(value: number) {
        this._cote = value;
    }
}