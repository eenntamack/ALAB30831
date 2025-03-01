//Part 1 FizzBuzz
console.log("FizzBUzz loop made below");
for(let i = 0; i < 100; i++){
    if((i % 3 == 0 )&& (i % 5 == 0)){
        console.log("Fizz Buzz");
    }else if((i % 3 == 0) && (i % 5 !== 0)){
        console.log("Fizz");
    }else if((i % 5 == 0) && (i % 3 !== 0)){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}


//Part 2 Prime Time
console.log("The Prime Loop used below");
for (let i = 2; i < 100;i++){
    if(i == 2){
        console.log(i);
    }else{
        for(let j = 2; j < i; j++){
            if(i%j == 0){
                break;
            }else if(j == i - 1){
                console.log(i);
                break;
            }else{
                continue;
            }
        }
    }
}

//Part 3.1 Felling Loopy

let csvFile = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
let row1 = "";
let row2 = "";
let row3 = "";
let row4 = "";
let row5 = "";
let RowCount = 1;
for(let i = 0; i < csvFile.length; i ++){
    if(csvFile[i]=="\n"){
        RowCount+= 1;
    }
    if(RowCount == 1){
        if(csvFile[i] == ","){
            row1 += " "; 
        }else{
            row1 += csvFile[i];
        }
    }else if(RowCount == 2){
        if(csvFile[i] == ","){
            row2 += " "; 
        }else{
            row2 += csvFile[i];
        }

    }else if(RowCount == 3){
        if(csvFile[i] == ","){
            row3 += " "; 
        }else{
            row3 += csvFile[i];
        }

    }else if(RowCount == 4){
        if(csvFile[i] == ","){
            row4 += " "; 
        }else{
            row4 += csvFile[i];
        }
    }
    else if(RowCount == 5){
        if(csvFile[i] == ","){
            row5 += " "; 
        }else{
            row5 += csvFile[i];
        }
    }
}
console.log("(The table made below)");
console.log(row1,row2,row3,row4,row5);

//Part 3.2 challenge
let scientificData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let srow1 = "";
let srow2 = "";
let srow3 = "";
let srow4 = "";
let srow5 = "";
let srow6 = "";
let srow7 = "";
let srow8 = "";
let srow9 = "";
let srow10 = "";
let srow11 = "";
RowCount = 1;

for(let i = 0; i < scientificData.length; i ++){
    if(scientificData[i]=="\n"){
        RowCount+= 1;
    }
    if(RowCount == 1){
        if(scientificData[i] == ","){
            srow1 += " "; 
        }else{
            srow1 += scientificData[i];
        }
    }else if(scientificData == 2){
        if(scientificData[i] == ","){
            srow2 += " "; 
        }else{
            srow2 += scientificData[i];
        }

    }else if(RowCount == 3){
        if(scientificData[i] == ","){
            srow3 += " "; 
        }else{
            srow3 += scientificData[i];
        }

    }else if(RowCount == 4){
        if(scientificData[i] == ","){
            srow4 += " "; 
        }else{
            srow4 += scientificData[i];
        }
    }
    else if(RowCount == 5){
        if(scientificData[i] == ","){
            srow5 += " "; 
        }else{
            srow5 += scientificData[i];
        }
    }
    else if(RowCount == 6){
        if(scientificData[i] == ","){
            srow6 += " "; 
        }else{
            srow6 += scientificData[i];
        }
    }
    else if(RowCount == 7){
        if(scientificData[i] == ","){
            srow7 += " "; 
        }else{
            srow7 += scientificData[i];
        }
    }
    else if(RowCount == 8){
        if(scientificData[i] == ","){
            srow8 += " "; 
        }else{
            srow8 += scientificData[i];
        }
    }
    else if(RowCount == 9){
        if(scientificData[i] == ","){
            srow9 += " "; 
        }else{
            srow9 += scientificData[i];
        }
    }
    else if(RowCount == 10){
        if(scientificData[i] == ","){
            srow10 += " "; 
        }else{
            srow10 += scientificData[i];
        }
    }else if(RowCount == 11){
        if(scientificData[i] == ","){
            srow11 += " "; 
        }else{
            srow11 += scientificData[i];
        }
    }
}
console.log("(The scientific table made below)");
console.log(srow1,srow2,srow3,srow4,srow5,srow6,srow7,srow8,srow9,srow10,srow11);