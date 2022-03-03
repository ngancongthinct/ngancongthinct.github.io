// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.querySelector("#heading")
heading.style.color = 'red'
heading.style.textTransform = 'uppercase'

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const classPara = document.querySelectorAll(".para")
for (let i = 0; i < classPara.length; i++) {
    classPara[i].style.color = 'blue'
    classPara[i].style.fontSize = '20px'
    
}

console.log(classPara)
const classPara1 = document.querySelector(".para-1")
const classPara2 = document.querySelector(".para-2")
const classPara3 = document.querySelector(".para-3")

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const linkFB = document.createElement("a")
linkFB.innerText = "facebook"
linkFB.href = "https://facebook.com"
classPara3.insertAdjacentElement("afterend",linkFB)

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector("#title");
title.innerText = "Đây là thẻ tiêu đề"

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector(".description");
description.classList.add('text-bold')

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const button = document.createElement("button")
button.innerText = "Click me"
classPara3.parentElement.replaceChild(button, classPara3)

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const copyPara2 = classPara2.cloneNode(true)
classPara2.insertAdjacentElement("afterend",copyPara2)

// Xóa thẻ có class=“para-1”
classPara1.parentElement.removeChild(classPara1)