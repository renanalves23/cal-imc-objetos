    //Cálculo do IMC usando objetos
var John = {
  firstName: 'John',
  lastname: 'Smith',
  weight: 105,
  height: 1.90,
  calcImc: function() {
    return this.weight / (this.height * this.height);
  }
};
John.imc = John.calcImc();
console.log('O IMC de ' + John.firstName + ' é: ' + John.imc);

var Mike = {
  firstName: 'Mike',
  lastname: 'Jenkins',
  weight: 90,
  height: 1.80,
  calcImc: function() {
    return this.weight / (this.height * this.height);
  }
};
  //criando dentro do objeto o "imc", baseado no retorno da função
Mike.imc = Mike.calcImc();
console.log('O IMC de ' + Mike.firstName + ' é: ' + Mike.imc);

// console.log(Mike.calcImc(Mike.weight));
// console.log(John.calcImc(John.weight));


if (Mike.imc > John.imc) {
  console.log('O maior IMC é de ' + Mike.firstName + Mike.lastname + ' e é de ' + Mike.imc);
}else if (Mike.imc < John.imc) {
  console.log('O maior IMC é de ' + John.firstName + John.lastname + ' e é de ' + John.imc);
}else {
  console.log('É um empate');
}



