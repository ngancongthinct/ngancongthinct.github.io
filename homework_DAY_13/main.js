// Bài 1: Tìm số lớn nhất trong mảng
function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max){
            max=arr[i];
        }   
    }
    return max;
}

// console.log(findMax([1,5,2,10,12]))

// Bài 2: Tìm số nhỏ nhất trong mảng
function findMin(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min){
            min=arr[i];
        }   
    }
    return min;
}

// console.log(findMin([1,5,-2,10,12]))

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

function printNewArray(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]%2;
        
    }
    return newArr;
}

// console.log(printNewArray([2,4,7,2,15,55]))

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function repeatString(str){
    let arr=[]
    for (let i = 0; i < 10; i++) {
        arr[i] = str;
    }
    return arr.join("");

}

// console.log(repeatString("a"))

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

function repeatString2(str){
    let arr=[];
    arr[0] = str;
    for (let i = 1; i < 10; i++) {
        arr[i] = "-"+str;
    }
    return arr.join("");

}

console.log(repeatString2("a"))



