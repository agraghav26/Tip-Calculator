const input1 = document.querySelectorAll("input")[0];
const bill = document.getElementById("bill");
let Bill = 0;
input1.addEventListener("change", updateValue);

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
        document.getElementsByClassName("Custom")[0].placeholder = "Custom";

        
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
    document.getElementsByClassName("Custom")[0].placeholder = "0";
    tipam = 0 ;

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
let biprson = 0 ,tipper  = 0 ,totper = 0 ;
function tipamount(){
  if(NOP !=0){
 biprson  =  Bill/NOP;
  tipper = (biprson*tipam)/100;
  totper = biprson+tipper;
  tipper = parseFloat(tipper).toFixed(2);
  totper = parseFloat(totper).toFixed(2);
  document.getElementById("tipper").textContent = "$" + tipper.toString();
  document.getElementById("totalper").textContent = "$" + totper.toString();
}


}

input1.oninput = tipamount;
input1.onchange = tipamount;
input2.oninput = tipamount;
input2.onchange = tipamount;
input3.oninput = tipamount;
input3.onchange = tipamount;
document.getElementsByClassName("Custom")[0].onclick = tipamount;
for (let i = 0; i < tip.length; i++) {
  document
    .getElementsByClassName("Tip")
    [i].onclick = tipamount;
}

//  var intervalId = window.setInterval(tipamount(), 1);
function reload() {
  reload = location.reload();
}
// Event listeners for reload

document.getElementsByClassName("reset")[0].addEventListener("click", reload, false);