import React, { useState } from "react";
import { Calc } from "./Styling";

const Calculator = () => {
  const [value, setvalue] = useState("");
  const [ans, setanswer] = useState(0);

  const equal = (val) => {
    if (
      val[val.length - 1] === "-" ||
      val[val.length - 1] === "+" ||
      val[val.length - 1] === "*" ||
      val[val.length - 1] === "/"
    ) {
      setanswer(eval(val.slice(0, val.length - 1)));
      setvalue("");
    } else {
      setanswer(eval(val));
      setvalue("");
    }
  };

  const Clear = () => {
    setanswer(0);
    setvalue("");
  };
  return (
    <Calc>
      <main>
        <section>
          <div className="display">
            <div className="inline">
              <div className="value">{value}</div>
              <div className="ans">{ans}</div>
            </div>
          </div>
          <div className="calculator">
            <div className="keys">
              <div className="item1" onClick={() => Clear()}>
                AC
              </div>
              <div
                className="divide"
                onClick={() =>
                  setvalue(
                    value[value.length - 1] !== "-" &&
                      value[value.length - 1] !== "+" &&
                      value[value.length - 1] !== "*" &&
                      value[value.length - 1] !== "/"
                      ? value + "/"
                      : value + ""
                  )
                }
              >
                /
              </div>
              <div
                className="mul"
                onClick={() =>
                  setvalue(
                    value[value.length - 1] !== "-" &&
                      value[value.length - 1] !== "+" &&
                      value[value.length - 1] !== "*" &&
                      value[value.length - 1] !== "/"
                      ? value + "*"
                      : value + ""
                  )
                }
              >
                x
              </div>
              <div className="one" onClick={() => setvalue(value + 7)}>
                7
              </div>
              <div className="two" onClick={() => setvalue(value + 8)}>
                8
              </div>
              <div className="three" onClick={() => setvalue(value + 9)}>
                9
              </div>
              <div
                className="subtract"
                onClick={() =>
                  setvalue(
                    value[value.length - 1] !== "-" &&
                      value[value.length - 1] !== "+" &&
                      value[value.length - 1] !== "*" &&
                      value[value.length - 1] !== "/"
                      ? value + "-"
                      : value + ""
                  )
                }
              >
                -
              </div>
              <div className="four" onClick={() => setvalue(value + 4)}>
                4
              </div>
              <div className="five" onClick={() => setvalue(value + 5)}>
                5
              </div>
              <div className="six" onClick={() => setvalue(value + 6)}>
                6
              </div>
              <div
                className="add"
                onClick={() =>
                  setvalue(
                    value[value.length - 1] !== "-" &&
                      value[value.length - 1] !== "+" &&
                      value[value.length - 1] !== "*" &&
                      value[value.length - 1] !== "/"
                      ? value + "+"
                      : value + ""
                  )
                }
              >
                +
              </div>
              <div className="seven" onClick={() => setvalue(value + 1)}>
                1
              </div>
              <div className="eight" onClick={() => setvalue(value + 2)}>
                2
              </div>
              <div className="nine" onClick={() => setvalue(value + 3)}>
                3
              </div>
              <div className="item2" onClick={() => equal(value)}>
                =
              </div>
              <div className="item3" onClick={() => setvalue(value + 0)}>
                0
              </div>
              <div className="dot" onClick={() => setvalue(value + ".")}>
                .
              </div>
            </div>
          </div>
        </section>
      </main>
    </Calc>
  );
};

export default Calculator;
