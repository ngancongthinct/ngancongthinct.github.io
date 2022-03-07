const list = document.querySelector("#list")
const li8 = document.createElement("li")
li8.innerText = "Item 8"
list.appendChild(li8)

const li9 = document.createElement("li")
li9.innerText = "Item 9"
list.appendChild(li9)

const li10 = document.createElement("li")
li10.innerText = "Item 10"
list.appendChild(li10)

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector("#list li:first-child")
li1.style.color = 'red'

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("#list li:nth-child(3)")
console.log(li3)
li3.style.backgroundColor = 'blue'

// Remove thẻ <li> 4
const li4 = document.querySelector("#list li:nth-child(4)")
li4.parentElement.removeChild(li4)

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLi = document.createElement("li")
newLi.innerText="This is new li tag"
li3.insertAdjacentElement("afterend",newLi)


//-----------------------Bai tap buoi2----------------------
//Tạo nút add
const add = document.createElement("button");
add.innerText = "Add";

//Tạo box input 
const inputBox = document.createElement("input")
inputBox.type = "text"
inputBox.placeholder = "Enter content"
inputBox.id = "addElement"

// Thêm vào sau tag ul 
list.insertAdjacentElement("afterend",inputBox)
inputBox.insertAdjacentElement("afterend",add)

const addElement = () =>{
    //Nếu blank -> message
    if(document.getElementById("addElement").value == ""){
        alert("Please fill in the blank")
    }else{
        const list = document.querySelector("#list")
        //Tạo tag li
        const newLi = document.createElement("li")
        //Nội dung tag li là nội dung trong box input
        newLi.innerText = `${document.getElementById("addElement").value}`
        //Thêm vào cuối thẻ ul 
        list.appendChild(newLi)
        //Clear box sau khi thêm li vào cuối 
        document.getElementById("addElement").value = ""

    }
}

add.onclick = addElement

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
//Tạo nút Remove
const remove = document.createElement("button");
remove.innerText = "Remove";
add.insertAdjacentElement("afterend",remove)

const removeElement = () =>{
    const li1 = document.querySelector("#list li:last-child")
    li1.parentElement.removeChild(li1)
}

remove.onclick = removeElement

// Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
const hide = document.createElement("button");
hide.innerText = "Hide";
list.insertAdjacentElement("beforebegin",hide)

const hideElement = () => {
    if(hide.innerText == "Hide"){
        list.style.display = "none"
        hide.innerText = "Show"
    } else{
        list.style.display = "block";
        hide.innerText = "Hide"
    }
}

hide.onclick = hideElement









