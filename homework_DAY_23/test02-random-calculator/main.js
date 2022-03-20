//Truy cập 
const primaryEl = document.querySelector("#primary-number")
const seconderyEl = document.querySelector("#secondary-number")
const operatorEl = document.querySelector("#operator")
const timeEl = document.querySelector(".time");
const resultEl = document.querySelector("#result");
const scoreEl = document.querySelector(".score")

//Function random số
const randomNumb = () => {
    return Math.floor(Math.random() * 10) + 1;
}

//Function random toán tử
const randomOperator = () => {
    let operators = ["+","-","*"];
    let index = Math.floor(Math.random() * operators.length);
    return operators[index]
}

//Ban đàu khi load trang, random 2 số nguyên và toán tử
function render(){
    primaryEl.innerText = randomNumb()
    seconderyEl.innerText = randomNumb()
    operatorEl.innerText = randomOperator()
    if(time < 10){
        timeEl.innerText = `00:0${time}`
    } else{
        timeEl.innerText = `00:${time}`
    }



}


//Đêm người thời gian

let time = 10;

// Cập nhật thời gian
let updateTime = () => {
    // Giảm thời gian đi 1
    time--;

    // Cập nhật thời gian mới lên trên giao diện
    if(time < 10){
        timeEl.innerText = `00:0${time}`
    } else{
        timeEl.innerText = `00:${time}`
    }
    
    // Kiểm tra thời gian
    if (time == 0) {

        // Kết thúc quá trình lặp đi lặp lại
        clearInterval(interval)

        //disable ô input
        resultEl.disabled = true

        alert(`Điểm của bạn là ${scoreEl.innerText}`)


        



    }
}



// Cứ 1s thì gọi updateTime 1 lần
let interval = setInterval(updateTime, 1000)


// setTimeout(function() {
//     console.log("xin chào")
// },3000)



resultEl.addEventListener("keyup", function (event) {
    if(event.keyCode == 13){
        if(resultEl.value == ""){
            alert("Kết quả không được để trống")
        } else if(checkResult()==true){
            render()
            resultEl.value =""
            scoreEl.innerText = scoreEl.innerText*1 + 1 >= 10 ? scoreEl.innerText*1 + 1 : `0${scoreEl.innerText*1 + 1}`

        } else{
            resultEl.value=""
        }

    }
});


//Function check result
function checkResult(){
    let result = 0
    if(operatorEl.innerText == "+"){
        result = primaryEl.innerText*1 + seconderyEl.innerText*1

    } else if(operatorEl.innerText == "*"){
        result = primaryEl.innerText*1 * seconderyEl.innerText*1
    } else {
        result = primaryEl.innerText*1 - seconderyEl.innerText*1
    }
    console.log(result)

    //Check kết quả
    if(result == resultEl.value){
        return true
    } else{
        return false
    }
}

render()


//--------------------------------------------------------------------------------
// //Chữa bài
// const primaryNumberEl = document.getElementById("primary-number")
// const secondaryNumberEl = document.getElementById("secondary-number")
// const operatorEl = document.getElementById("operator");
// const resultEl = document.getElementById("result")
// const timeEl = document.querySelector(".time")
// const scoreEl = document.querySelector(".score")

// const operators = ["+","-","*"]
// let total = 0
// let time = 10
// let score = 0
// let interval;

// //Chạy thời gian
// function updateTime(){
//     time--
//     timeEl.innerText = time >= 10 ? `00:${time}` : `00:0${time}`
//     // Nếu time = 0 thì kết thúc đếm gược và thông báo kết qả
//     if(time == 0){
//         clearInterval(interval)
//         console.log(`score: ${score}`)

//         //disable ô input --> k cho nhập
//         resultEl.value=""
//         alert(`Kết quả : ${score}`)
//     }
// }

// resultEl.addEventListener("keyup", function(e){
//     if(e.keyCode == 13){
//         //Lấy value trong ô input
//         let value = e.target.value
//         // console.log(value)
//         //Kiểm tra với đáp án
//         if(value == total){
//             // tăng điểm lên 1
//             score++

//             //Cập nhật điểm trên giao
//             scoreEl.innerText = score >= 10 ? `${score}` : `0${score}`


//             //Random phép tính khác
//             randomNumber()

//         }

//         //Xóa dữ liệu trong ô input
//         resultEl.innerText=""
        
//     }
// })

// function randomNumber(){
//     //Random số và phép tính
//     let primaryNumber = Math.floor(Math.random()*10)
//     let secondaryNumber = Math.floor(Math.random()*10)
//     let operator = operators[Math.floor(Math.random()*operators.length)]

//     console.log(primaryNumber, operator, secondaryNumber)
//     //Tính toán kết quả của biểu thức vừa random
//     total = eval(`${primaryNumber} ${operator} ${secondaryNumber}`)

//     //Hiển thị nội dunng lên giao diện
//     primaryNumberEl.innerText = primaryNumber;
//     secondaryNumberEl.innerText = secondaryNumber;
//     operatorEl.innerText = operator
// }

// //Chạy khi bắt đầu game
// function init(){
//     //Random số
//     randomNumber();

//     //Set lại time và score
//     timeEl.innerText = time >= 10 ? `00:${time}` : `00:0${time}`

//     //11-02
//     scoreEl.innerText = time >= 10 ? `${score}` : `0${score}`

//     //Chạy thời gian
//     interval = setInterval(updateTime, 1000)
// }

// init()

