// Mỗi hàm nên có 1 logic duy nhất. Nên chia nhỏ function cho dễ quản lý
// Bad
const plusAndMinusNumber = (number) => {
  const numberIncrease = number + 1; 
  const numberDecrease = number -1 
  return numberIncrease + numberDecrease 
}

// Good
const plusNumber = (number) => number++;
const minusNumber = (number) => number--;

const calculateNumber = (number) => {
  return plusNumber(number) + minusNumber(number);
}

// Tránh lặp code.
// Bad
const checkingCompanyDeveloper = (name, type) => {
  if ((name === "a" || name === "b" || name === "c") && (type === "BE" || type === "FE" || type === "MOBILE")){
    return true
  }
  return false
}

const checkingCustomerDeveloper = (name, type) => {
  if ((name === "a" || name === "b" || name === "c") && (type === "BE" || type === "FE" || type === "MOBILE")){
    return true
  }
  return false
}

// Good
const checkingUser = (name, type) => {
  const checkName = name === "a" || name === "b" || name === "c"
  const checkType = type === "BE" || type === "FE" || type === "MOBILE" 

  return checkName && checkType ? true : false
}

// Tên của function nên nói lên logic mà function đó thực hiện
// Bad
const addToDate = (date, month) => {
  // do something
}
const date = new Date();
addToDate(date, 1)


// Good
const addMonthToDate = (date, month) => {
  // add month
}
const date2 = new Date();
addMonthToDate(date2, 1)

// Tránh sử dụng những từ negative cho việc đặt biến boolean
//Bad
const isNotOpen = true;
const hasNotshowImage = true;

//Good
const isOpen = false;
const hasShowImage = false;
