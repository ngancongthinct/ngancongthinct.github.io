// Bài 1.Viết function truyền vào 1 chuỗi bất kỳ, sao chép chuỗi đó lên 10 lần

function repeatString1(str){
    let repeatStr = ""
    for(let i=0; i<10;i++){
        repeatStr = repeatStr+str
    }
    return repeatStr
}

console.log(repeatString1("a"))

// Bài 4.Tính tổng các số chia hết cho 5 từ 0 -> 100

function tinhTongChiaHetCho5(){
    let sum = 0
    for(let i=0; i<100;i++){
        if(i%5==0){
            sum = sum+i;
        }
    }
    return sum
}

console.log(tinhTongChiaHetCho5())

// Bài 2.Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

function repeatString2(str){
    let repeatStr = ""
    for(let i=1; i<=10;i++){
        repeatStr = repeatStr+str
        if(i<10){
            repeatStr=repeatStr+"-"
        }
    }
    return repeatStr
}

console.log(repeatString2("a"))

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

function repeatString3(str,n){
    let repeatStr=""
    for (let i =0; i<n; i++) {
        repeatStr = repeatStr + str;
        if(i<n-1){
            repeatStr = repeatStr+"-"
        }
    }
    return repeatStr;

}

console.log(repeatString3("a",3))

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function tinhTheTichHinhCau(r){
    let V=4/3*Math.PI*Math.pow(r,3);
    return V;
}

console.log(tinhTheTichHinhCau(2))

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function tinhTongSoNguyen(j,k){
    let sum=0;
    if(j<k){
        for(i=j+1;i<=k-1;i++){
        sum=sum+i;
        }
        return sum; 
    }else if(j>k){
        for(i=k+1;i<=j-1;i++){
            sum=sum+i;
            }
            return sum; 
    }
}
console.log(tinhTongSoNguyen(3,8))
console.log(tinhTongSoNguyen(8,3))

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function kiemTraSoNguyenTo(num){
    if(num<2){
        return false;
    }
    let count = 0;
    for(let i=2; i<= Math.sqrt(num);i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==0){
        return true;
    }else{
        return false;
    }
}

console.log(kiemTraSoNguyenTo(5))

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function tinhTongSoNguyenTo(num){
    let count = 0;
    let sum =0;
    for(i=2;i<=num;i++){
        if(num<2){
            break;
        }
        for(let j=2; j<= Math.sqrt(i);j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==0){
            sum=sum+i;
        }
        count=0;
    }
    return sum;
}

console.log(tinhTongSoNguyenTo(7))

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function tongUocSoNguyen(num){
    let sum =0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            sum=sum+i;
        }
    }
    return sum;
}
console.log(tongUocSoNguyen(10))








