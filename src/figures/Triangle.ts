import { Iforme } from "./Iforme";

class Triangle implements Iforme {
    private _longeurCote: number;
    private _height: number;

    constructor(longeurCote:number, height: number) {
        this._longeurCote = longeurCote;
        this._height = height;
    }

    public calculerAire() : number{
        return (this.longeurCote * this.height) / 2; // (C x H) / 2
    }
  
    public calculerPerimetre() : number{
        return 3 * this.longeurCote; // 3 x C
    }

    public get longeurCote(): number {
        return this._longeurCote;
    }
    public set longeurCote(value: number) {
        this._longeurCote = value;
    }

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
}