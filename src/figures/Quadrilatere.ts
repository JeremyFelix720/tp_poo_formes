import { Iforme } from "./Iforme";

export class Quadrilatere implements Iforme {
    static nombreQuadrilatere: number = 0;
    private _cote1: number;
    private _cote2: number;
    private _cote3: number;
    private _cote4: number;

    constructor(cote1: number, cote2: number, cote3: number, cote4: number) {
        Quadrilatere.nombreQuadrilatere++;
        this._cote1 = cote1;
        this._cote2 = cote2;
        this._cote3 = cote3;
        this._cote4 = cote4;
    }

    public calculerAire() : number{
        let min = Math.max(this._cote1, this._cote2, this._cote3, this._cote4);
        let max = Math.min(this._cote1, this._cote2, this._cote3, this._cote4);
        return min * max; // Cmax x Cmin
    }

    public calculerPerimetre() : number{
        return this.cote1 + this.cote2 + this.cote3 + this.cote4 ; // C1 + C2 + C3 + C4
    }

    static calculerSommeAirePerimetre(aire: number, perimetre: number) {
        return aire + perimetre;
    }

    public get cote1(): number {
        return this._cote1;
    }
    public set cote1(value: number) {
        this._cote1 = value;
    }

    public get cote2(): number {
        return this._cote2;
    }
    public set cote2(value: number) {
        this._cote2 = value;
    }

    public get cote3(): number {
        return this._cote3;
    }
    public set cote3(value: number) {
        this._cote3 = value;
    }

    public get cote4(): number {
        return this._cote4;
    }
    public set cote4(value: number) {
        this._cote4 = value;
    }
}