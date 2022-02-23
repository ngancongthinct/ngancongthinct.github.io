# String methods

## length

> Trả về độ dài của chuỗi

```js
let str = "ABCDE";
let length = str.length; //--> Kết quả 5
```

## slice()

> Trả về chuỗi mới là chuỗi con của chuỗi ban đầu theo chỉ số từ start đến end (không bao gồm end)

```js
slice(start, end)
```

```js
let str = "Xinchaocacban";
let subStr = str.slice(3,7); //Kết quả "chao"
```

> Nếu chỉ số âm, vị trí được tính từ cuối chuỗi

> Nếu bỏ qua tham số thứ 2, phương thức sẽ loại bỏ phần còn lại của chuỗi

## substring()

> tương tự như slice() nhưng không nhận chỉ số âm

> substring(start, end)

```js
let str = "Xinchaocacban";
let subStr = str.substring(3,7); //Kết quả "chao"
```

## substr()

> Trả về chuỗi mới là chuỗi con có chỉ bắt đầu từ start với độ dài là length.

```js
substr(start, length)
```

```js
let str = "Xinchaocacban";
let subStr = str.substr(3,4); //Kết quả "chao"
```

## replace()

> Thay thế một giá trị được chỉ định bằng một giá trị khác trong chuỗi.

```js
replace(giá_tri_được_Chỉ_định, giá_trị_mới)
```

> Mặc định replace sẽ thay thế giá trị đầu tiên. Nếu muốn thay thế tất cả kết quả phù hợp thì sử dụng biểu thức chính quy /g. Ngoài ra có thể sử dụng biểu thức chính quy /i để không phân biệt hòa thường.

> Biểu thức chính quy được viết mà không có dấu nháy kép.

```js
let text = "abecde";
let newText = text.replace(/e/g, "f"); //--> Ket qua abfcdf
```

## replaceAll()

>Tương tự replace() nhưng thay thế tất cả kết quả phù hợp mà không cần cần biểu thức chính quy.

## toUpperCase() & toLowerCase()

> Một chuỗi sẽ được chuyển tòan bộ thành chữ hoa với toUpperCase() và chữ thường với toLowerCase()

```js
let text1 = "xiNchaOCAcBaN";
let text2 = text1.toUpperCase(); // --> ket qua "XINCHAOCACBAN"
let text3 = text1.toLowerCase(); // --> ket qua "xinchaocacban"
```

## concat()

>Nối 2 hoặc nhiều chuỗi với nhau, có thể thay cho toán tử cộng.

```js
let text1 = "xin";
let text2 = "chao";
let text3 = text1.concat(" ", text2); // --> ket qua "xin chao"
```

## trim()

> Loại bỏ khoảng trắng ở cả 2 đầu của chuỗi.

```js
 let text1 = "      xinchao      ";
let text2 = text1.trim(); //--> ket qua "xinchao"
```

## charAt()

> Trả về kí tự tại vị trí được chỉ định trong chuỗi.

```js
let text = "xinchao";
let char = text.charAt(0); //--> ket qua "x"
```

## split()

>Chuyển đổi 1 chuỗi thành mảng. Nếu bỏ qua ký tự phân tách thì mảng trả về chứa toàn bộ chuỗi ở chỉ số 0, còn nếu ký tự phân tách là "" thì mảng trả về gồm các ký tự đơn.

```js
string.split("ky_tu_phan_tach");
```

```js
let str = "a1,b,c,d,e,f";
let arr = str.split(",") //--> ket qua [a1, b, c, d, e, f]
```

## includes()

>Trả về giá trị True nếu một chuỗi chứa chuỗi được chỉ định, nếu không trả về false.

> Phân biệt hoa thường

```js
let str = "abcde"
let result = str.includes("a") //--> ket qua True

let result2 = str.includes("a",1) //--> ket qua False
```

## indexOf()

> Trả về vị trí đầu tiên của một chuỗi được chỉ định trong chuỗi cha.

