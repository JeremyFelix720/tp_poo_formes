import { Iforme } from "./figures/Iforme";
import { Carre } from "./figures/Carre";
import { Rectangle } from "./figures/Rectangle";
import { Cercle } from "./figures/Cercle";
import { Triangle } from "./figures/Triangle";
import { Losange } from "./figures/Losange";
import { Parallelogramme } from "./figures/Parallelogramme";
import { PentagoneR } from "./figures/PentagoneR";
import { Quadrilatere } from "./figures/Quadrilatere";

let carre1: Iforme = new Carre(5);
let rectangle1: Iforme = new Rectangle(7, 5);
let cercle1: Iforme = new Cercle(5);
let triangle1: Iforme = new Triangle(7, 5);
let losange1: Iforme = new Losange(5, 7);
let parallelogramme1: Iforme = new Parallelogramme(5, 7);
let pentagone1: Iforme = new PentagoneR(5, 4);
let quadrilatere1: Iforme = new Quadrilatere(3, 4, 3, 4);

console.log("Aire de carre1 : " + carre1.calculerAire());
console.log("Périmètre de carre1 : " + carre1.calculerPerimetre());

console.log("Aire de rectangle1 : " + rectangle1.calculerAire());
console.log("Périmètre de rectangle1 : " + rectangle1.calculerPerimetre());

console.log("Aire de cercle1 : " + cercle1.calculerAire());
console.log("Périmètre de cercle1 : " + cercle1.calculerPerimetre());

console.log("Aire de triangle1 : " + triangle1.calculerAire());
console.log("Périmètre de triangle1 : " + triangle1.calculerPerimetre());

console.log("Aire de losange1 : " + losange1.calculerAire());
console.log("Périmètre de losange1 : " + losange1.calculerPerimetre());

console.log("Aire de parallelogramme1 : " + parallelogramme1.calculerAire());
console.log("Périmètre de parallelogramme1 : " + parallelogramme1.calculerPerimetre());

console.log("Aire de pentagone1 : " + pentagone1.calculerAire());
console.log("Périmètre de pentagone1 : " + pentagone1.calculerPerimetre());

console.log("Aire de quadrilatere1 : " + quadrilatere1.calculerAire());
console.log("Périmètre de quadrilatere1 : " + quadrilatere1.calculerPerimetre());