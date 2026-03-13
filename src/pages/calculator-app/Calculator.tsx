import { useState } from "react";
import AppHeading from "../../components/common/AppHeading";
import { motion } from "framer-motion";

const CalculatorApp = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClear = () => setInputValue("");
  const handleDisplay = (value: string) =>
    setInputValue((prev) => prev + value);
  const handleCalculate = () => {
    try {
      const sanitized = inputValue.replace(/[^-+/*%().0-9]/g, "");
      if (!sanitized) {
        setInputValue("0");
        return;
      }
      const result = evaluateExpression(sanitized);
      setInputValue(Number.isFinite(result) ? String(result) : "Error");
    } catch (err) {
      setInputValue("Error");
    }
  };

  const btnClass =
    "w-full aspect-square flex items-center justify-center rounded-3xl text-xl font-black transition-all duration-200 shadow-sm border border-dark/5";
  const numBtn = `${btnClass} bg-white text-dark hover:bg-dark hover:text-white`;
  const opBtn = `${btnClass} bg-dark/5 text-dark hover:bg-dark hover:text-white`;

  return (
    <div className="max-w-md mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={4} title="Precision Compute" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 bg-white/70 backdrop-blur-xl border border-dark/5 p-8 rounded-[3rem] shadow-2xl shadow-dark/10"
      >
        <div className="relative mb-8 bg-dark p-8 rounded-[2rem] shadow-inner overflow-hidden min-h-[140px] flex flex-col justify-end items-end">
          <div className="absolute top-4 left-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
              Result
            </span>
          </div>
          <motion.div
            key={inputValue}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-5xl font-black tracking-tighter truncate w-full text-right"
          >
            {inputValue || "0"}
          </motion.div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <button
            className={`${btnClass} bg-red-50 text-red-500 hover:bg-red-500 hover:text-white`}
            onClick={handleClear}
          >
            C
          </button>
          <button className={opBtn} onClick={() => handleDisplay("(")}>
            (
          </button>
          <button className={opBtn} onClick={() => handleDisplay(")")}>
            )
          </button>
          <button className={opBtn} onClick={() => handleDisplay("/")}>
            /
          </button>

          {[7, 8, 9].map((n) => (
            <button
              key={n}
              className={numBtn}
              onClick={() => handleDisplay(String(n))}
            >
              {n}
            </button>
          ))}
          <button className={opBtn} onClick={() => handleDisplay("*")}>
            *
          </button>

          {[4, 5, 6].map((n) => (
            <button
              key={n}
              className={numBtn}
              onClick={() => handleDisplay(String(n))}
            >
              {n}
            </button>
          ))}
          <button className={opBtn} onClick={() => handleDisplay("-")}>
            -
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={numBtn}
              onClick={() => handleDisplay(String(n))}
            >
              {n}
            </button>
          ))}
          <button className={opBtn} onClick={() => handleDisplay("+")}>
            +
          </button>

          <button className={numBtn} onClick={() => handleDisplay("0")}>
            0
          </button>
          <button className={numBtn} onClick={() => handleDisplay(".")}>
            .
          </button>
          <button
            className={`${btnClass} col-span-2 bg-dark text-white hover:bg-primary shadow-xl shadow-dark/20`}
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CalculatorApp;

type Operator = "+" | "-" | "*" | "/" | "%";

const precedence: Record<Operator, number> = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "%": 2,
};

const isOperator = (token: string): token is Operator =>
  token === "+" || token === "-" || token === "*" || token === "/" || token === "%";

const evaluateExpression = (expression: string) => {
  const output: (number | Operator)[] = [];
  const operators: (Operator | "(")[] = [];

  const pushNumber = (value: string) => {
    if (value === "" || value === ".") throw new Error("Invalid number");
    output.push(Number(value));
  };

  let index = 0;
  while (index < expression.length) {
    const char = expression[index];

    if (char === " ") {
      index += 1;
      continue;
    }

    const isUnaryMinus =
      char === "-" &&
      (index === 0 || expression[index - 1] === "(" || isOperator(expression[index - 1]));

    if (isUnaryMinus || (char >= "0" && char <= "9") || char === ".") {
      let num = "";
      if (isUnaryMinus) {
        num += "-";
        index += 1;
      }
      while (index < expression.length) {
        const nextChar = expression[index];
        if ((nextChar >= "0" && nextChar <= "9") || nextChar === ".") {
          num += nextChar;
          index += 1;
        } else {
          break;
        }
      }
      pushNumber(num);
      continue;
    }

    if (char === "(") {
      operators.push("(");
      index += 1;
      continue;
    }

    if (char === ")") {
      while (operators.length > 0 && operators[operators.length - 1] !== "(") {
        output.push(operators.pop() as Operator);
      }
      if (operators.pop() !== "(") throw new Error("Mismatched parentheses");
      index += 1;
      continue;
    }

    if (isOperator(char)) {
      while (
        operators.length > 0 &&
        operators[operators.length - 1] !== "(" &&
        precedence[operators[operators.length - 1] as Operator] >= precedence[char]
      ) {
        output.push(operators.pop() as Operator);
      }
      operators.push(char);
      index += 1;
      continue;
    }

    throw new Error("Invalid token");
  }

  while (operators.length > 0) {
    const op = operators.pop();
    if (op === "(") throw new Error("Mismatched parentheses");
    output.push(op as Operator);
  }

  const stack: number[] = [];
  for (const token of output) {
    if (typeof token === "number") {
      stack.push(token);
      continue;
    }

    const right = stack.pop();
    const left = stack.pop();
    if (left === undefined || right === undefined) throw new Error("Invalid expression");

    switch (token) {
      case "+":
        stack.push(left + right);
        break;
      case "-":
        stack.push(left - right);
        break;
      case "*":
        stack.push(left * right);
        break;
      case "/":
        stack.push(left / right);
        break;
      case "%":
        stack.push(left % right);
        break;
      default:
        throw new Error("Invalid operator");
    }
  }

  if (stack.length !== 1) throw new Error("Invalid expression");
  return stack[0];
};
