///IMPLEMENTATION OF sTRING TEMPLETE AND IF--ELSE
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

var marks = new clc(78, 1.69);
var marksbmi = marks.BMI();
var jon = new clc(92, 1.95);
var jonbmi = jon.BMI();

if (marksbmi > jonbmi) {
    console.log(`marks bmi ${marksbmi} is higger than jons ${jonbmi}`);
}
else {
    "jons bmi is higger than marks"
}

var marks1 = new clc(95, 1.88);
marksbmi = marks1.BMI();
var jon1 = new clc(85, 1.76);
jonbmi = jon1.BMI();

if (marksbmi > jonbmi) {
    console.log(`marks bmi ${marksbmi} is higger than jons ${jonbmi}`);
}
else {
    "jons bmi is higger than marks"
}