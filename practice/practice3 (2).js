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
      