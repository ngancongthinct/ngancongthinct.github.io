//1. Các chức năng có trong ứng dụng là gì
//Thêm công việc
//Sửa tên công việc
//Xóa cv
//Lọc cv theo trạng thái
//Thay đổi trạng thái cv
//2. Đối tượng trong ứng dụng là gì
//==Công vc
//Có các thuộc tính nào
//1. Trạng thái --> status
//2. Tiêu đề --> title
//3. id --> id

function randomId(){
    return Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
}


let todos = [
    {
        id:randomId(),
        title:"Đi đá bóng",
        status: false
    },
    {
        id:randomId(),
        title:"Làm bài tập",
        status: true
    },
    {
        id:randomId(),
        title:"Đi kiểm tra sức khỏe",
        status: true
    }
]

//Truy cập
const todoList = document.querySelector(".todo-list");
const optionAll = document.querySelector("#all")
const optionActive = document.querySelector("#active")
const optionUnactive = document.querySelector("#unactive")


//Truy cập btn thêm
const btnAdd = document.querySelector("#btn-add")
//Truy cập ô input
const todoInput = document.querySelector("#todo-input")

//Truy cập btn sửa
const btnUpdate = document.querySelector("#btn-update")

//Truy cập icon update
const iconUpdate = document.querySelector(".btn-update")

//Render danh sách todo
function renderTodo(arr){
    todoList.innerHTML = "";

    //Trường hợp không có công việc nào trong danh sách
    if(arr.length == 0){
        todoList.innerHTML = "Danh sách rỗng"
        return;
    }

    //Khi có công việc
    //Sử dụng vòng lặp để render
    let html ="";

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        html += `
        <div class="todo-item ${t.status ? "active-todo" : ""}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? "checked" : ""} 
                        onclick = "toggleStatus(${t.id})"/>
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update" onclick="updateTodo(${t.id})">
                            <img src="./img/pencil.svg" alt="icon" />
                        </button>
                        <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                            <img src="./img/remove.svg" alt="icon" />
                        </button>
                    </div>
                </div>
        `
        
    }
    //Sau khi có nội dung thì insert lại nội dung cho todoList
    todoList.innerHTML = html
}

//Xóa công việc
function deleteTodo(id){
    //B1:Sử dụng vòng for để tìm kiếm object có id == id truyền vào
    //Tìm thấy thì xóa ra khỏi mảng todos
    // Casch1: Dùng vòng lặp for
    // for (let i = 0; i < todos.length; i++) {
    //     if(id == todos[i].id){
    //         todos.splice(i,1)
    //     }
        
    // }

    //Cách 2: Dùng filter
    todos = todos.filter(todo => todo.id != id)
    //B2:Sau khi xóa xong thì gọi function renderTodo để cập nhật lại giao 
    renderTodo(todos)
}




//Thay đổi trạng thái công việc
function toggleStatus(id){
    //B1: Sử dụng vòng for qua mảng todos đê tìm kiếm object có id == id truyền vào
    //Kiểm tra: nếu trạng thái cv là true --> set lại bằng false
    //Nếu trạng thái cv là false -> set lại = true
    for (let i = 0; i < todos.length; i++) {
        
        let t=todos[i]
        if(id == t.id){
            // Cach 1:
            // if(t.status == true){
            //     t.status=false
            // } else{
            //     t.status = true
            // }
            // Cách 2: Gán phủ định
        todos[i].status = !todos[i].status
        }

    
        
    }

    //B2: Sau khi thay đổi dư liệu xong thì gọi function renderToo để cập nhật lại giao diện
    //Mỗi lần thay đổi data p render lại
    renderTodo(todos)
}


//4. Lọc cv theo trạng thái
optionAll.addEventListener("click", function(){
    //Mặc định hiển thị ra mảng todos
    renderTodo(todos)
})


optionActive.addEventListener("click", function(){
    //B1: Lọc các cv có status = true ra 1 mảng mới
    let newArr = todos.filter(todo => todo.status == true)

    //B2: Render lại giao diện với mảng vừa lọc
    renderTodo(newArr)
})

optionUnactive.addEventListener("click", function(){
    //B1: Lọc các cv có status = false ra 1 mảng mới
    let newArr = todos.filter(todo => todo.status == false)

    //B2: Render lại giao diện với mảng vừa lọc
    renderTodo(newArr)
})

//5. Thêm công việc

btnAdd.addEventListener("click", function(){
    //B1: Lấy ra dữ liệu ô input
    let value = todoInput.value

    //B2: Kiểm tra dữ liệu trống
    //Nếu có thì thông báo --> Alert --> return
    if(value == ""){
        alert("Fill in the blank pls")
        return
    }

    //B3: Tạo object todo mới
    let todoItem = {
        id:randomId(),
        title:value,
        status: false
    }
    todos.push(todoItem)

    //B5: Render lại giao diện
    //Clear dữ liệu trong o input
    todoInput.value = ""
    renderTodo(todos)
})





//Sửa bằng input thêm
// Click --> title xhien trên ô Input
//Thêm btn sửa
//btn thêm ẩn đi
//Lwmsg nghe sự kiện, sửa xong thêm xhien

// todo-input button.hide{
//     display : none  
// }

//6. Sửa
function updateTodo(id){
    
    for (let i = 0; i < todos.length; i++) {
        if(id == todos[i].id){
            todoInput.value = todos[i].title
            btnAdd.classList.add('hide')
            btnUpdate.classList.remove('hide')
            btnUpdate.onclick = function() {updateTodo2()};

            function updateTodo2() {
                if (todos[i].id == id) {
                  //Lấy dữ liệu trong ô input
                  let titleFix = todoInput.value;
        
                  //Kiểm tra 00 input có trống hay k
                  if (titleFix == "") {
                    alert("Bạn chưa nhập tên công việc muốn thay thế");
                    return;
                  }
        
                  //Thay đổi tên công việc
                  todos[i].title = titleFix;
        
                  todoInput.value = "";
                  btnUpdate.classList.add("hide");
                  btnAdd.classList.remove("hide");
                }
                renderTodo(todos)
                console.log(todos)
              }
              

    }

}

}



renderTodo(todos)
