function convert(num){
    num= num.toString();
    let decimal = 0;
    var k = 0;
    for(var i = num.length-1;i>=0;i--){
        decimal+= num.charAt(i)*Math.pow(2, k);
        k++;
    }  
    return decimal;
}


function attach(num){
    let newElement = document.createElement("p");
    newElement.textContent = "the number is:"+ convert(num);
    
    let parentElement = document.getElementById("parentElement");
    parentElement.appendChild(newElement);
}