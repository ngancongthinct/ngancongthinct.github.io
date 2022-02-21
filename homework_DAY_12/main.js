// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ:

// checkStringExist(“i love you”, “you”) => true
// checkStringExist(“i love you”, “hate”) => false

function checkStringExist(string,subString){
    let check = false;
    if (string.includes(subString)==true) {
        check = true;
    }
    return check;
}

console.log(checkStringExist("Lee Taeyong","Lee "))

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

// Ví dụ:

// shortenString(“Xin chào các bạn”) => “Xin chào…”
// shortenString("hello’) => “hello”

function shortenString(str) {
    let subStr="";
    if(str.length <= 8){
        return str;
    }else{
        subStr = str.substr(0,8) + "..."
        return subStr;
    }
    
}

console.log(shortenString("Lee Taeyong rất đzai"))
console.log(shortenString("Taeyong"))

// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

// Ví dụ

// “Race car” => true,
// “hello world” => false.

function checkSymmetricalString(str) {
    let string = str.toLowerCase();
    string = string.replace(/ /g,"");
    string = string.split("")
    let check;
    for(let i=0; i<Math.floor(string.length/2); i++){
        if(string[i] == string[string.length - 1 - i]){
            check = true;
        }else{
            check = false;
            return check;
        }
    }
    return check;
}

console.log(checkSymmetricalString("Race car"))
console.log(checkSymmetricalString("Radar"))
console.log(checkSymmetricalString("hhhhh hhhh hhhh h"))

// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359

function sortingNumber(num) {
    let number = (num + "").trim();
    number = number.split("");
    number.sort();
    let sortingNumber = "";
    if(number[0] == "0"){
        for (let i = 1; i < number.length; i++) {
            if(number[i] != 0){
                number[0] = number[i];
                number[i] = "0";
                break;
            }
            
        }
    }
    for(let i = 0; i< number.length; i++){
        sortingNumber =  sortingNumber + number[i];
    }
    sortingNumber = sortingNumber - 0;
    return sortingNumber;

}

console.log(sortingNumber(3092007))
console.log(sortingNumber(14350))

// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// “HELLO world” => “hello_world”
// “Xin Chào Các BẠN” => “xin_chào_các_bạn”

function changeSnakeCase(str){
    let string = str.toLowerCase();
    string = string.replace(/ /g,"_");
    return string;
}
console.log(changeSnakeCase("HELLO woRld"))
console.log(changeSnakeCase("HELLO woRld HI"))

