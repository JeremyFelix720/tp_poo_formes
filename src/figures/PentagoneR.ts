import { Iforme } from "./Iforme";

export class PentagoneR implements Iforme {
    static nombrePentagoneR: number = 0;
    private _cote: number;
    private _hauteur: number;

    constructor(cote:number, hauteur:number) {
        PentagoneR.nombrePentagoneR++;
        this._cote = cote;
        this._hauteur = hauteur;
    }

    public calculerAire() : number{
        return 5 * ((this.cote * this.hauteur) / 2); // 5 x ((C x H) / 2)
    }

    public calculerPerimetre() : number{
        return 5 * this.cote; // 5 x C
    }

    static calculerSommeAirePerimetre(aire: number, perimetre: number) {
        return aire + perimetre;
    }
   
    public get cote(): number {
        return this._cote;
    }
    public set cote(value: number) {
        this._cote = value;
    }

    public get hauteur(): number {
        return this._hauteur;
    }
    public set hauteur(value: number) {
        this._hauteur = value;
    }
}