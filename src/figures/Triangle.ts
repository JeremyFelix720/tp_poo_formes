import { Iforme } from "./Iforme";

export class Triangle implements Iforme {
    static nombreTriangle: number = 0;
    private _cote: number;
    private _height: number;

    constructor(cote:number, height: number) {
        Triangle.nombreTriangle++;
        this._cote = cote;
        this._height = height;
    }

    public calculerAire() : number{
        return (this.cote * this.height) / 2; // (C x H) / 2
    }
  
    public calculerPerimetre() : number{
        return 3 * this.cote; // 3 x C
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

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
}