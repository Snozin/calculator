const calculate = (num1, num2, operation) => {
  console.log("calcular:", num1, operation, num2)
  const n1 = parseFloat(num1)
  const n2 = parseFloat(num2)
  let res

  switch (operation) {
    case "+":
      res = n1 + n2
      break

    case "-":
      res = n1 - n2
      break

    case "X":
      res = n1 * n2
      break

    case "/":
      res = n1 / n2
      break

    default:
      res = "Waiting Operations"
      console.log("Valor no contemplado")
  }

  return res.toString()
}

export default calculate
