import { Iforme } from "./Iforme";

export class Cercle implements Iforme {
   static nombreCercle: number = 0;
   private _rayon: number;
   private static _pi: number;

   constructor(rayon:number, pi:number = Math.PI) {
      Cercle.nombreCercle++;
      this._rayon = rayon;
      Cercle._pi = pi;
   }

   public calculerAire() : number{
      return Cercle._pi * this.rayon ^ 2; // π x R²
   }

   public calculerPerimetre() : number{
      return Math.round((2 * Cercle._pi * this.rayon)*100)/100; // 2 x π x R
   }

   static calculerSommeAirePerimetre(aire: number, perimetre: number) {
      return aire + perimetre;
   }

   public get rayon(): number {
      return this._rayon;
   }
   public set rayon(value: number) {
      this._rayon = value;
   }

   public static get pi(): number {
      return Cercle._pi;
   }
   public static set pi(value: number) {
      Cercle._pi = value;
   }
}