// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

function sortStudents(arr){
    return arr.sort().reverse();
}

// console.log(sortStudents(["Nam", "Hoa", "Tuấn"]))

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
function randomElement(arr){
    let index = Math.floor(Math.random()*arr.length);
    return index;
}
function shuffle(arr){
    let index1 = randomElement(arr);
    let index2 = randomElement(arr);
    [arr[index1], arr[index2]] = [arr[index2],arr[index1]];
    return arr;
}

// console.log(shuffle([1,2,3,4,5]))


// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function symmetricDifference(arr1, arr2){
    let array=[]
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])==false){
            array.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i])==false){
            array.push(arr2[i]);
        }
    }
    return array.sort();
}

// console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))
// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function union(arr1, arr2){
    let arr=[]
    let length = Math.max(arr1.length,arr2.length);
    for (let i = 0; i < length; i++) {
        if(arr1[i] != arr2[i]){
            arr.push(arr1[i],arr2[i]);
        }
        
    }
    return Array.from(new Set(arr)).sort();
}

console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))

console.log(union([1, 2, 3, 1], [4, 3, 2, 4]))

