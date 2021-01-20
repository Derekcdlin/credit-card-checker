// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const batch2 = [valid1, valid2, valid3, invalid1, invalid3, mystery3];


// Add your functions below:
const convertStringToCred = (string) =>{
    let arr = [];

    for(let i = 0; i < string.length; i++){
        arr.push(parseInt(string[i],10));
    }

    return arr;
}

const validateCred = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(i%2 == 0){
            sum += arr[arr.length-i-1];
        }
        else{
            let double = arr[arr.length-i-1] * 2;
            sum += double;
            if(double > 9){
                sum -= 9;
            }
        }
    }
    if(sum%10 == 0){
        return true;
    }
    return false;
}

const findInvalidCards = (arr) =>{
    const ret_arr = [];

    for(let i = 0; i < arr.length; i++){
        if(!validateCred(arr[i])){
            ret_arr.push(arr[i]);
        }
    }

    return ret_arr;
}

const idInvalidCardCompanies = (arr) =>{
    const ret_arr = [];

    for(let i = 0; i < arr.length; i++){
        let company = '';
        //console.log(arr[i][0]);
        switch (arr[i][0]){
            case 3:
                company = 'Amex (American Express)';
                break;
            case 4:
                company = 'Visa';
                break;
            case 5:
                company = 'Mastercard';
                break;
            case 6:
                company = 'Discover';
                break;
        }
        //console.log(company);
        if(!ret_arr.includes(company)){
            ret_arr.push(company);
        }
    }

    return ret_arr;
}

const invalidToValid = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(i%2 == 0){
            sum += arr[arr.length-i-1];
        }
        else{
            let double = arr[arr.length-i-1] * 2;
            sum += double;
            if(double > 9){
                sum -= 9;
            }
        }
    }
    const mod = sum%10;
    arr[arr.length-1] -= mod;    
    if(arr[arr.length-1]< 0){
        arr[arr.length-1] += 10;
    }
    return arr;
}

//testing

batch.forEach(arr => console.log(validateCred(arr)));

//console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(findInvalidCards(batch2)));

const arr1 = convertStringToCred("4532352406111017");
const arr2 = convertStringToCred("5195282680003017");
const arr3 = convertStringToCred("6011197590729206");
const arr4 = convertStringToCred("3540660123128771");
const batch3 = [arr1, arr2, arr3, arr4];

batch3.forEach(arr => console.log(validateCred(batch3)));

console.log(idInvalidCardCompanies(batch3));

batch.forEach(arr => console.log(validateCred(invalidToValid(arr))));
