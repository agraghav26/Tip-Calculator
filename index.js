const input = document.querySelectorAll("input")[0];
const bill = document.getElementById("bill");
let Bill = 0;
input.addEventListener("change", updateValue);

function updateValue(e) {
  bill.textContent = e.target.value;
  Bill = Number(bill.textContent);
}
const input2 = document.querySelectorAll("input")[2];
const nop = document.getElementById("nop");
let NOP = 0;
input2.addEventListener("change", updateValue1);

function updateValue1(e2) {
  nop.textContent = e2.target.value;
  NOP = Number(nop.textContent);
  if (NOP == 0) {
    document.querySelector("span").innerText = "Can't be zero";
    document.querySelectorAll("input")[2].classList.add("red");
  } else {
    document.querySelector("span").innerText = "";
    document.querySelectorAll("input")[2].classList.remove("red");
  }
}
input2.addEventListener("input",updateValue1);

let tip = document.getElementsByClassName("Tip");

for (let i = 0; i < tip.length; i++) {
  document
    .getElementsByClassName("Tip")
    [i].addEventListener("mouseenter", function () {
      document.getElementsByClassName("Tip")[i].classList.add("TipC");
    });
}
for (let i = 0; i < tip.length; i++) {
  document
    .getElementsByClassName("Tip")
    [i].addEventListener("mouseleave", function () {
      document.getElementsByClassName("Tip")[i].classList.remove("TipC");
    });
}
let tipvalue= "",tipv = "",
  by,
  tipam = 0;
const click = [];
for (let i = 0; i < tip.length; i++) {
  document
    .getElementsByClassName("Tip")
    [i].addEventListener("click", function () {
      if (click.length > 0 && click[0] != 6) {
        by = click[0];
        document.getElementsByClassName("Tip")[by].classList.remove("Selected");
        while(click.length > 0)
        click.pop();
      } else if (click.length > 0 && click[0] == 6) {
        while(click.length > 0)
        click.pop();
        document.getElementsByClassName("Custom")[0].classList.remove("edit");
        document.getElementsByClassName("Custom")[0].value = "Custom";

        
      }

      document.getElementsByClassName("Tip")[i].classList.add("Selected");
      click.push(i);
      tipvalue = document.getElementsByClassName("Selected")[0].innerText;
      tipv = "";
      for(let j = 0 ; j < tipvalue.length-1 ; j++){
         tipv += (tipvalue[j]);
      }
      tipam = Number(tipv);
    });
}

const input3 = document.querySelectorAll("input")[1];
document
  .getElementsByClassName("Custom")[0]
  .addEventListener("click", function () {
    if (click.length > 0 && click[0] != 6) {
      by = click[0];
      document.getElementsByClassName("Tip")[by].classList.remove("Selected");
      while(click.length > 0)
        click.pop();
    }
    document.getElementsByClassName("Custom")[0].classList.add("edit");
    document.getElementsByClassName("Custom")[0].value = "0";

    // const bill = document.getElementById("bill");
    // let Bill = 0;
    input3.addEventListener("change", updateValue3);
    
    function updateValue3(e4) {
      tipvalue = e4.target.value;
      tipam = Number(tipvalue);
    }
    // tipvalue = document.getElementsByClassName("Custom")[0].textContent ;
    // tipam = Number(tipvalue);
  
    click.push(6);
  });

function tipamount(){

  
}