//1. Chức năng
//Chỉnh sửa số lượng mặt hàng
//Xóa mặt hàng
//Sử dụng mã giam giá
//Tính tổng tiền thanh toán
//Cập nhật tổng số lượng sp

//Câu 2: Đối tượng trong ứng dụng là gì? ==Sản phẩm
//Có các thuộc tính nào
//id --> id: number
//Tên sp --> title:string
//Mô tả --> description: string
//Số lượng trong giỏ: --> count: int
//Giá --> price: int
//Ảnh --> image: string


let products = [
    {
        id: 1,
        title: "Sản phẩm 1",
        description: "Áo khoác thu đông",
        count: 1,
        price: 50000,
        image: "https://sakurafashion.vn/upload/a/2990-ao-khoac-jacket-5127.jpg"
    },
    {
        id: 2,
        title: "Sản phẩm 2",
        description: "Chân váy ngắn hàn quốc",
        count: 1,
        price: 20000,
        image: "https://salt.tikicdn.com/ts/tmp/d7/6c/2b/c1be50453cd0d8f88cb1b1db7b535a16.jpg"
    },

]

//Các mã giảm giá 
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40
}

//Convert tiền
function convertMoney(number){
    return number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}


//Truy cập vào các thành phần
let productsEl = document.querySelector(".products")

const discount = document.querySelector(".discount")

const discountSpan = document.querySelector(".discount span")

//Truy cập notice
const notice = document.querySelector(".notice") 

//Truy cập btn mã giảm giá
const btn = document.querySelector(".promotion button")

//Hiển thị dư liệu trên giao diện
function renderProduct(arr){
    productsEl.innerHTML = "";

    //Cập nhật số lượng
    updateTotalProduct(products)

    //Cập nhật giá tiền
    updateTotalMoney(products, promotionCode)

    // console.log(checkPromotionCode(promotionCode))

    //Kiểm tra không có sản phẩm nào trong giỏ hàng
    if(arr.length == 0){
        productsEl.insertAdjacentHTML("afterbegin", "<li>Không có sản phẩm nào trong giỏ hàng</li>")
        document.querySelector(".option-container").style.display = "none"
    return
    }

    //Trưởng hợp có sản phẩm
    let html = ""
    for (let i = 0; i < arr.length; i++) {
        html += `
        <li class="row">
        <div class="col left">
            <div class="thumbnail">
                <a href="#">
                    <img src="${arr[i].image}" alt="${arr[i].title}">
                </a>
            </div>
            <div class="detail">
                <div class="name"><a href="#">${arr[i].title}</a></div>
                <div class="description">
                ${arr[i].description}
                </div>
                <div class="price">${convertMoney(arr[i].price)}</div>
            </div>
        </div>

        <div class="col right">
            <div class="quantity">
                <button class="btn-subtract" onclick = subtractCount(${arr[i].id}) >-</button>
                <p>${arr[i].count}</p>
                <button class="btn-add" onclick = addCount(${arr[i].id})>+</button>
            </div>

            <div class="remove">
                <span class="close" onclick = removeProduct(${arr[i].id})>
                    <i class="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </li>
        `
        
    }
    
    //Chèn nội dung cho phần tử
    productsEl.innerHTML = html;
    

}

//Tính số lượng sp
function updateTotalProduct(arr){
    //Duyệt vòng lặp để tính tổng các giá trị của thuộc tính "count"
    let total = 0
    arr.forEach(element => {
        total += element.count
    });

    //Update tổng tính được vào phần tử có class là count
    const totalItem = document.querySelector(".count")
    totalItem.innerText = `${total} item(s) in the bag`
}

//Xóa sản phẩm
function removeProduct(id){
    //Sử dụng vòng lặp tìm id tương ứng
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id){
            products.splice(i,1)
        }
        
    }
    renderProduct(products)
}


//Tăng số lượng sản phẩm
function addCount(id){
    //Sử dụng vòng lặp để tìm sản phẩm có id towng ứng
    //Tăng giá trị "count" lên 1
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id){
            products[i].count += 1
        }
        
    }
    //Render lại giao diện
    renderProduct(products)
}

function subtractCount(id){
    //Sử dụng vòng lặp để tìm sản phẩm có id tương ứng
    //Giảm giá trị count đi 1
    //Giá trị count sau khi giảm p >=1
    for (let i = 0; i < products.length; i++) {
        if(products[i].id==id){
            if(products[i].count>=2){
                products[i].count -= 1
            }
        }
        
    }


    //Render lại giao diện
    renderProduct(products)
}

//Tính tổng tiền
function updateTotalMoney(arr,obj){

    //Sử dụng vòng lặp để tính tổng tiền
    //Tổng tiền = cout * price
    let subtotal = 0
    arr.forEach(element => {
        subtotal += element.count*element.price
    });

    //VAT = 10% * subtotal
    let VAT = 0.1*subtotal

    //Mặc định discount =0
    let discountValue = 0
    //Kiểm tra disscount hợp lệ hay k
    if(checkPromotionCode(obj)){
        discount.classList.remove("hide")
        //Nếu hợp lệ thì tính toán discount dựa vào giá trị đc giảm
        discountValue = checkPromotionCode(obj)/100*subtotal
        discountSpan.innerText = convertMoney(discountValue)
        notice.classList.add("hide")

    } else{
        if(document.querySelector("#promo-code").value != ""){
            notice.classList.remove("hide")
            discount.classList.add("hide")
        }else{
            discount.classList.add("hide")
            
        }
    }


    

    //total = subtotal + VAT
    let total = subtotal + VAT - discountValue

    //Cập nhật tiền vào phần tử tương ứng
    document.querySelector(".subtotal span").innerText = convertMoney(subtotal)
    document.querySelector(".vat span").innerText = convertMoney(VAT)
    document.querySelector(".total span").innerText = convertMoney(total)
    // return discountValue
}


btn.addEventListener("click",function(){
    if(document.querySelector("#promo-code").value == ""){
        notice.classList.remove("hide")
        discount.classList.add("hide")
    } else{
        updateTotalMoney(products, promotionCode)
    }
    // console.log(updateTotalMoney(products, promotionCode))
})

 function checkPromotionCode(obj){
        //Truy cập input
        const inputCode = document.querySelector("#promo-code")
        let value = inputCode.value;
        if(obj.hasOwnProperty(value)){
            return obj[value]
        } else{
            return false
        }
    }

renderProduct(products)


//Ấn nút giảm giá
//--> gọi update money
//Có thể tách ktra ra function riêng hợp lệ true k hợp lệ false





