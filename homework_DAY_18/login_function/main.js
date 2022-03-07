const users = [
  {
    username: "bob",
    password: "123",
  },
  {
    username: "alice",
    password: "456",
  },
  {
    username: "Taeyong",
    password: "0107",
  },
  {
    username: "Doyoung",
    password: "0102",
  },
  {
    username: "Jaehyun",
    password: "1402",
  },
];

const un = document.getElementById("username");
const pw = document.querySelector("#password");
const btn = document.getElementById("btn-login");

const login = () => {
    let account = false;
  if (un.value == "" && pw.value == "") {
    alert("fill un & pw");
  } else if (un.value == "" && pw.value != "") {
    alert("fill username");
  } else if (pw.value == "" && un.value != "") {
    alert("fill pw");
  }else{
      for (let i = 0; i < users.length; i++) {
          if(un.value == users[i].username && pw.value == users[i].password){
              account = true;
              break;
          }
      };
      if(account == true){
          alert("Dang nhap thanh cong")
      } else{
          alert("Tai khoan hoac mat khau khong chinh xac")
      }
 }
// return account;
};

btn.onclick = login;

// console.log(un.value);
