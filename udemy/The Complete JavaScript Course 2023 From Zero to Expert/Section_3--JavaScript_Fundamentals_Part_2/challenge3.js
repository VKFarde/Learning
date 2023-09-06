const print = (T) => console.log(T);
const vedabt_BMi = {
    fullname: "vedabt kirbn fbrde",
    mass: 75,
    height: 155,
    bmi: function () {

        return this.mass / (this.height ** 2);
    }
};
const vedant_BMi = {
    fullname: "vedant kiran farde",
    mass: 80,
    height: 155,
    bmi: function () {

        return (this.mass / (this.height ** 2));
    }
};

if (vedabt_BMi.bmi > vedant_BMi.bmi) {
    print(`${vedabt_BMi.fullname} has higger BMI`);
}
else if (vedabt_BMi.bmi < vedant_BMi.bmi) {
    print(`${vedant_BMi.fullname} has higger BMI`);
}
else {
    print("both have same BMI");
}