import { Iforme } from "./Iforme";

class Carre implements Iforme {
    private _longeurCote: number;

    constructor(longeurCote:number) {
        this._longeurCote = longeurCote;
    }

    public calculerAire() : number{
        return this.longeurCote ^ 2; // C x C
    }

    public calculerPerimetre() : number{
        return this.longeurCote * 4; // C x 4
    }
   
    public get longeurCote(): number {
        return this._longeurCote;
    }
    public set longeurCote(value: number) {
        this._longeurCote = value;
    }
}