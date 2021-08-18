const buttons = []

for (let i = 0; i < 10; i++) {
  const item = {
    name: `num${i}`,
    value: i,
  }
  buttons.push(item)
}

const plus = {
  name: "plus",
  value: "+",
}

const less = {
  name: "minus",
  value: "-",
}

const mult = {
  name: "mult",
  value: "X",
}

const divs = {
  name: "div",
  value: "/",
}

const equal = {
  name: "total",
  value: "=",
}

const reset = {
  name: "reset",
  value: "C",
}
const dot = {
  name: "dot",
  value: ".",
}

buttons.push(plus, less, mult, divs, equal, reset, dot)

export default buttons