> Phân biệt hoa thường.

```js
string.indexOf(searchvalue, start)
```

```js
let text = "xinchaocacban";
let result = text.indexOf("chao"); //-->ket qua 3
let result2 = text.indexOf("chao",4); //-->ket qua -1
```

> Nếu không tìm được kết quả phù hợp --> trả về -1

## lastIndexOf()

> Tương tự indexOf() nhưng trả về vị trí cuối cùng của chuỗi được chỉ định.

```js
string.lastIndexOf(searchvalue, start)
```

## startWith ()

> Trả về True nếu một chuỗi bắt đầu bằng chuỗi được chỉ định, ngược lại trả về false.

> Phân biệt hoa thường

```js
let text = "abcde";

console.log(text.startsWith("a")); //True

console.log(text.startsWith("b",1)); //True
```

## endsWith()

>Tương tự startWith () nhưng trả về True nếu một chuỗi kết thúc bằng chuỗi được chỉ định, ngược lại trả về false.

# Array Methods

## Slice, Concat, indexOf, Includes

>Giống String Methods

## push()

> Thêm phần tử mới vào cuối mảng 

```js
array.push(item1, item2, ..., itemX)
```

```js
let arr = ["A", "B", "C", "D"];
arr.push("E", "F"); //-->Ket qua arr = ["A","B","C","D","E","F"]
```

## pop()

> Loại bỏ phần tử cuối cùng ra khỏi mảng hoặc trả về phần tử bị loại bỏ.

```js
array.pop()
```

```js
const arr = ["A", "B", "C", "D"];
arr.pop(); // arr = ["A","B","C"]
```

## unshift()

> Thêm phần tử mới vào đầu mảng

> Ghi đè lên mảng ban đầu

```js
 array.unshift(item1, item2, ..., itemX)
 ```

```js
let arr = ["A", "B", "C", "D"];
arr.unshift("E", "F"); //-->Ket qua arr = ["E","F","A","B","C","D"]
```

## shift()

> Loại bỏ phần tử đầu tiên trong mảng hoặc trả về phần tử đã thay đổi

> Ghi đè lên mảng ban đầu

```js
array.shift)
```

```js
let arr = ["A", "B", "C", "D"];
arr.shift(); //arr = ["B","C","D"]

```
## reverse()

> Đảo ngược thứ tự các phần tử trong mảng

>Ghi đè lên mảng ban đầu

```js
array.reverse()
```

```js
let arr = ["A", "B", "C", "D"];
arr.reverse(); //arr = ["D","C","B","A"]

```

## join()

> Nối các phần tử trong mảng thành 1 chuỗi bằng dấu phân cách.

>Dấu phân cách mặc định là dấu phẩy

>Không làm thay đổi mảng ban đầu

```js
let arr = ["A", "B", "C", "D"];
let str = arr.join(" and "); // str = "A and B and C and D"
```

## toString()

>Chuyển 1 số thành chuỗi

```js 
 number.toString(radix)
 ```

```js
let arr = [1,2,3,4,5]
let str = arr[0].toString(); //str = "1"
```

## sort()

> Sắp xếp mảng theo thứ tự bảng chữ cái với chuỗi và tăng dần với số

```js
let arr = ["A","C","E","B"]
arr.sort() //arr1 = ["A","B","C","E"]
```

```js
let arr = [1,5,2,7,3]
arr.sort() //arr = [1,2,3,5,7]
```

## splice ()

>Thêm hoặc loại bỏ các phần tử trong mảng.

>Ghi đè lên mảng ban đâu

```js
array.splice(index, howmany, item1, ....., itemX)
```

```js
let arr = ["A","B","C","D"]
//Thêm phần tử
//arr.splice(2,0,"E","F"); 
//--> ["A","B","E","F","C","D"]
//Loại bỏ phần tử
//arr.splice(2,2)
//-->["A","B"]
```











