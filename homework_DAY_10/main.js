// Bài 1:

// Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra

// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// Nếu số đó chia hêt cho 5 thì in ra “Buzz”

function kiemTraChiaHet(num){
    if(num%15==0){
        console.log("FizzBuzz");
    }else if(num%3==0){
        console.log("Fizz");
    }else if(num%5==0){
        console.log("Buzz");
    }
}
kiemTraChiaHet(30)

// Bài 2:

// Viết function giải phương trình bậc nhất (ax + b= 0)


function phuongTrinhBacNhat(a,b){
    if(a==0){
        if(b==0){
            console.log("Phuong trinh vo so nghiem");
        } else{
            console.log("Phuong trinh vo nghiem");
        }
    }else{
        console.log(`Phuong trinh co nghiem: ${-b/a}`);
    }
}

phuongTrinhBacNhat(1,2)

// Bài 3:

// Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)

function phuongTrinhBacHai(a, b, c){
    let x1, x2
    let delta = b*b - 4*a*c;
    if(delta<0){
        console.log("vo nghiem")
    }
    else if(delta==0){
        x1 = -b/(2*a);
        console.log(`x1 = x2 = ${x1}`)
    }
    else{
        delta = sqrt(delta);
        x1 = (-b + delta) / (2*a);
        x2 = (-b - delta) / (2*a);
        console.log(`x1 = ${x1}, x2 = ${x2}`)
    }
}

phuongTrinhBacHai(1, 2, 3)


// Bài 4:

// Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?

// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”

function kiemTraNamNhuan(year){
    if(year%4==0){
        console.log("Là năm nhuận")
    } else{
        console.log("Không là năm nhuận")
    }
}

kiemTraNamNhuan(2022)

// Bài 5:

// Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

function BMI(weight, height){
    let bmi = weight/(height*height);
    return bmi;
}

console.log(BMI(48, 1.58))


// Bài 6:

// Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng
function doF(C){
    let F = 9/5 * C + 32;
    return F;
}

console.log(doF(50))


