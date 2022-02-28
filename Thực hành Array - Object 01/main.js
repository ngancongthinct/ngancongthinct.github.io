// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 3000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

const showInfoProduct = (products) => {
  products.forEach((product) => {
    console.log(
      `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
    );
  });
};
// showInfoProduct(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

const calPrice = (products) => {
  let price = 0;
  products.forEach((product) => {
      price += product.price * product.count;
  })
  return price;
};

// console.log(calPrice(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

const findProductsApple = (products) => {
  return products.filter((product) => product.brand == "Apple");
};

// console.log(findProductsApple(products))

// 4. Tìm các sản phẩm có giá > 20000000

const findProductsPriceGreater = (products) => {
    return products.filter((product) => product.price > 20000000);
  };
// console.log(findProductsPriceGreater(products))

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

const findProductsPro = (products) => {
    return products.filter((product) => product.name.toLowerCase().includes("pro"));
  };

// console.log(findProductsPro(products))

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

const addProduct = ( arr, pro_name, pro_price, pro_brand, pro_count) => {
    let product = {}
    product.name = pro_name;
    product.price = pro_price;
    product.brand = pro_brand;
    product.count = pro_count;
    arr.push(product);
    return arr;
}

// console.log(addProduct(products, "realme 5i", 3500000, "Realme", 2))

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

const deleteProduct = (products) => {
  for (let i = 0; i < products.length; i++) {
    if(products[i].brand == "Samsung"){
      products.splice(i,1)
    }
  }
  return products;
}

// console.log(deleteProduct(products))

// 8. Sắp xếp giỏ hàng theo price tăng dần

const sortingPrice = (products) => {
  for (let i = 0; i < products.length-1; i++) {
    for (let j = i+1; j < products.length; j++) {
      if(products[i].price > products[j].price){
        [products[i], products[j]] = [products[j],products[i]]
      }
      
    }
  }
  return products
}

// console.log(sortingPrice(products))

// 9. Sắp xếp giỏ hàng theo count giảm dần

const sortingCount = (products) => {
  for (let i = 0; i < products.length-1; i++) {
    for (let j = i+1; j < products.length; j++) {
      if(products[i].count < products[j].count){
        [products[i], products[j]] = [products[j],products[i]]
      }
      
    }
  }
  return products
}

console.log(sortingCount(products))

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

function randomElement(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

const random2Products = (products) => {
  let arr = []
  for (let i = 0; i < 2; i++) {
    arr.push(randomElement(products));
  }
  return arr;
}

console.log(random2Products(products))