const mkg = document.querySelector(".mkg"); //Вес товара в кг
const l = document.querySelector(".l");     //Длина в м
const ckg = document.querySelector(".ckg"); //цена товара за р/кг
const d = document.querySelector(".d");     //диаметр мм
let num1 = document.querySelector("#num1"); //Кол-во шт
let Lt = document.querySelector("#Lt");     //Длина
let Mt = document.querySelector("#Mt");     //Вес кг
let Cl = document.querySelector("#Cl");     //Цена за шт
let Cm = document.querySelector("#Cm");     //Цена за кг
let Ctn = document.querySelector("#Ctn");   //Цена за тн
let TR = document.querySelector("#TR");     //Резка шт
let Ct = document.querySelector("#Ct");     //Стоимость
let CR = document.querySelector(".CR");     //Стоимость резки
let Ci = document.querySelector("#Ci");     //Стоимость итого



  function addNumbers() {
    
    Lt.innerHTML = num1.value * l.textContent; //расчет длина
   
    Mt.innerHTML = Lt.textContent * mkg.textContent; //расчет веса
    
    Ct.innerHTML = Mt.textContent * ckg.textContent; //расчет Стоимость
    
    Cl.innerHTML = Ct.textContent / num1.value; //расчет Цена за шт
    
    Cm.innerHTML = Cl.textContent / l.textContent; //расчет Цена за кг
    
    Ctn.innerHTML = ckg.textContent * 1000;//расчет Цена за тн

    //расчет Стоимость резки
     let CRr = d.textContent * 1.2;
    CR.innerHTML = CRr * TR.value;
    //end расчет Стоимость резки

    Ci.innerHTML = Ct.textContent + CR.textContent; //расчет Стоимость итого
  }
