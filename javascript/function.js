// Mỗi hàm nên có 1 logic duy nhất.
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