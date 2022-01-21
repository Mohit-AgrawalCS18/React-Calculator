import styled from "styled-components";
export const Calc = styled.div`
  main {
    display: grid;
    justify-content: center;
  }
  .calculator {
    width: 18.1rem;
    border-radius: 0px 0px 10px 10px;
    background-color: #000000;
    box-shadow: 3px 3px 10px #737373;
    .keys {
      display: grid;
      grid-template-columns: auto auto auto auto;
      padding: 5px 2px 4px 2px;
      div {
        border: 1px solid black;
        padding: 15px 5px 15px 5px;
        box-shadow: 1px 1px 1px #616161;
        cursor: pointer;
        border-radius: 10px;
        margin: 7px;
      }
      .item1,
      .item3 {
        grid-column: 1/3;
      }
      .item1 {
        background-color: #999999;
        border: none;
        font-weight: bolder;
        font-size: 18px;
      }
      .item2 {
        grid-column: 4;
        grid-row: 15/4;
        padding-top: 3rem;
      }
      .dot {
        font-weight: bolder;
      }
      .add,
      .mul,
      .divide,
      .subtract,
      .item2 {
        background: #1a5dc9;
        border: none;
        font-size: 18px;
        font-family: sans-serif;
        font-weight: bolder;
        color: white;
      }
      .one,
      .two,
      .three,
      .four,
      .five,
      .dot,
      .item3,
      .six,
      .seven,
      .eight,
      .nine {
        background-color: #1f1f1f;
        color: #529dff;
        border: none;
        font-size: 18px;
        font-family: sans-serif;
        font-weight: bolder;
      }
    }
  }
  .display {
    width: 16.7rem;
    height: 6rem;
    padding: 20px 12.5px 20px 10px;
    box-shadow: 3px 3px 10px #737373;
    border-radius: 10px 10px 0px 0px;
    background-color: #111111;
    font-size: 22px;
    font-weight: bold;
    color: white;
    .inline {
      padding: 4rem 0rem 0rem 0rem;
    }
    .value {
      text-align: right;
      /*margin-right:-1rem;*/
    }
    .ans {
      text-align: right;
      /*float: right;*/
    }
  }
`;
