// Exampel 1
// 1. Trắnh đặt biến không chính xác không rõ nghĩa
// Bad
const a = new Date();
const citys = ["Ha noi", "HCM", "Da Nang", "Sai Gon"];
citys.map((a) => {
  // do abcxyz
  console.log(a)
})

// Good
const currentDate = new Date();
citys.map((city) => {
  //do abcxyz 
  console.log(city)
})

// 2. Tên const thì nên được viết hoa.
let number = 0
const increaseNumberAfterCertainTime = (number, time) => {
  console.log(number, time)
}

//Bad 
increaseNumberAfterCertainTime(number, 86400000)

// Good
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; 
increaseNumberAfterCertainTime(number, MILLISECONDS_PER_DAY)


// 3 Tránh lặp lại từ không cần thiết.
// Bad
const Car = {
  carName: "Cherry",
  carBand: "Honda",
  carPrice: "1.000$"
}

const paintCar = (car, color) => {
  car.carColor = color;
}

// Good
const House = {
  address: "Ha noi",
  owner: {
    name: "Mike",
    age: 40,
  },
  price: "3.000.000$", 
}

const paintHouse = (house, color) => {
  house.color = color;
}









