    //Cálculo do IMC usando objetos
var John = {
  firstName: 'John',
  lastname: 'Smith',
  weight: 105,
  height: 1.90,
  calcImc: function() {
   this.imc = this.weight / (this.height * this.height);
    return this.imc;
  }
};

var Mike = {
  firstName: 'Mike',
  lastname: 'Jenkins',
  weight: 90,
  height: 1.80,
  calcImc: function() {
    this.imc = this.weight / (this.height * this.height);
     return this.imc;
   }
};

John.calcImc();
Mike.calcImc();
//mostrar IMC incluido no objeto
console.log(John, Mike);



//Mostra quem tem o maior IMC
if (Mike.imc > John.imc) {
  console.log('O maior IMC é de ' + Mike.firstName + " " + Mike.lastname + ' e é de ' + Mike.imc);
}else if (Mike.imc < John.imc) {
  console.log('O maior IMC é de ' + John.firstName +" " + John.lastname + ' e é de ' + John.imc);
}else {
  console.log('É um empate');
}



