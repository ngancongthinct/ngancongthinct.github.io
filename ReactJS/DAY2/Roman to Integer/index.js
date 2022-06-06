function romanToInt(romanNum){
    let arr = []
    
    for(let i =0; i< romanNum.length; i++){
        if(romanNum[i].toUpperCase() == 'I'){
            arr.push(1)
        } else if(romanNum[i].toUpperCase() == 'V'){
            arr.push(5)
        } else if(romanNum[i].toUpperCase() == 'X'){
            arr.push(10)
        } else if(romanNum[i].toUpperCase() == 'L'){
            arr.push(50)
        } else if(romanNum[i].toUpperCase() == 'C'){
            arr.push(100)
        } else if(romanNum[i].toUpperCase() == 'D'){
            arr.push(500)
        } else if(romanNum[i].toUpperCase() == 'M'){
            arr.push(1000)
        }
    }
    let result = arr[arr.length-1];
    for(let j = arr.length -2; j<=0; j--){
        if(arr[j] > arr[j+1]){
            result = result + arr[j]
        } else{
            result = result - arr[j]
        }
    }
    return result;


}

console.log(romanToInt('XXIXX'))