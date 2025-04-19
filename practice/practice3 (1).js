/* const data = (`
    Main page
1. page has passed validation + 4
2. The logo in the header consist from text elements +1
3. The page has only one h1 +1
4. Favicon has been added +1
5. Block header is +5
6. Section Not only is +5
7. Section About is +5
8. Section Our friends is +5
9. Section help is +5
10.Section In addition is +5
11.Footer is +5
12. At zooming out or in case of increase of a screen content stay at the center of the screen +2
13. Background is extended in whole width of a screen +2
14. Elements interactivity + 12 (Total 60)
    Pets page
1. page has passed validation + 2
2. each card interactive +2
3. All link connections +2
4. interactivity of links and buttons +2
5. Section header +5
5. Section ourfriends +5
6 Section footer +5
7.At zooming out or in case of increase of a screen content stay at the center of the screen +2
8. Our pets highlighted and not interactive +2
9. Smoothness +2  (Total 29)`);
console.log(data); */
var hamburger = document.getElementById('hamburger');
if(hamburger){
  document.getElementById('hamburger').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar!==null && navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
});
}else {
  console.log('element with this id was not found if the DOM');
}



let i = 0; 
let c = 0; 
const str = 'Rolling Scopes School'; 
while (i < str.length) { 
    if (str[i] === 'o') { c++; } i++; 
} 
console.log(c);
const b = 1/0;
console.log(b);
let a;
console.log(a);


//code war
//target - целевое значение
//Write a function that takes an array of numbers (integers for the tests) and a target number. 
//It should find two different items in the array that, when added together, give the target value. 
//The indices of these items should then be returned in tuple / list
function twoSum(numbers, target) {
    
    const numIndex = {}
    
    for(let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
    
    if(numIndex.hasOwnProperty(complement)) {
      return [numIndex[complement], i]
      }  
      numIndex[numbers[i]] = i;
    }
    
      return null;
  }
  const numbers = [2,7,11,15];
  const target = 9;
  const result = twoSum(numbers, target);
  console.log(result);


  //reverse string
  function backword(string) {
    return string.split(' ').map(word =>{
        return word.length >=5 ? string.split('').reverse().join('') : word;
    }).join(' ')


  }
  console.log(backword('Infinity'));

//Your task is to sort a given string. Each word in the string will contain a single number. This 
//number is the position the word should have in the result.
  function order(words) {
    if (!words) return ""; 
  
    return words
    .split(' ') // Split the string into words
    .sort((a, b) => {
      const firstA = a.match(/\d+/)[0]; // Extract the number from word 'a' using a regex
      const secondB = b.match(/\d+/)[0]; // Extract the number from word 'b' using a regex

      return firstA - secondB; // Compare the numbers to sort the words
      })
      .join(' '); 
  }
  
  const someWords = "thi2s is1 one3 tes4t";
  const outcome = order(someWords);
  console.log(outcome); 
//capitalized first letter
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
     
   }
   const capitalized = capitalizeWord('grape');
   console.log(capitalized);

   //century
   function century(year) {
    return Math.ceil(year / 100);
  }
  //num to string
  function numberToString(num) {
    return num.toString();
  }
  const num = 7;
  const somenum = numberToString(num);
  console.log(somenum)

  //string to num
  const stringToNumber = function(str){
    return parseInt(str, 10);
  }
  const string ="123";
  const result1 = stringToNumber(string);
  console.log(result1);

  function turnNumberInZeroOrOne(m){


        if(!m) return "some error";
        {
            m.split(' ')
            .map(char => char < 5 ? '0' : '1').join('');
        }

            return m;

  }

const l = '12345897654322';
console.log(turnNumberInZeroOrOne(l));


const turnStrIntoNum = function (str) {
    return Number(parseInt(str, 10));
}

const str1 = '666';
console.log(turnStrIntoNum(str1));
//oppsite num
function oppsiteNum(c){
    return -c;
}

function theOpposite(existanace){
    return existanace.split(' ').map((prove)=> {
        return prove.length >= 1 ? existanace.split('').reverse().join('') : prove;
    }).join('');
} 
const word = 'kutsevälja';
console.log(theOpposite(word));

