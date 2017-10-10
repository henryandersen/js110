//write first method
function sleep_in(weekday,vacay) {
    if(weekday==false || vacay==true){
        return true;
    }else{
        return false;
    }
}

//write second method
function monkey_trouble(aSmile, bSmile) {
    if(aSmile == bSmile){
        return true;
    }else{
        return false;
    }
}

//stringy boy
function string_times(string,n){
    sum = "";
    for(var i=0; i < n; i++){
        sum += string
    }
    return sum;
}

//return first three n times
function front_times(string,n){
    if (string.length < 3){
        var sum = ""
        for(var i=0; i < n; i++){
            sum += string;
        }
        return sum;
    }else{
        var front = string[0] + string[1] + string[2];
        var sum = "";
        for(var i=0; i <n; i++){
            sum += front;
        }
        return sum;
    }
}

//returns every other char starting with first
function string_bits(string){
    var bits = "";
    for (var i=0; i < string.length; i+=2){
        bits += string[i]
    }
    return bits;
}

// very good speeding function
function caughtSpeeding(speed, bday){
    var result =0;
    if(bday==false){
        if(speed <= 60){
            result = 0;
        }else if( speed > 61 && speed <= 80){
            result = 1;
        }else{
            result = 2;
        }
    }else if(bday == true){
        if(speed <= 65){
            result = 0;
        }else if( speed > 66 && speed <= 85){
            result = 1;
        }else{
            result = 2;
        }
    }
    return result;
}


//function analyzes input numbers
function fizz_buzz(n){
    if(n%5 == 0 && n % 3 == 0){
        return "FizzBuzz";
    }else if(n % 3 == 0) {
        return "Fizz";
    }else if(n % 5 == 0){
        return "Buzz";
    }else{
        return n + "!";
    }
}

//code is very good
function teaParty(tea,candy){
    if(tea < 5 || candy < 5){
        return 0;
    }else if(tea >= 2*candy || candy >= 2*tea){
        return 2;
    }else{
        return 1;
    }
}

//does the blackjack
function blackjack(x,y){

    var diffX = 21-x;
    var diffY = 21-y;

    if(diffX<0 && diffY<0){
        return 0;
    }else if(diffX < 0){
        return y;
    }else if(diffY < 0){
        return x;
    }else if(diffY>diffX){
        return x;
    }else if(diffX>diffY){
        return y;
    }
}


function loneSum(a,b,c){
    var sum = a+b+c;
    if( a==b && a==c){
        sum = 0;
    }else if(a==b){
        sum = c;
    }else if(a==c){
        sum = b;
    }else if(b==c){
        sum = a;
    }
    return sum;
}









function tester(){

    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output1").innerHTML = monkey_trouble(true, false);
    document.getElementById("output2").innerHTML = sleep_in(true, false);
    document.getElementById("output3").innerHTML = string_times(string,n);
    document.getElementById("output4").innerHTML = front_times(string,n);
    document.getElementById("output5").innerHTML = string_bits(string);


}
