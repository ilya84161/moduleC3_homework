class PowerOffOn {
	constructor(firma, power){
	  	this.firma = firma;                
	    this.power = power;
	    this.status = false;
	};
	priboron = function() {
		console.log(this.firma + " On!");
		this.status = true;
	};
	priboroff = function() {
		console.log(this.firma + " Off");
		this.status = false;
	};
};

class Lampa extends PowerOffOn {
	constructor (firma, power, colorlamp) {
    	super(firma, power, status);
    	this.colorlamp = colorlamp;
  	};
};

class notebook extends PowerOffOn {
	constructor(firma, power, typeHDD) {
	  	super(firma, power, status); 
	    this.typeHDD = typeHDD;
	};
};

const homeLampa = new Lampa ("Delta", 50, "red");
const notebook5 = new notebook ("Acer", 250, "SDD");

homeLampa.priboroff();
notebook5.priboron();

console.log("состояние приборов:");
console.log(homeLampa);
console.log(notebook5);
console.log(`Сммарная мощность приборов составляет - ${homeLampa.power + notebook5.power} W`);

//Задание 5
//
//Переписать консольное приложение из предыдущего юнита на классы.
//
//Общие требования:
//
//Имена классов, свойств и методов должны быть информативными.
//Соблюдать best practices.
//Использовать синтаксис ES6.