function toCatchTheOrder(order) {
    if(!order) return ""; 

    return order
                .split(' ')
                .sort((c, d) => {
                   const foundationA = c.match(/\d+/)[0];
                   const foundationB = d.match(/\d+/)[0];

                    return foundationA - foundationB;
                })
                .join(' ');
}
const situation = '4who 5is 2going 3play 1game';
const jet = toCatchTheOrder(situation);
console.log(jet);
function order(words) {
    if (!words) return ""; 
  
    return words
    .split(' ') // Split the string into words
    .sort((a, b) => {
      const firstA = a.match(/\d+/)[0]; // Extract the number from word 'a' using a regex
      const secondB = b.match(/\d+/)[0]; // Extract the number from word 'b' using a regex

      return firstA - secondB; // Compare the numbers to sort the words
      })
      .join(' '); 
  }
  
  function calculateSurfaceOfcircle(surface) {
    return 2*surface*3.14;
  }
const surface = 20;
const calculation = calculateSurfaceOfcircle(surface);
console.log(`surface of the circle equal ${calculation}`);

function remove(c) {
    if(c.length <= 2) {
        return "";
    }else {
        return c.slice(1, -1);
    }
}
console.log(remove("kill"));

function deleteSpace(shift) {
    return shift.replace(/\s+/g, '');
} 
console.log(deleteSpace("I will kill you"));
//count number of digits
function numOfNum(n){
    return n.toString().length;
}
function changeplaceswithnum(somenum) {
    return somenum.split(' ')
           .sort((di, lion)=>{
            nottoday = di.match(/\d+/)[0];
            onceandforall = lion.match(/\d+/)[0];

            return nottoday - onceandforall;
           }).join(' ')
}
const first = "5not 4today not3 tommorow2";
const blood = changeplaceswithnum(first);
console.log(blood);

function turninto(into) {
    return into.split(' ').map(it => {
        return it.length >= 2  ? into.split('').reverse().join('') : it;
    }).join('');
}
console.log(turninto('eviLog'));

function zero(one) {
    return one.split('')
           .map(one => one < '5' ? '0' : '1');
}
console.log(zero('56748930217658493'));

function countDown(di) {
    return di.toString().split('').length
}
const someThing = 123456789;
const endOfDays = countDown(someThing);
console.log(endOfDays);

