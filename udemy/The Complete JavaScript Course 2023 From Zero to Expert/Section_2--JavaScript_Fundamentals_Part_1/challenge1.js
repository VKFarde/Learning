//CREATION  AND DECLERATION AND DEFINE THE VARIABLE AND PERFORMING OPRATION ON THEM [VAR, LET, CONST]
class clc {
    constructor(mass, height) {
        this.mass = mass;
        this.height = height;
    }
    BMI() {
        var bmi = this.mass / this.height ** 2;
        return bmi;
    }

}

let marks = new clc(78, 1.69);
var marksbmi = marks.BMI();
let jon = new clc(92, 1.95);
var jonbmi = jon.BMI();

if (marksbmi > jonbmi) {
    console.log(true);
}
