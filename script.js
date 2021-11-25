function checkNumber() {
    const number = prompt("введіть чотиризначне число")
    let numberArrayStr = number.split("");
    let numberArrayNum = numberArrayStr.map(Number);
    if (number > 999 && number < 10000 ){
        if (number % 2 == 0 ){
            function arrayProd(array){
                let prod = 1;
                for(let i = 0; i < array.length; i++){
                    prod = prod*array[i];
                    }
                console.log(`число ${number} парне, добуток цифр рівний ${prod}`);
                alert(`число ${number} парне, добуток цифр рівний ${prod}`);
                }
                arrayProd(numberArrayNum);
         }else{
            function arraySum(array){
                let sum = 0;
                for(let i = 0; i < array.length; i++){
                    sum = sum+array[i];
                    }
                console.log(`число ${number} непарне, сума цифр рівна ${sum}`);
                alert(`число ${number} непарне, сума цифр рівна ${sum}`);
                }
                arraySum(numberArrayNum);
        }
    }else{
    alert("введіть ЧОТИРИЗНАЧНЕ число, будь-ласка")
    console.log(number);
    }
}
function checkNumber2() {
    const number = Number(prompt("введіть число"));
    console.log(number);
    var alertRowConcat = "";
    if (isNaN(number)){
    alert("введіть число, а не текст!!!");
    }else{
        let i = 2;
            do {
                let remDivision = number % i;
                if (remDivision == 0) {
                    var alertRow = (`число ${number} ділиться без залишку на число ${i}`);
                    alertRowConcat = alertRowConcat + alertRow + '\n';
                    console.log(alertRow);
                    }
                i++;
            } while (i < 11);
            alert(alertRowConcat)
    // console.log(number);
    }
}
function bookSelector() {
    const xMagic = confirm("Про чари має бути?");
    const xFunny = confirm("Треба, щоб було смішно?");
    const xDetectiv = confirm("Детективна історія потрібна?");
    const xAfraid = confirm("Боятись будете?");
        const arrayAnswer = [xMagic, xFunny, xDetectiv, xAfraid];
        console.log(arrayAnswer);
        if (arrayAnswer[0]==false&&arrayAnswer[1]==false&&arrayAnswer[2]==false&&arrayAnswer[3]==false) {
            alert("Лев Толстой Война и мир");
        } else if (arrayAnswer[0]==true&&arrayAnswer[1]==false&&arrayAnswer[2]==false&&arrayAnswer[3]==false) {
            alert("Джоан Роулинг Гарри Поттер");
        } else if (arrayAnswer[0]==true&&arrayAnswer[1]==true&&arrayAnswer[2]==false&&arrayAnswer[3]==false) {
            alert("Братья Стругацкие Понедельник начинается в субботу");
        } else if (arrayAnswer[0]==true&&arrayAnswer[1]==true&&arrayAnswer[2]==true&&arrayAnswer[3]==false) {
            alert("Агата Кристи Вечеринка в Хелоуин");
        } else if (arrayAnswer[0]==true&&arrayAnswer[1]==true&&arrayAnswer[2]==true&&arrayAnswer[3]==true) {
            alert("Джонатан Страуд Кричащая лестница");
        } else if (arrayAnswer[0]==true&&arrayAnswer[1]==false&&arrayAnswer[2]==true&&arrayAnswer[3]==false) {
            alert("Диана Маш Заноза для драконьего военачальника");
        } else if (arrayAnswer[0]==false&&arrayAnswer[1]==true&&arrayAnswer[2]==false&&arrayAnswer[3]==true) {
            alert("Кирилл Курганский Смешно или страшно");  
        } else if (arrayAnswer[0]==false&&arrayAnswer[1]==false&&arrayAnswer[2]==false&&arrayAnswer[3]==true) {
            alert("Стивен Канг Мизери"); 
        } else if (arrayAnswer[0]==false&&arrayAnswer[1]==false&&arrayAnswer[2]==true&&arrayAnswer[3]==true) {
            alert("Едгпр По Очень страшние истории"); 
        } else if (arrayAnswer[0]==false&&arrayAnswer[1]==false&&arrayAnswer[2]==true&&arrayAnswer[3]==false) {
            alert("Маринина Бузупречнаня репутация"); 
        } 
}
        
        
        
        /*else if (orderAmount > 1000) {
            discount = orderAmount - orderAmount * 0.1-200;
        }
        alert(`до сплати ${discount} `);

switch (arrayAnswer) {
        case arrayAnswer:
          alert("Лев Толстой Война и мир")
          break;
          case [true, false, false, false] :
            alert("Лев Толстой Война и мир")
            break;
}
 /*            case value2:
          //Инструкции, соответствующие value2
          [break;]
        ...
        case valueN:
          //Инструкции, соответствующие значению valueN
          //statementsN
          [break;]
        default:
          //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
          //statements_def
          [break;]
      }
     
}

function bookSelector1() {
    const xMagic = confirm("Про чари має бути?");
    const xFunny = confirm("Треба, щоб було смішно?");
    const xDetectiv = confirm("Детективна історія потрібна?");
    const xAfraid = confirm("Боятись будете?");
        const arrayAnswer = [xMagic, xFunny, xDetectiv, xAfraid];
        console.log(arrayAnswer);
        switch (arrayAnswer){
        case [true, false, false, false]:
             alert("Лев Толстой Война и мир");
             break;
       case (arrayAnswer[0]==true&&arrayAnswer[1]==false&&arrayAnswer[2]==false&&arrayAnswer[3]==false) :
            alert("Джоан Роулинг Гарри Поттер");
            break;
       case (arrayAnswer[0]==true&&arrayAnswer[1]==true&&arrayAnswer[2]==false&&arrayAnswer[3]==false) :
            alert("Братья Стругацкие Понедельник начинается в субботу");
            break;
       case (arrayAnswer[0]==true&&arrayAnswer[1]==true&&arrayAnswer[2]==true&&arrayAnswer[3]==false) :
            alert("Агата Кристи Вечеринка в Хелоуин");
            break;
       case (arrayAnswer[0]==true&&arrayAnswer[1]==true&&arrayAnswer[2]==true&&arrayAnswer[3]==true) :
            alert("Джонатан Страуд Кричащая лестница");
            break;
       case(arrayAnswer[0]==true&&arrayAnswer[1]==false&&arrayAnswer[2]==true&&arrayAnswer[3]==false) :
            alert("Диана Маш Заноза для драконьего военачальника");
            break;
        case (arrayAnswer[0]==false&&arrayAnswer[1]==true&&arrayAnswer[2]==false&&arrayAnswer[3]==true) :
            alert("Кирилл Курганский Смешно или страшно");  
            break;
       case (arrayAnswer[0]==false&&arrayAnswer[1]==false&&arrayAnswer[2]==false&&arrayAnswer[3]==true) :
            alert("Стивен Канг Мизери"); 
            break;
        case (arrayAnswer[0]==false&&arrayAnswer[1]==false&&arrayAnswer[2]==true&&arrayAnswer[3]==true) :
            alert("Едгпр По Очень страшние истории"); 
            break;
        case (arrayAnswer[0]==false&&arrayAnswer[1]==false&&arrayAnswer[2]==true&&arrayAnswer[3]==false) :
            alert("Маринина Бузупречнаня репутация"); 
            break;
        } 
    }
        
        
        /*else if (orderAmount > 1000) {
            discount = orderAmount - orderAmount * 0.1-200;
        }
        alert(`до сплати ${discount} `);

switch (arrayAnswer) {
        case arrayAnswer:
          alert("Лев Толстой Война и мир")
          break;
          case [true, false, false, false] :
            alert("Лев Толстой Война и мир")
            break;
}
 /*            case value2:
          //Инструкции, соответствующие value2
          [break;]
        ...
        case valueN:
          //Инструкции, соответствующие значению valueN
          //statementsN
          [break;]
        default:
          //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
          //statements_def
          [break;]
      }
     */
