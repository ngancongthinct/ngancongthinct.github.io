// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
const para = document.querySelector("p")
let p = para.innerText.split(" ")
for (let i = 0; i < p.length; i++) {
    if(p[i].length >= 8){
        p[i] = `<span style ="background-color:yellow">${p[i]}</span>`
    }
    
}
para.innerHTML = `${p.join(" ")}`
// console.log(p)
// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const linkFb = document.createElement("a")
linkFb.href = "https://facebook.com"
linkFb.innerText = "facebook"
linkFb.target="_blank"
para.insertAdjacentElement("afterend",linkFb)

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const words = document.createElement("div")
words.innerText = `Số từ: ${p.length}`
linkFb.insertAdjacentElement("afterend",words)

// Thay thế các ký hiệu ? => 🤔, ! => 😲
// console.log(para.innerText)
paraContent = para.innerHTML.replaceAll("!","😲")
paraContent = paraContent.replaceAll("?","🤔")
para.innerHTML = paraContent



