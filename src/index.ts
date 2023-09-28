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
console.log("nombreCarre1 : " + Carre.nombreCarre); // 1
console.log("Aire de carre1 : " + carre1.calculerAire());
console.log("Périmètre de carre1 : " + carre1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de carre1 : " + Carre.calculerSommeAirePerimetre(carre1.calculerAire(), carre1.calculerPerimetre()));

let carre2: Iforme = new Carre(7);
console.log("nombreCarre2 : " + Carre.nombreCarre); // 2


let rectangle1: Iforme = new Rectangle(7, 5);
console.log("nombreRectangle1 : " + Rectangle.nombreRectangle); // 1
console.log("Aire de rectangle1 : " + rectangle1.calculerAire());
console.log("Périmètre de rectangle1 : " + rectangle1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de rectangle1 : " + Rectangle.calculerSommeAirePerimetre(rectangle1.calculerAire(), rectangle1.calculerPerimetre()));

let rectangle2: Iforme = new Rectangle(9, 12);
console.log("nombreRectangle2 : " + Rectangle.nombreRectangle); // 2


let cercle1: Iforme = new Cercle(5);
console.log("nombreCercle1 : " + Cercle.nombreCercle); // 1
console.log("Aire de cercle1 : " + cercle1.calculerAire());
console.log("Périmètre de cercle1 : " + cercle1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de cercle1 : " + Cercle.calculerSommeAirePerimetre(cercle1.calculerAire(), cercle1.calculerPerimetre()));

let cercle2: Iforme = new Cercle(7);
console.log("nombreCercle2 : " + Cercle.nombreCercle); // 2


let triangle1: Iforme = new Triangle(7, 5);
console.log("nombreTriangle1 : " + Triangle.nombreTriangle); // 1
console.log("Aire de triangle1 : " + triangle1.calculerAire());
console.log("Périmètre de triangle1 : " + triangle1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de triangle1 : " + Triangle.calculerSommeAirePerimetre(triangle1.calculerAire(), triangle1.calculerPerimetre()));

let triangle2: Iforme = new Triangle(9, 12);
console.log("nombreTriangle1 : " + Triangle.nombreTriangle); // 2


let losange1: Iforme = new Losange(5, 7);
console.log("nombreLosange1 : " + Losange.nombreLosange); // 1
console.log("Aire de losange1 : " + losange1.calculerAire());
console.log("Périmètre de losange1 : " + losange1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de losange1 : " + Losange.calculerSommeAirePerimetre(losange1.calculerAire(), losange1.calculerPerimetre()));

let losange2: Iforme = new Losange(7, 9);
console.log("nombreLosange2 : " + Losange.nombreLosange); // 2


let parallelogramme1: Iforme = new Parallelogramme(5, 7);
console.log("nombreParallelogramme1 : " + Parallelogramme.nombreParallelogramme); // 1
console.log("Aire de parallelogramme1 : " + parallelogramme1.calculerAire());
console.log("Périmètre de parallelogramme1 : " + parallelogramme1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de parallelogramme1 : " + Parallelogramme.calculerSommeAirePerimetre(parallelogramme1.calculerAire(), parallelogramme1.calculerPerimetre()));

let parallelogramme2: Iforme = new Parallelogramme(7, 9);
console.log("nombreParallelogramme2 : " + Parallelogramme.nombreParallelogramme); // 2


let pentagoneR1: Iforme = new PentagoneR(5, 4);
console.log("nombrePentagoneR1 : " + PentagoneR.nombrePentagoneR); // 1
console.log("Aire de pentagoneR1 : " + pentagoneR1.calculerAire());
console.log("Périmètre de pentagoneR1 : " + pentagoneR1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de pentagoneR1 : " + PentagoneR.calculerSommeAirePerimetre(pentagoneR1.calculerAire(), pentagoneR1.calculerPerimetre()));

let pentagoneR2: Iforme = new PentagoneR(7, 6);
console.log("nombrePentagoneR1 : " + PentagoneR.nombrePentagoneR); // 2


let quadrilatere1: Iforme = new Quadrilatere(3, 4, 3, 4);
console.log("nombreQuadrilatere1 : " + PentagoneR.nombrePentagoneR); // 2
console.log("Aire de quadrilatere1 : " + quadrilatere1.calculerAire());
console.log("Périmètre de quadrilatere1 : " + quadrilatere1.calculerPerimetre());
console.log("Somme de l'aire et du périmètre de pentagoneR1 : " + PentagoneR.calculerSommeAirePerimetre(pentagoneR1.calculerAire(), pentagoneR1.calculerPerimetre()));

let quadrilatere2: Iforme = new Quadrilatere(5, 4, 5, 4);
console.log("nombreQuadrilatere2 : " + Quadrilatere.nombreQuadrilatere); // 2