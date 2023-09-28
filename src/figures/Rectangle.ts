import { Iforme } from "./Iforme";

export class Rectangle implements Iforme {
    static nombreRectangle: number = 0;
    private _longeur: number;
    private _largeur: number;

    constructor(longeur:number, largeur: number) {
        Rectangle.nombreRectangle++;
        this._longeur = longeur;
        this._largeur = largeur;
    }

    public calculerAire() : number{
        return this.longeur * this.largeur; // L x l
    }
  
    public calculerPerimetre() : number{
        return 2 * (this.longeur + this.largeur); // 2 x (L + l)
    }

    static calculerSommeAirePerimetre(aire: number, perimetre: number) {
        return aire + perimetre;
    }

    public get longeur(): number {
        return this._longeur;
    }
    public set longeur(value: number) {
        this._longeur = value;
    }

    public get largeur(): number {
        return this._largeur;
    }
    public set largeur(value: number) {
        this._largeur = value;
    }
}