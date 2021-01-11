class Animal {
    constructor(name){
        this.name=name;
    }
    action(){
        document.getElementById(this.actionSoundName).play();
    }
    image(){
        document.getElementById(this.resim).style.visibility='visible';
    }
    putInTheDocument(){
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");

        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);
        petNameTD.onclick = this.image.bind(this);
        petNameTD.addEventListener("mouseover", function(e){ 
          petNameTD.bgColor="green",petNameTD.style.color ="white";});
        petNameTD.addEventListener("mouseout", function(e){ 
          petNameTD.bgColor="transparent",petNameTD.style.color ="black";});
       

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);
        petLegsTD.onclick = this.image.bind(this);
        petLegsTD.addEventListener("mouseover", function(e){ 
          petLegsTD.bgColor="green", petLegsTD.style.color ="white"; });
        petLegsTD.addEventListener("mouseout", function(e){ 
          petLegsTD.bgColor="transparent", petLegsTD.style.color ="black"; });

        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);

        petActionTDButton.onclick = this.action.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR)
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
        //Animal.call(this, name);
        this.legs = 4;
        this.actionText = "Meoow"
        this.actionSoundName = "meow"
        this.resim="kedi resmi"
    }
}
class Monkey extends Animal{
    constructor(name){
        super(name);
        //Animal.call(this, name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
        this.resim="maymun resmi"
    }
}
var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();