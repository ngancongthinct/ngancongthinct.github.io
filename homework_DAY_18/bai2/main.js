// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

const counter = document.querySelector("#counter")
const minusBtn = document.querySelector(".prevBtn")
const plusBtn = document.querySelector(".nextBtn")
const color = (counter) => {
    if(counter.innerText*1>0){
        counter.style.color = "green"
    } else if(counter.innerText*1 == 0){
        counter.style.color = "#333333"
    }else{
        counter.style.color = "red"
    }
}
const minus = () =>{
    counter.innerText = `${counter.innerText - 1}`;
    color(counter);
}

minusBtn.addEventListener("click",minus)

const plus = () =>{
    counter.innerText = `${counter.innerText*1 + 1}`;
    color(counter);
}

plusBtn.addEventListener("click",plus)