function even(odd) {
    if (odd % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(even(5));

function bmi(weight,height) {
    bmi = (weight/(height**2))

    if (bmi <= 18.5) {
        return "underweight";
    }
    else if (bmi <=25.0) {
        return "normal";
    }
    else if (bmi <=30.0) {
        return "overwight";
    }else {
        return "obese";
    }
}
console.log(bmi(80.0));

function firstOneBig(secondone) {
    return secondone[0].toUpperCase() + secondone.slice(1);
}
console.log(firstOneBig('kutsekvalifikatsiooni'));

function repeatSofN(s,q) {
    return q.repeat(s) + q.replace(/\s+/g, '');
}
console.log(repeatSofN(4, 'Go to hell'));

//discount
function calculateDiscount(d) {
    var pricePerdayToRentAcAr = 40;
    var totalcostperallDays = pricePerdayToRentAcAr * d;

    if(d>=7) {
        totalcostperallDays -= 50;
    }
    else if (d>=3) {
        totalcostperallDays -= 20;
    }
    return totalcostperallDays;
}
const mydiscount = calculateDiscount(10);
console.log(`your discount is ${mydiscount}`);

function findEnds(binary, pass) {
    var savePassword = {}

    for(let i=0; i<binary.length; i++) {
        getBinary = pass - binary[i];

        if(savePassword.hasOwnProperty(getBinary)) {
            return [savePassword[getBinary], i]
        }
        savePassword[binary[i]] = i;
    }
    return null;
}
const binary = [2,7,11,15];
const pass = 9;
console.log(findEnds(binary, pass));

//ends
function wordEnds(inding, str) {
    return str.endsWith(inding);
}
console.log(wordEnds('Win', 'in'));

function fakeBin(x) {
    return x.split('').map(sytax => sytax < 5 ? '0' : '1');
}
const output = "1234567890";
const intheend = fakeBin(output);
console.log(intheend);


function nextFake(f) {
    if(typeof f!= 'string') {
        throw new Error ('input must be a string');
    }
    return f.split('')
    .map(digit=>{
        if(isNaN(digit)) {
            throw new Error ('input must contain only digits');
        }
        return digit < 5 ? '0' : '1';
    })
    .join();
    
}
const transerData = "5555555555555554";
const encodeData = nextFake(transerData);
console.log(encodeData);

function NextLevel(n) {
    let reversed = n.split('').reverse().join('');

    if(reversed<=2) {
        return "";
    }
    let sliced = reversed.split('').slice(0,-1).join('');

    let transformed = sliced.split('').map(est=>est < 5 ? '0' : '1').join('');

    return transformed;
}
console.log(NextLevel('fffffff'));
//vanish
function vanishextrasym(string) {
    function permute(str,l,r,result) {
        if(l===r) {
            result.push(str);
        } else {
            for(let i=l;i<=r;i++) {
                str = swap(str,l,i);
                permute(str,l + 1,r,result);
                str = swap(str,l,i);
            }
        }
    }
    function swap(str,i,j) {
        console.log(`${str}`);
        if(typeof str==='string') {
            var list = str.split('');
        } else {
            throw new Error('string must contain only letters')
        }
        [list[i],list[j]] = [list[j], list[i]];
        return list.join('');
    }
    let result = [];
    permute(string,0,string.length -1, result);
    return [...new Set(result)];
}
const clearDataTransfer = 'abc';
const dataVanished = vanishextrasym(clearDataTransfer);
console.log(dataVanished);

function startAgain(generation) {

    let reversed = generation.split('').reverse().join('')

    let sliced =  reversed.slice(1, -1);

    let output = sliced.split('').map(character =>{
        return character.length  > 5 ? generation.split('').reverse().join('') : character;
    })
    .join(' ')
    return output;
}
console.log(startAgain('GoLive'));

function toReadable(number) {
    const beloweTwenty = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen',
        'fiveteen','sixteen','seventeen','eightteen','nineteen'];
    const aboveTwenty = ['','','twenty,','thirty','fourty','sixty','seventy','eighty','ninety'];
    const hundred = ['hundred'];
    function convert(number) {
        if(number < 20) {return beloweTwenty[number]};
        if(number < 100) {return aboveTwenty[Math.floor(number / 10)] + (number % 10 ? ' ' + aboveTwenty[number % 10] : '')};
        if(number < 1000) {return beloweTwenty[Math.floor(number / 100)] + ' ' + hundred[0] + (number % 100 ? convert(number % 100) : '') };
    }
    return convert(number);
}
function testtoReadable(){
    const testCases = [{input: 10, expected: 'ten'}];

    testCases.forEach(test => {
    const result = toReadable(test.input);
        console.log(`toReadable ${test.input} = ${result}`);
    }); 
}
testtoReadable();

function up(p) {
    return p[0].toUpperCase() + p.slice(1);
}
console.log(up('up'));
//multinum
function findMultiplyNum(sentence) {
    return sentence.split(' ')
           .map(word=>{
            const match = word.match(/\d+/);
            return match ? {word, num: parseInt(match[0],10)} : {word, num: Infinity}
           })
           .sort((a,b) => a.num - b.num)
           .map(item => item.word)
           .join(' ')

}
console.log(findMultiplyNum('roof7 a2 like1 thin6 on4 hot5 cat35'));

function oldoption(option) {
    return option.split(' ')
                 .sort((c,v)=>{
                    const firstCv = c.match(/\d+/)[0];
                    const SecondCv = v.match(/\d+/)[0];
                    return firstCv - SecondCv;
                 })
                 .join(' ')
        
}
console.log(oldoption('third3 second2 first1'));

function multiExample(deadespace) {
    let started = deadespace.split('').reverse().join('');

    let shorted = started.split('').slice(1,-1);
        
    let massive = shorted[0].toUpperCase() + shorted.slice(1).join('');

    let nospace = massive.replace(/\s+/g, '');

    return nospace;

}
console.log(multiExample('s k r u f'));

function ingridientsThroughList(shop, gun) {

    let gunShops = [{boston: 33, toronto: 55, london: 99}];

    let availableShop = [];
    for(let j=0; j < gunShops.length; j++) {
        const shop = gunShops[j];
        const entriesShop = Object.entries(shop);
        const reverseShop = entriesShop.reverse()


        availableShop.push(reverseShop.map(([key,value])=> `${key} ${value}`).join(', '));
    }


    let list = [{ak: 47, fnp: 90, ak1: 12}];
    let availableList = [];
    for(let i=0; i < list.length;i++) {
        const IhaveOneExit = list[i]
        const entries = Object.entries(IhaveOneExit);
        const sliced = entries.slice(0, -1);

        availableList.push(sliced.map(([key,value])=>`${key} ${value}`).join(', '));
    }
    return {shop: availableShop, gun: availableList};
}
console.log(ingridientsThroughList());

//to count ingridient for a recipe
function cakes(recipe, available){
    minCake = Infinity;
    for(let ingridients in recipe) {
        if(available[ingridients]) {
            const possibleEverything = Math.floor(available[ingridients] / recipe[ingridients])

            minCake = Math.min(minCake, possibleEverything);
        }else {
            return 0; // if ingridient is not found
        }
    }
    return minCake;
}


const recipe = {flour: 500, milk: 200, eg: 1};
const available = {flour: 1200, milk: 600, eg:5};
const description = cakes(recipe,available)
console.log(`this amout of cakes you can make ${description}`);
//tryOnce
function tryOnce() {
    const recipe1 = {flour: 500, milk: 200, eg: 1};
    let second = {};
    for (let f=0;f < recipe1.length; f++) {
        const showRecipe = recipe1[f];
        const just = Object.entries(showRecipe);
        second.push(just.map(([key,value])=>`${key} ${value}`).join(''));
    
        return {second}
    }
}
console.log(tryOnce());
const recipe1 = {flour: 500, milk: 200, eg: 1};
console.log(recipe1);

function ItisgoingToBefound(item){

    let Romulus = [{text:'top6 the5 on4 I3 will2 be1'}];

    let thething = Romulus.toString().replace(/\s+/g, '');

    if(thething==='string') {
        thething.split(' ')
        .sort((q,o)=>{
         const outThere = q.match(/\d+/)[0]
         const outHere = o.match(/\d+/)[0]

         return outThere - outHere;
        })
        .join('')
    }else{
        for(let g=0; g<thething;g++ ){
            const theunivers = thething[g]
            const BigBang = Object.entries(theunivers)
            const afterLife = BigBang.reverse()
            
            Romulus.push(afterLife.map(([key,value])=>`${key} ${value}`).join(' '));
        }
    }
    return {Romulus};
}
console.log(ItisgoingToBefound());

function TestNumbers(nigative) {
    let positiveToString = Math.abs(nigative).toString();
    let reverseTheNum = positiveToString.split('').reverse().join('');
    let turnItBackInt = parseInt(reverseTheNum, 10);

    return turnItBackInt;
}
console.log(TestNumbers(-501));
function test() {
    var number =  [{input: -454, expected: 454}];
    number.forEach(check=>{
        const iterate = TestNumbers(check.input);
        console.log(`input = ${check.input}, expected: ${iterate}`);
    })
}
console.log(test());
//To binary
function toBinary(z){
    return parseInt(z.toString(2),10);
  }


function NoTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    const transformedHours = String(hours).padStart(2, '0');
    const transformedMinutes = String(minutes).padStart(2, '0');
    const transformedSeconds = String(secs).padStart(2, '0');


    return `${transformedHours}:${transformedMinutes}:${transformedSeconds}`;
}

