/* function perm(string) {

    function permu(str,l,r,result) {
        if(l===r) {
            result.push(str);
        }else{
            for(let i=l;i<=r;i++)
                str = sw(str,l,r);
                permu(str,l+1,r,result);
                str = sw(str,l,r);
        }
       }
       function sw(str,i,j) {
        const masive = str.split('');
        [masive[i], [masive[j]]] = [masive[j], [masive[i]]]
        return masive.join('');
       }
       let result = [];
       permu(string,0,string.length-1,result);
       return [...new Set(result)];

}
console.log(perm('cba'));
function deleteymbols (text, patterns) {
    const lines = text.split('\n');
    const strippedLines = lines.map(line=>{
        let minIndex = line.length;
        patterns.forEach(patter=>{
            const index =line.indexOf(patter);
            if(index !== -1 && index < minIndex) {
                minIndex = index;
            }
            
        })
        return line.substring(0,minIndex).trim();
    })
    return strippedLines.join('\n');
}
const text = 'aples, watermelon # bananas !';
const markers = ['#','!'];
console.log(deleteymbols(text,markers)); */

/* function CowboyOnTheBech(string) {
    function AbitTiredOfLife(str,l,r,result) {
        if(l===r) {
            result.push(str);
        }else {
            for(let i=l;i<=r;i++) {
                str = CowboyAgainstMadMax(str,l,r);
                AbitTiredOfLife(str,l+1,r,result);
                str = CowboyAgainstMadMax(str,l,r);
            }
        }
    }
    function CowboyAgainstMadMax(str,i,j) {
        const WhoIsGoingToWin = str.split('');
        [WhoIsGoingToWin[i], WhoIsGoingToWin[j]] = [WhoIsGoingToWin[j], WhoIsGoingToWin[i]]

        return WhoIsGoingToWin.join('');
    }
    let result = [];
    AbitTiredOfLife(string,0,string.length -1,result);
 return [...new Set(result)];
} */
/*  function peopleLikeEat(food,snack) {
    minFood = Infinity;
    for(let stuff in food) {
        if(snack[stuff]) {
            const allThingsTogether = Math.floor(snack[stuff] / food[stuff]);

            minFood = Math.min(minFood, allThingsTogether);
        }else {
            return 0;
        }
        
    }
    return minFood;
}
const food = {bif: 200, lamb: 500, pancake: 10}
const snack = {bif: 2000, lamb: 5000, pancake: 100} */

//function to calculate in column
/* function calculateInColumn(num1,num2) {
    const number1 = num1.toString().split('').reverse();
    const number2 = num2.toString().split('').reverse();

    let maxLength = Math.max(number1.length, number2.length)
    let tulemus = [];

    for(let k=0; k < maxLength; k++) {
        const digitone =  parseInt(number1[k] || '0', 10);
        const digitwo  =  parseInt(number2[k] || '0', 10);

        tulemus.push(digitone + digitwo);
    }
    return parseInt(tulemus.reverse().join(''), 10);
}
console.log(calculateInColumn(40,37)); */

////////////////////////////////////////////////////////////////////////////////////////////////////////
function whoIskiller(suspects, deadPeople){
    for(let suspect in suspects){
        if(deadPeople.every(deadPerson=>suspects[suspect].includes(deadPerson))){
            return suspect;
        }
    }
    return null;
}
const suspects =  {'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']};

const deadPeople = ['Lucas','Bill'];

const killer = whoIskiller(suspects, deadPeople);

console.log('killer is: ', killer);


function whoGetTePoint(diary1,diary2,diary3){
    const theOne = Object.values(diary1).reduce((a,b)=> a+b,0);
    const theSecondOne = Object.values(diary2).reduce((a,b)=> a+b,0);
    const theThird = Object.values(diary3).reduce((a,b)=> a+b,0);

    if(theThird>=theSecondOne && theThird>=theOne){
        return "You get the fucking point";
    }
    else if(theSecondOne>=theOne){
        return "you have lost your mind";
    }
    else{
        return "sooner or later you are gonna to win";
    }
}
console.log(whoGetTePoint({Math:10,programming:10,English:10},{Math:9,programming:7,English:10},
    {Math:4,programming:6,English:4}))


    function dataReverse(data) {
        // Split the data into chunks of 8 bits
        let chunks = [];
        for (let i = 0; i < data.length; i += 8) {
          chunks.push(data.slice(i, i + 8));
        }
      
        // Reverse the array of chunks
        chunks.reverse();
      
        // Flatten the array of reversed chunks back into a single array
        return chunks.flat();
      }
      
      // Example usage
      const data = [1,1,1,1,0,0,0,0, 1,1,1,1,0,0,0,0, 0,0,0,0,1,1,1,1, 0,0,0,0,1,1,1,1];
      const reversedData = dataReverse(data);
      console.log(reversedData);

      function extractEmails(str) {
        // Split the string by semicolons and return the resulting array
        return str.split(';');
      }
      
      // Example usage
      const emails1 = 'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com';
      const result1 = extractEmails(emails1);
      console.log(result1); 


      function calculateColumn(dig1,dig2){
        const num = dig1.toString().split('').reverse();
        const num2 = dig2.toString().split('').reverse();

        let maxLength = Math.max(num.length, num2.length);
        let massive = [];
    
        for(let h=0; h<maxLength; h++){
            const number = parseInt(num[h]||'0',10);
            const number1 = parseInt(num2[h]||'0',10);

            massive.push(number+number1);
        }
        return parseInt(massive.reverse().join(''), 10);
      }
      console.log(calculateColumn(10,15));


      function food(cake,ingridients){
        let minFood = Infinity;

        for(let piece in cake){
            if(ingridients[piece]){
                const ingridientTogether = Math.floor(ingridients[piece]/cake[piece])

                minFood = Math.min(minFood, ingridientTogether);
            }else{
                return 0;
            }
        }
        return minFood;
      }
      const cake = {flour: 100, oil: 10, chocolate: 200}
      const ingridients = {flour: 300, oil: 10, chocolate: 600};
      console.log(food(cake,ingridients));