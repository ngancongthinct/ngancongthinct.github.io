//
async function getBreedsList() {
  //B1: gọi api: https://dog.ceo/api/breeds/list/all
  //Nếu thành công -> trả về danh sách các loài chó
  try {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");

    // console.log(res.data.message)
    let breedsList = Object.keys(res.data.message);
    // console.log(res.data.message)
    //B2: Sử dụng vòng lặp để render vào thẻ select
    breedsList.forEach((element) => {
      const breedsOption = document.createElement("option");
      breedsOption.value = element;
      breedsOption.innerText = `${element}`;
      document
        .querySelector("select")
        .insertAdjacentElement("beforeend", breedsOption);
    });
  } catch (err) {
    console.log(err);
  }
}

getBreedsList();

// getSubBreeds()

//Lấy ra nội dung trong ô select
//select.value

let btn = document.querySelector(".btn");
let imgClass = document.querySelector(".image") 
let imageEl = document.querySelector(".image img");
let subBreedsEl = document.querySelector(".subBreedsList");
btn.addEventListener("click", async function () {
  try {
    let value = document.querySelector("#list").value;
    let res = await axios.get(`https://dog.ceo/api/breed/${value}/list`);
    let subBreedsList = res.data.message;
    // console.log(subBreedsList)
    // Clear content 
    subBreedsEl.innerHTML=""
    //Nếu không có sub breed
    if (subBreedsList.length == 0) {
        //Kiểm tra và ẩn khung ảnh
        if(imgClass.classList.contains("hide") == false){
            imgClass.classList.add("hide")
        }

        //Hiển thị Không có ub breed
      subBreedsEl.insertAdjacentHTML(
        "afterbegin",
        "<li>Không có sub breed</li>"
      );
    } else { //Nếu có
        //Duyệt mngr sub breed
      subBreedsList.forEach(
        (element) => {
            //Tạo thẻ li
            const newLi = document.createElement("li")
            //Có nội dung là thẻ a
            newLi.innerHTML=`<a href="#">${element}</a>`
            //Khi click vào link
            newLi.addEventListener("click",async function(e){
                e.preventDefault();
                //Lấy random ảnh
                try{
                    let value = document.querySelector("#list").value
                    let res = await axios.get(`https://dog.ceo/api/breed/${value}/${element}/images/random`)
                    console.log(res.data)
            
                    //Hiển thị ảnh
                    imageEl.src = res.data.message
                } catch(err){
                    console.log(err);
                }
                
                //Kiểm tra và thực hiện hiện khung ảnh
                if(imgClass.classList.contains("hide") == true){
                    imgClass.classList.remove("hide")
                }
            })
        //Insert link
          subBreedsEl.insertAdjacentElement("beforeend",newLi)
        }
        
      );

    }

  } catch (err) {
    console.log(err);
  }
});