console.log(NoTime(3600));


function checkIfNumIsInString(ifis) {
    var dig = 
        ifis.split(' ')
        .sort((p,b)=>{
            call = p.match(/\d+/)[0]
            cell = b.match(/\d+/)[0]

            return call - cell;
        })
        .join(' ')

        var theone = dig.split('').reverse().join('');

            
        return theone;
      



}
console.log(checkIfNumIsInString('it8 like7 I6 notebook5 bad4 not3 is2 MSI1'));

function binBin() {
    let paper = [{numbers: '5647483838'}];
    let roker = []; 
    for(let i=0; i < paper.length; i++) {
        const bbq = paper[i]
        const qbb = bbq.toString().split('').map(point=>point < 5 ? '0':'1').join('');
        roker.push(qbb);
    }
    return {roker};
}
const above = '5647483838'
console.log(binBin());

function perm(string) {

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
console.log(deleteymbols(text,markers));

function CowboyOnTheBech(string) {
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
}
console.log(CowboyOnTheBech('bcc'));

var NumToChar = function(array) {
    return array.map(char => String.fromCharCode(char)).join('');
}
const array = [104,101,108,108,111];
console.log(NumToChar(array));

function peopleLikeEat(food,snack) {
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
const snack = {bif: 2000, lamb: 5000, pancake: 100}
//merge
function mergeBranches (arr1,arr2) {
    let merge = []
    let a=0, q=0;
    var united = arr1.concat(arr2).sort((a,q)=> a - q);

    for(let b=0;b<united.length;b++){
        //if previous found symbol(num) is not the same
        if(united[b]!==united[b+1]){
            merge.push(united[b])
        }
    }
    return merge;
}
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
console.log(mergeBranches(arr1,arr2));

console.log(peopleLikeEat(food,snack));
/* getContainer.addEventListener('click', function(){
    
}) */
//1. TwoSum 2. reverse string 3.Find num in a word 4.Calculate sruface of a circle 5.remove the first and the last symbol 
//6. make uppercase the first letter 7.century 8.Num to string/ string to num 9.convert numbers to binary format 
//10. Make a word on the contrary 11. Delete spaces 12. even/odd 13. Calculate weight 14.Calculate discount 15.Word ends
//16. Vanish 17. ToReadable/testToReadsable 18. Multinumber 17. Test number math.abs
var ArrowNum = function (array) {
  return array.map(num=> String.fromCharCode(num)).join('')
}
const numeric = [72,101,108,108,111,32,87,111,114,108,100,33];
console.log(ArrowNum(numeric));

//Awsome one!!!!!
function putWordsInOrderOfAnumAndReadByTheFirstNum(PrinceDracula) {

    return PrinceDracula.split(' ')
                   .map((against)=>{
                    const MehmedSecond = against.match(/\d+/)
                    return MehmedSecond ? {against, num: parseInt(MehmedSecond[0][0], 10)} : {against, num: Infinity};
                   })
                   .sort((Walahia, OsmanEmpire)=> Walahia.num - OsmanEmpire.num)
                   .map((RomaniaToday)=> RomaniaToday.against)
                   .join(' ')

}
const Basilika = "friends7 became6 mightbe5 they4 after3 life25";
console.log(putWordsInOrderOfAnumAndReadByTheFirstNum(Basilika));


//function to calculate in column
function calculateInColumn(num1,num2) {
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
console.log(calculateInColumn(40,37));


function backback(back) {
    return back.split(' ')
               .map((tase)=>{
                return tase.length > 1 ? back.split('').reverse() : tase;
               })
               .join(' ')
}
console.log(backback("GoLive"));
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
questions.forEach(function(question) {
    question.usersAnswer = null;
});
//Collor association
console.log(questions);
function colourAssociation(array){
    return array.map(item=>{
        const [color, association] = item;
        return {[color]: association};
    })
    
  }
  const ar = [["Red","Diamond"]];
  console.log(colourAssociation(ar));

  //Combine and calculate arrays
function combine(...objects){
    let combined = {}

    objects.forEach((obj)=>{
        for(let key in obj) {
            if(combined.hasOwnProperty(key)){
                combined[key]+=obj[key];
            }else{
                combined[key]=obj[key];
            }
        }
    });
    return combined;
}
const obj1 = {a: 10, b: 22, c: 11};
const obj2 = {a: 10, b: 22, c: 11};
console.log(combine(obj1,obj2));
//1. TwoSum 2. reverse string 3.Find num in a word 4.Calculate sruface of a circle 5.remove the first and the last symbol 
//6. make uppercase the first letter 7.century 8.Num to string/ string to num 9.convert numbers to binary format 
//10. Make a word on the contrary 11. Delete spaces 12. even/odd 13. Calculate weight 14.Calculate discount 15.Word ends
//16. Vanish 17. ToReadable/testToReadsable 18. Multinumber 17. Test number math.abs
/* let rage = [];
let totalRage = 1;
let currRage = 0;
async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if(!response.ok) {
            throw new Error(`HTTP error ${response.status}`);

        }
        const data = await response.json();  
        totalRage = Object.keys(data).length;
        rage = Object.values(data);
        totalRage = rage.length;
        UI();


    }catch(error) {
        console.error('some error occured', error);
    }
}
fetchData();


function UI() {
    const getTheId = document.getElementById('thefirstdraw');
    getTheId.innerHTML = '';
    const currNumber = rage[currRage];


    const questionDiv = document.createElement("div");
    questionDiv.id = `quiz${currRage +1}`;
    questionDiv.textContent = currRage + 1;
    questionDiv.textContent = currNumber.question.text;

    const secondDiv = document.createElement("div");
    secondDiv.classList.add("Italy");
    secondDiv.appendChild(questionDiv);
    let correctAnswer = currNumber.correct_answer;
    let getEl = currNumber.choices.choices_types;
    console.log(getEl);

    for(let index = 0; index < Object.keys(getEl).length; index++) {
        const textInstring = Object.keys(getEl)[index];
        const text = getEl[textInstring];
        const div = document.createElement("div");
        div.classList.add("mexico");
        div.textContent = `${text}`;
        div.setAttribute("valid-data", text === correctAnswer ? '1' : '0' );
        questionDiv.appendChild(div);
        


        div.addEventListener('click', () => {
            callBack(()=>{console.log('element clicked')}, div)
        });
        
    }
    getTheId.appendChild(secondDiv);
    getTheId.addEventListener('click', function(event){
        const click = event.target;
        if(click.classList.contains('mexico')){
            questionVisibility();
            nextQuestion();
        };
    })
} 
function callBack(callback, element) {
      const getItemFromLocalStorage = element.getAttribute("valid-data");
      const text = element.textContent.trim();
      
     let results;
      try{
        results = JSON.parse(localStorage.getItem('valid-data') || []);
      }catch(e) {
        results = [];
      }

      results.push(parseInt(getItemFromLocalStorage));

     localStorage.setItem('valid-data', JSON.stringify(results)); 

     console.log(`${text} ${getItemFromLocalStorage}`);
     callback();

}
function questionVisibility() {
    for(let n=0; n <=totalRage; n++) {
    const questionDiv = document.getElementById(`quiz${n+1}`);
    if(questionDiv){
        questionDiv.style.display = 'none';
    }
    }
    const currQuestion = document.getElementById(`quiz${currRage + 1}`);
    if(currQuestion) {
        currQuestion.style.display = 'block';
    }
}
function nextQuestion(){
    if(currRage<totalRage -1) {
        currRage ++;
        questionVisibility();
        UI();
    }else{
        toCalculateResult();
    }
}

function toCalculateResult() {

    let results = JSON.parse(localStorage.getItem('valid-data') || []);

    let totalScore = results.reduce((acc,curr)=> acc + curr, 0);

    if (results.length > 0) {
        console.log(`Your result is ${totalScore}/${results.length}`);
        
        localStorage.removeItem('valid-data');
    } else {

        console.log('No results to display.');
    }
}  */
 function putWordsInOredBasedOnAnumberInTheWordIfInWordTwoNumberPutItBasedOnTheFirstNumber(PrinceDracula) {
        return PrinceDracula.split(' ')
                            .map((against)=>{
                              const MehmedSecond = against.match(/\d+/)
                              return MehmedSecond ? {against, num: parseInt(MehmedSecond[0][0],10)} : {against, num:infinity};

                            })
                            .sort((Walahia,OsmanEmpire)=> Walahia.num - OsmanEmpire.num)
                            .map((Battle)=> Battle.against)
                            .join(' ')
 }  
 const string1 = "friends5 became4 mightbe3 they3 afterLife25"      
 console.log(putWordsInOredBasedOnAnumberInTheWordIfInWordTwoNumberPutItBasedOnTheFirstNumber(string1)); 
 
 function countMap(arr1,arr2){
    const countMap = {}

    //count the frequency of each element in array
    for(const map of arr1)
    {
        countMap[map]= (countMap[map] || 0) + 1;
    }
    for(const map of arr2){
        if(countMap[map]){
            countMap[map]--;
        }
    }
    for(const map in countMap){
        if(countMap[map]>0){
            return Number(map);
        }
    }
    return 0;
 }
 console.log(countMap([1,2,2,3], [1,2,3]));

 function topThree(numbers){
    //remove duplicates
    let unique = [...new Set(numbers)];
    //sort by decreasing
    unique.sort((a,b)=>b-a);

    //put together top 3 values
    return unique[0] + unique[1] + unique[2];
 }
 console.log(topThree([1,3,4,6,9]));
 //find demecial part
 function decimal(value) {
    const OnlyAbsoluteVictory = Math.abs(value);
    const getTheVictory = OnlyAbsoluteVictory - Math.floor(OnlyAbsoluteVictory);

    return getTheVictory;
 }
 console.log(decimal(134.567));

 function whosBycicle(diary1,diary2,diary3){
    const victory1 = Object.values(diary1).reduce((a,b)=>a+b,0);
    const victory2 = Object.values(diary2).reduce((a,b)=>a+b,0);
    const victory3 = Object.values(diary3).reduce((a,b)=>a+b,0);

    if(victory3>=victory2 && victory3>=victory1){
        return "bike won third one";
    }
    else if(victory2>=victory1){
        return "bike won second one";
    }
    else{
        return "bike won first one";
    }

 }
 console.log(whosBycicle({math:5,english:5},{math:6,english:5},{math:6,english:7}));

 function evenOdChar(S){
    let evenChar = '';
    let oddChar = '';
    for(let p=0; p < S.length; p++ ) {
        if(p%2===0){
            evenChar+=S[p];
        }else{
            oddChar+=S[p];
        }
    }
    return evenChar + ' ' + oddChar;
 }
 console.log(evenOdChar("123456"));

 //Prower of two
 function two(n){
    if(n<=0){
        return false;
    }
    return (n&(n-1))===0;
 }
 const zeroOne = 1;
 console.log(two(`The number is ${zeroOne}`));
 //reverse word correct version
 function reverseWord(word){
    return word.split(' ')
               .map((sentence)=>{
                return sentence.split('').reverse().join('');
               })
            .join('')
 }
 console.log(reverseWord("GOLIVE!"))
 //1. TwoSum 2. reverse string 3.Find num in a word 4.Calculate sruface of a circle 5.remove the first and the last symbol 
//6. make uppercase the first letter 7.century 8.Num to string/ string to num 9.convert numbers to binary format 
//10. Make a word on the contrary 11. Delete spaces 12. even/odd 13. Calculate weight 14.Calculate discount 15.Word ends
//16. Vanish 17. ToReadable/testToReadsable 18. Multinumber 17. Test number math.abs

//Carousel
petList = [];
petTotal = 8;
currPet = 0;
const visiblePet = 3;
async function fetchCarousel() {
    try{
        const dataCarousel = await fetch('./carousel.json');
        if(!dataCarousel.ok) {
            throw new Error('response is not ok');
        }
        const pets = await dataCarousel.json();
        petTotal = Object.keys(pets).length;
        petList = Object.values(pets);
        petTotal = pets.length;
        console.log(petList);
        carouselInerface(petTotal);
        //slider();
        //modalWindow([4,0,2]);

    }catch(error){
        console.error('some error occured', error)
    }
}
fetchCarousel();
const modalId = ['modal-1','modal-2','modal-3','modal-4','modal-5','modal-6','modal-7','modal-8'];
function carouselInerface(petTotal){
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    const topDiv = document.createElement('div');
    topDiv.id = `pet${currPet + 1}`;
    topDiv.classList.add('custom-top-div');
    
    const start = currPet;
    const end = Math.min(currPet + visiblePet, petTotal);
    for(let h=start; h<end;h++){
            const currentPet = petList[h];
            const petDiv = document.createElement('div');
            petDiv.classList.add('dflex');
            const middlePetDiv = document.createElement('div');
            middlePetDiv.classList.add('container-card-one-section-three');
                
                var divForButton = document.createElement('div');
                divForButton.innerHTML = "Learn more";
                divForButton.classList.add('button-second-third-section');
                divForButton.id = `button-second-third-section`;
                divForButton.dataset.modalTarget=modalId[h%modalId.length];
                //divForButton.dataset.modalTarget = `modal-${i % 3 + 1}`;
                console.log(divForButton);
    
            const properties = ['name', 'img'];
            properties.forEach((pet)=>{
                const propDiv = document.createElement('div');
                if(pet==='img') {
                    const imgPet = document.createElement('img');
                    imgPet.src = currentPet[pet];
                    imgPet.alt = currentPet.name;
                    propDiv.appendChild(imgPet);
                    propDiv.appendChild(divForButton);
                }
                else if(Array.isArray(currentPet[pet])){
                    propDiv.textContent = `${pet}: ${currentPet[pet].join(', ')}`;
                }else {
                    propDiv.textContent = `${pet}: ${currentPet[pet]}`;
                }
                petDiv.appendChild(propDiv);
                middlePetDiv.appendChild(petDiv);
               
            });
            topDiv.appendChild(middlePetDiv);
       
    }
    carousel.appendChild(topDiv);
    console.log(carousel);
}

document.addEventListener('click', function(event){
    const di = event.target;
    if(di.classList.contains('button-second-third-section')){
        const dataModal = di.dataset.modalTarget;
        const modal = document.getElementById(dataModal);
        if(!modal){
            console.log('modal not found');
            return;
        }
        document.querySelectorAll('.modal').forEach((eachModal)=>{
            eachModal.style.display = 'none';
        });
        let petIndex;
        switch(dataModal){
            case 'modal-1':
            petIndex = 0;
            break;
            case 'modal-2':
            petIndex = 1;
            break;
            case 'modal-3':
            petIndex = 2;
            break;
            case 'modal-4':
            petIndex = 3;
            break;
            case 'modal-5':
            petIndex = 4;
            break;
             case 'modal-6':
            petIndex = 5;
            break;
            case 'modal-7':
            petIndex = 6;
            break;
            case 'modal-8':
            petIndex = 7;
            break;
        }
        const getThePet = petList[petIndex];
        const getPhoto = getThePet.img;
        const divForPhoto = document.createElement('div');
        const photo = document.createElement('img');
        photo.src = getPhoto;
        const doubleDiv = document.createElement('div');
        doubleDiv.appendChild(divForPhoto);
        divForPhoto.appendChild(photo);
        doubleDiv.appendChild(divForPhoto);
        

        modal.innerHTML = '';
        modal.appendChild(doubleDiv);
        modal.innerHTML += `<div class="blockForContentOfModal"><h1>${getThePet.name}</h1>
        <p>${getThePet.description}</p><div><ul><li>Age: ${getThePet.age}</li></ul></div</div>
        `;

        modal.style.display = 'flex';
    }
    if(di.classList.contains('modal')){
        di.style.display = 'none';
    }
    //mightBeCarousel();
})  

function nextPets(){
    if(currPet + visiblePet < petTotal) {
        currPet++;
    }else{
        currPet = 0;
    }
    carouselInerface(petTotal);
}
function previousPet(){
    if(currPet>0){
        currPet--;
    }else{
        currPet = petTotal - visiblePet;
    }
    carouselInerface(petTotal);
}
document.getElementById('right-arrow').addEventListener('click',nextPets);
document.getElementById('left-arrow').addEventListener('click',previousPet);

function modalBackground(event) {
    var contentWrper = document.querySelector('.ourfriends');
    if(contentWrper){
        contentWrper.classList.add('blur');
        console.log('element clicked!');
    }
}
document.addEventListener('click', modalBackground);

/* function visibilityOfpets(){
    if(window.innerWidth<1280) {
        visiblePet = 2;
    }
    carouselInerface(petTotal);
}
window.addEventListener('resize', visibilityOfpets);

visibilityOfpets();
 */

function decoder(de){
    return de.match(/.{10}/)
             .map((space)=>{
                if(space==='**********'){
                    return ' ';
                }
                else{
                    const co = de.match(/.{2}/)
                    .map((ship)=>{
                        if(ship==='10') return '.';
                        if(ship==='11') return '-';
                        return '';
                        })
                    .join('')
                    return MORSE_DECODER[co] || '';
                }
             })
             .join('')
}
//data processing cryptography
function process(C){
    let evenChar = '';
    let oddChar = '';

    for(let i=0;i<C.length;i++){
        if(i%2===0){
            evenChar+=C[i];
        }else{
            oddChar+=C[i];
        }
    }
    return `${evenChar[i]}${oddChar[i]}`;
}
console.log(process("123567"));

//power of tw0

function power(n){
    if(n<=0) return false;

    return (n&(n-1))===0;
}
console.log(power(2));
//decrypt
function de(str){
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let result = '';

    for(let char of str){
        if(vowels.has(str)){
            result+='1';
        }else{
            result+='0';
        }
        result+=char;
    }
    return result;
}
console.log(de('hello'));






function whoIskiller(suspects, deadPeople){
    for(let suspect in suspects){
        if(deadPeople.every(deaPerson=>suspects[suspect].include(deadPerson))){
            return suspects;
        }
    }
    return null;
}
let suspects =  {'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']};

let deadPeople = ['Lucas','Bill'];

const killer = whoIskiller(suspects, deadPeople);

console.log('killer is: ', killer);



 