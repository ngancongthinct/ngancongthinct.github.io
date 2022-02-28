
// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

const max2Numbers = (arr) => {
    // Khỏi tạo mnagr rỗng
    let array = [];

    //Lấy ra mảng các phần tử không trùng nhau
    for(let i=0; i< arr.length; i++){
        //Kiểm tra từng phần tử trong mảng
        //Nếu phần tử đó nằm trong result -> bỏ qua
        //Nếu phần tử đó không nằm trong result -> push vào
        if(array.includes(arr[i]) == false){
            array.push(arr[i])
        }
    }
    //Sắp xếp mảng theo chiều giảm dần
    //Sử dụng 2 vòng lặp duyệt phần tử đúng trc và phần tử liền kề
    //Nếu giá trị tại vị trí i nhở hơn phần tử tại vị trí j --> đổi chỗ
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
          if(array[i] < array[j]){
            [array[i], array[j]] = [array[j],array[i]]
          }
          
        }
      }

    // Return giá trị thứ 2
    return array[1];
}

// console.log(max2Numbers([2,1,4,3,4,7,7]))

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

const getStringHasMaxLength = (arr) =>{

    //Khai báo chuỗi rỗng
    let length = []
    //Lấy ra mảng các giá trị là độ dài các chuỗi thuộc arr
    arr.forEach(element => {
        length.push(element.length)
    });

    // Trả về mảng gồm các chuỗi có độ dài là max của mảng length 
    return arr.filter((element) => element.length == Math.max(...length))
    
}

// console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

function getRandomElement(arr){
    //Random chỉ số của mảng
    let index = Math.floor(Math.random()*arr.length);

    // Trả về phần tử có chỉ số random
    return arr[index];
}

// console.log(getRandomElement([3, 7, 9, 11]))

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

function similarity (arr1, arr2){
    //Nối 2 mảng arr1 arr2
    let arr = [...arr1,...arr2]
    let result =[]
    //Lấy ra mảng các phần tử không trùng nhau
    for(let i=0; i< arr.length; i++){
        //Kiểm tra từng phần tử trong mảng
        //Nếu phần tử đó nằm trong result -> bỏ qua
        //Nếu phần tử đó không nằm trong result -> push vào
        if(result.includes(arr[i]) == false){
            result.push(arr[i])
        }
    }

    //Duyệt mảng result lấy ra các phần tử xuất hiện trong cả 2 mảng
    //Dùng inculdes() để kiểm tra giá trị đó có thuộc cả 2 mnagr không
    return result.filter((element) => arr1.includes(element) && arr2.includes(element))
}


// console.log(similarity([1, 2,2, 3], [3, 4,1,3, 5]))

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

const getTime = (time,x) =>{
    //Sử dụng split tách chuỗi thành mngr chứa giờ, phút giây
    let t = time.split(":");

    //Đổi hh:mm:ss --> seconds (nhân với 1 để convert từ chuỗi sang số)
    //Cộng với số giây x
    let seconds = t[0]*3600 + t[1]*60 + t[2]*1 + x*1;

    //Đổi seconds --> hh:mm:ss
    //Gán t[0] = giờ
    t[0] = Math.floor((seconds/3600));
    //Gán t[1] = phút
    t[1] = Math.floor(((seconds%3600)/60))
    //Gán t[2] = giây
    t[2] = ((seconds%3600)%60)

    //Hiển thị định dạng 2 chữ số
    for (let i = 0; i < t.length; i++) {
        if(t[i] < 10){
            t[i] = "0"+t[i];
        }
    }

    //Trả về chuỗi hiển thị hh:mm:ss 
    //Sử dugj join để nối các phần tử trong mảng
    return t.join(":");
}

console.log(getTime("9:20:00", 60))




// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true

const findAgeGreater25 = (users) => {

    //Sử dụng filter duyệt từng object thuộc mnagr, trả về mngr chứa các phần tử có age>25 và isStatus = true
    return users.filter((element) => element.age > 25 && element.isStatus == true)
}

// console.log(findAgeGreater25(users))

// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

const sortingAge = (users) => {
    //Sử dụng 2 vòng lặp for để duyệt mảng
    //Nếu phần tử tại vị trí i (đứng trước) lớn hơn phần tử tại vị trí j (đứng sau) --> đổi chỗ 2 phần tử
    for (let i = 0; i < users.length-1; i++) {
      for (let j = i+1; j < users.length; j++) {
        if(users[i].age > users[j].age){
          [users[i], users[j]] = [users[j],users[i]]
        }
        
      }
    }

    //Trả về mảng đã đc sắp xếu tuổi tăng dần
    return users
  }

//   console.log(sortingAge(users))


// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }

const getCountElement = (arr) => {
    //Khởi tạo object
    let element = {}
    //Khởi tạo biến đếm bằng 0
    let count = 0;

    let result =[]
    //Lấy ra mảng các phần tử không trùng nhau
    for(let i=0; i< arr.length; i++){
        //Kiểm tra từng phần tử trong mảng
        //Nếu phần tử đó nằm trong result -> bỏ qua
        //Nếu phần tử đó không nằm trong result -> push vào
        if(result.includes(arr[i]) == false){
            result.push(arr[i])
        }
    }

    //Duyệt từng phần tử mảng result
    for (let i = 0; i < result.length; i++) {
        //Duyệt từng phần tử mảng arr truyền vào
        // Đếm số làn xuất hiện của result[i]
        for (let j = 0; j < arr.length; j++) {
            //Mỗi lần result[i] xuất hiện trong mảng arr
            if(result[i] == arr[j]){
                //Biến đếm cộng 1
                count++;
            }
        }

        //Kết thúc đếm số lần xhien của result[i] --> gán value cho key 
        element[result[i]] = count;

        //Count trở về 0
        count = 0;
        
    }
    
    //Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
    return element;

}

// console.log(getCountElement(["one", "two", "three", "one","one","five", "one", "three"]))

