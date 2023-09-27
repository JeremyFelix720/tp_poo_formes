import { Iforme } from "./Iforme";

class Rectangle implements Iforme {
    private _longeurCote: number;
    private _largeurCote: number;

    constructor(longeurCote:number, largeurCote: number) {
        this._longeurCote = longeurCote;
        this._largeurCote = largeurCote;
    }

    public calculerAire() : number{
        return this.longeurCote * this.largeurCote; // L x l
    }
  
    public calculerPerimetre() : number{
        return 2 * (this.longeurCote + this.largeurCote); // 2 x (L + l)
    }

    public get longeurCote(): number {
        return this._longeurCote;
    }
    public set longeurCote(value: number) {
        this._longeurCote = value;
    }

    public get largeurCote(): number {
        return this._largeurCote;
    }
    public set largeurCote(value: number) {
        this._largeurCote = value;
    }
}