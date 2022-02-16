# Tổng hợp kiến thức Day10
## Các loại scope trong Js
<p>3 loại scope</p>
<ul>
<li>Global scope</li>
<li>Function scope</li>
<li>Block scope</li>
</ul>
<p>- Global scope: được định nghĩa bên ngoài function</p>

> let name = "Nguyễn Văn A"
console.log(name)

<p>- Function scope: được định nghĩa bên trong function</p>

> function Hello(){
    let name = "A"
    console.log(`Hello ${name}`)
}
Hello() --> Hello A
console.log(name) --> Lỗi

<p>Block scope: được định nghĩa bên trong cặp dấu ngoặc {}</p>

> {let name = "A"}
console.log(name) --> A
}
console.log(name) --> lỗi

<strong>Biến global scope và block scope không thể truy cập từ bên ngoài nhưng nếu không khai báo biến sẽ trở thành biến global<strong>

## Function
<p>- Là tập hợp các đoạn code dùng để thực hiện 1 công việc nào đó</p>
<p>Cú pháp định nghĩa</p>

> function functionName(parameter1, paramete2,...){
    <br>//code thực thi <br>
}

<p>Gọi hàm</p>

> functionName(argument1, argument2,...)

<p>- Tham số và đối số:</p>
<ul>
<li>Tham số (parameter) là biến trong khai báo hàm.</li>
<li>Đối số (argument) là giá trị thực của biến này được truyền vào hàm.</li>
</ul>

## Các loại Function
<p>- Function không có tham số</p>

> function sayHello(){
    console.log("Hello")
}

<p>- Function có tham số<p>

> function sayHelloWithName(name){
    console.log(`Xin chào ${name}`)
}
<br>
sayHelloWithName("Jaehyun")


<p>- Function có trả về kết quả: có return</p>
<p>- Các câu lệnh đằng sau từ khóa return (nằm trong function) sẽ k đc thực thi</p>

>function sum(num1 =70, num2=50){
    let result = num1 + num2;
    return result
}

<p>- Function có trả về kết quả: không có return</p>

> function sayHelloWithName(name){
    console.log(`Xin chào ${name}`)
}
<br>
sayHelloWithName("Jaehyun")

## Default parameters

<p>Cho phép khởi tạo function với những giá trị mặc định nếu như định nghĩa sai hoặc thiếu đối số truyền vào</p>

> function sum(a = 5, b=7) {
    let sum = a+b;
    return sum;
}
console.log(sum(2, 5)) --> 7 <br>
console.log(sum(2)) --> 2+7=9

## Kiểu dữ liệu Boolean
<p>Giá trị là true hoặc false</p>

>let a = true

<p>- Xác định giá trị Boolean sử dụng hàm Boolean()</p>

> let a = 6; <br>
let b = 5; <br>
console.log(Boolean(a < b)); //false

## Truthly và Falsy value
> Truthy value là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là true.

>Ngược lại, Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là false

<p>- 6 giá trị falsy: false, 0, NaN, ‘’, null, undefined</p>
<p>- Các giá trị khác các giá trị trên là truthly</p>

## Câu lệnh Điều kiện

<p>- Câu lệnh if</p>

> if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

<p>- Câu lệnh if - else</p>

> if (điều kiện) { <br>
    // Code được thực thi nếu điều kiện đúng
} else { <br>
    // Code được thực thi nếu điều kiện sai
}

<p>- Câu lệnh if - else if - else</p>

>if (điều kiện 1) { <br>
    // Code được thực thi nếu điều kiện 1 đúng <br>
} else if (điều kiện 2) { <br>
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng <br>
} else { <br>
    // Code được thực thi nếu điều kiện 1 và 2 sai
}


## Toán tử 3 ngôi

<p>-Toán tử 3 ngôi (thay thế cho if-else):</p>
<p>condition ? true : false</p>
<p>Nếu condition đúng thực thi sâu lệnh sau dấu?, nếu sai thực thi câu lệnh sau dấu :</p>

>hour < 12  <br>
? console.log("good moring")  <br>
: console.log("good afternoon") <br>

<p>Lúc nào ? và : cx p đi vs nhau</p>

>let b="2" <br>
a === b -->false  

## So sánh == & ===

<p>==: so sánh về giá trị </p>
<p>let a=2 </p>
<p>let b="2" <p>
<p>a == b --> convert b sang số --> true</p>

<p>===: so sánh giá trị và kiểu dữ liệu<p>
<p>let a=2<p>







