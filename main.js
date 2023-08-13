function output(value){
    document.getElementById("output").value += value;
}
function reset() {
    document.getElementById("output").value = ""; 
}
function calculate(){
    var z = document.getElementById("output").value;
    var c = eval(z);
    console.log (c);
    document.getElementById("output").value = c;

//     console.log(z);
//     var x = z.split(/[+/*-]/g);
//     console.log(x);
//     var y = z.match(/[+/*-]/g);
//     console.log(y);
//     let number1 = parseFloat(x[0]);
//     let number2;

//     for (let i=0;i<=x.length;i++){

//     if (y!==null)
//     {
//         number2 = parseFloat(x[i+1]);

//         switch (y[i]) {
//             case '+': number1 += number2;
//             break;
//             case '-': number1 -= number2;
//             break;
//             case '*': number1 *= number2;
//             break;
//             case '/': number1 /= number2;
//             break;
//         }
//     }
//     else
//     {

//         document.getElementById("output").value = number1;
//     }
            
//  }
//  console.log(number1);
//  document.getElementById("output").value = number1;

}






