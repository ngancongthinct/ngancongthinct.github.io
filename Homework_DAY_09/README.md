

# Tổng hợp kiến thức Day09
## Giới thiệu JavaScript
<p>JavaScript dùng để</p>
<ul>
<li>Thay đổi nội dung của 1 trang web</li>
<li>Thông báo cho người dùng</li>
<li>Phản hồi với các tương tác của người dùng...</li>
</ul>

<p>- Một số kiểu dữ liệu: undefined, number, string, boolean, null --> primary type( kiểu nguyên thủy)</p>

> alert("Xin chào")
<p>--> Hiển thi popup, nhưng hạn chế dùng</p>
<p>Được sử dụng nhiều: 

> console.log</p>



## Biến trong JavaScript
<p>Biến dùng để lưu trữ dữ liệu, có thể thực hiện gán giá trị cho biến, cộng trừ nhân chia các biến</p>

## Khai báo biến

<p>- Khai báo biến với <strong>let</strong>:</p>
<strong>let tên biến</strong>

> let name


<p>- Khi 1 biến đc khai báo n chưa đc gán giá trị thì nhận kiểu dữ liệu là <strong>undefine</strong></p>

> name = 'Jaehyun'; <br> console.log(name);

<p>- Khai báo chuỗi rỗng:</p>

> let emtyString = ''

<p>Cách 2: Vừa khai báo biến vừa gán giá trị cho biến </p>

> let email = 'ngancongthi@gmail.com' <br>
console.log(email);
<br>--> Kết quả: ngancongthi@gmail.com

<p>- Khai báo biến sử dụng const </p>

>const pi=3.14 <br>
console.log(pi); <br>
--> Kết quả: 3.14

<p>- Khai báo biến bằng const phải khởi tạo giá trị ban đầu và không thể gán lại một giá trị khác cho biến const.</p>

## Quy tắc đặt tên biến
<ul>
<li>Chứa các kí tự số, _, $</li>
<li>Ký tự đầu k được là chữ</li>
<li>Phân biệt hoa thương</li>
<li>Không trùng với keyword của Js</li>
<li>Với tên biến dài 2 từ trở lên nên đặt theo kiểu camelCase: userEmail</li>
<li>Hoặc snake_case: user_email</li>
</ul>

<p><strong>typeof</strong> trả về kiểu dữ liệu của biến</p>

> let name = "Taeyong" <br>
console.log(typeof name) <br>
--> Kết quả: string

<p>- JavaScript thực hiện được phép toán khác kiểu dữ liệu:</p>
<p><strong>chuỗi + số --> số convert sang chuỗi</strong></p>

> console.log("Taeyong"+10) <br>
--> Kết quả: Taeyong10

<p><strong>Phép -*/ convert từ chuỗi --> số</strong></p>

> console.log("10"-10) <br>
--> Kết quả: 0


<p><strong>số - kiểu k p số --> NaN: not a number</strong></p>

> console.log("Taeyong"-10) <br>
--> Kết quả: NaN

<p><strong>** --> phép lũy thừa
</strong></p>

## Template string ES6

<p>- Có thể sử dụng dấu back tick `` thay cho dấu nháy, hoặc có thể sử dụng dấu nháy mà không cần sử dụng escape character và hiển thị đúng định dạng kể cả khi xuống dòng</p>

>let message = 'Xin chào các bạn, mình tên là \'Jaehyun\'. Mình sinh năm 1997'; <br>
console.log(message) <br>
let year = 2000 <br>
console.log(\`Xin chào các bạn, măm nay mình ${2022 - year} tuổi\`);

<p>- Truyền biến ${} chỉ sử dụng đc trong dấu back tick ``</p>

## Math Object trong JavaScript

<li><strong>Math.PI</strong>: trả về giá trị số PI</li>
<li><strong>Math.round</strong>: làm tròn thành số nguyên theo quy tắc toán học</li>
<li><strong>Math.floor()</strong>: làm tròn xuống số nguyên gần nhất</li>
<li><strong>Math.ceil()</strong>: làm tròn lên đến số nguyên gần nhất</li>
<li><strong>Math.random()</strong>: random 1 số thập phân trong khoảng 0 -> 1
</li>
<li><strong>Math.pow(2, 4)</strong> = 2**4 = 16</li>
<li><strong>Math.sqrt()</strong>: tính căn bậc 2</li>
<li><strong>Math.abs()</strong>: trả về giá trị tuyệt đối</li>
<li><strong>Math.max(1,2,3,4,7,9)</strong>: trả về số lớn nhất trong danh sách</li>
<li><strong>Math.min(1,2,3,4,7,9)</strong>: trả về số nhỏ nhất trong danh sách</li>













