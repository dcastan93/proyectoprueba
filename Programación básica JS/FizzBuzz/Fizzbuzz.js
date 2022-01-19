var numeros = 100;
var isDivisible = false;
for (var i = 1; i<= 100; i ++){
    isDivisible = false;
    if(i % 3 == 0){
        isDivisible = true;
        document.write("Fizz");
    }
    if(i % 5 == 0){
        isDivisible = true;
        document.write("Buzz");
    }
    if (!isDivisible) {
        document.write(i);

    }
    document.write("<br>");
}

for (var i = 1; i<= 100; i ++){
   
    if(i % 3 == 0){
        
        document.write("Fizz");
    }
    if(i % 5 == 0){
        
        document.write("Buzz");
    }
    if (i % 3 != 0 && i % 5 != 0) {
        document.write(i);

    }
    document.write("<br>");
}