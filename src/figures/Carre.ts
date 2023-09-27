import { Iforme } from "./Iforme";

export class Carre implements Iforme {
    private _cote: number;

    constructor(cote:number) {
        this._cote = cote;
    }

    public calculerAire() : number{
        return this.cote ^ 2; // C x C
    }

    public calculerPerimetre() : number{
        return this.cote * 4; // C x 4
    }
   
    public get cote(): number {
        return this._cote;
    }
    public set cote(value: number) {
        this._cote = value;
    }
}