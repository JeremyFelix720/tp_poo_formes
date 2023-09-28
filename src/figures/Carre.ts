import { Iforme } from "./Iforme";

export class Carre implements Iforme {
    static nombreCarre: number = 0;
    private _cote: number;

    constructor(cote:number) {
        Carre.nombreCarre++;
        this._cote = cote;
    }

    public calculerAire() : number{
        return this.cote ^ 2; // C x C
    }

    public calculerPerimetre() : number{
        return this.cote * 4; // C x 4
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
}