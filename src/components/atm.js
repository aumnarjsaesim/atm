import React, { useState, useEffect } from "react";
import "./atm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Input } from "reactstrap";
import Receipt from "./receipt";

function Atm() {
  const [moneyArr, setMoneyArr] = useState([
    // {
    //   moneyList: "abc",
    //   moneyResult: "def",
    // },
  ]);

  // const [moneyArr,setMoneyArr] = useState([]);
  const [money, setMoney] = useState([
    {
      id: 1,
      label: 1000,
      amount: 2,
      unit: "ใบ",
    },
    {
      id: 2,
      label: 500,
      amount: 3,
      unit: "ใบ",
    },
    {
      id: 3,
      label: 100,
      amount: 12,
      unit: "ใบ",
    },
    {
      id: 4,
      label: 50,
      amount: 3,
      unit: "ใบ",
    },
    {
      id: 5,
      label: 20,
      amount: 50,
      unit: "ใบ",
    },
    {
      id: 6,
      label: 10,
      amount: 2,
      unit: "เหรียญ",
    },
    {
      id: 7,
      label: 5,
      amount: 30,
      unit: "เหรียญ",
    },
    {
      id: 8,
      label: 2,
      amount: 10,
      unit: "เหรียญ",
    },
    {
      id: 9,
      label: 1,
      amount: 15,
      unit: "เหรียญ",
    },
  ]);
  // console.log(money);

  const [showMoney, setShowMoney] = useState([]);
  const showMoneySum = showMoney.map(({ label, amount }) => {
    const obj = { label, amount };
    const sumArray1 = obj.label * obj.amount;
    return sumArray1;
  });
  // console.log(showMoneySum);
  const showResult = showMoneySum.reduce((sum, number) => {
    return sum + number;
  }, 0);
  // console.log(showResult);

  const [updatedMoney, setUpdatedMoney] = useState([]);

  const moneySum = money.map(({ label, amount }) => {
    const obj = { label, amount };
    const sumArray = obj.label * obj.amount;
    return sumArray;
  });
  // console.log(moneySum);

  // ----------------------เงินในตู้ATM----------------------
  const sumArrayReduce = moneySum.reduce((item, index) => {
    return item + index;
  }, 0);
  console.log("เงินในตู้ ", sumArrayReduce);

  // --------------------เงินที่กรอกเข้ามา--------------------
  const [moneyInput, setMoneyInput] = useState("");
  console.log(`ถอนเงิน ${moneyInput}`);

  // Reset Input Field handler
  function resetInputField() {
    return setMoneyInput("");
  }

  function AllMoney() {
    setMoneyArr((oldArray) => [
      ...oldArray,
      {
        moneyList: showMoney,
        moneyResult: showResult,
      },
    ]);
  }

  // useEffect(() => {
  //   console.log(moneyArr);
  // }, [moneyArr]);

  // const receipt = moneyArr.map((item, index) => {
  //   return (
  //     <td>
  //       <div className="box-atm-2">
  //         <div key={index}>
  //           {item.moneyList.map((list, idx) => {
  //             return (
  //               <div key={idx}>
  //                 {list.label} บาท {list.amount} {list.unit}
  //               </div>
  //             );
  //           })}
  //           รวม {item.moneyResult} บาท
  //           {/* {JSON.stringify(item)} */}
  //         </div>
  //       </div>
  //     </td>
  //   );
  // });

  function result() {
    let output = "";
    if (moneyInput > sumArrayReduce) {
      return alert("กรอกเงินเกิน");
    } else {
      let i = moneyInput;
      let sa = [];
      let update = [];

      while (i > 0) {
        // 1000
        const m1000 = Math.floor(i / 1000);
        if (i >= 1000 && m1000 > money[0].amount) {
          i = (i % 1000) + 1000 * m1000 - 1000 * money[0].amount;
          const m1000_result = money[0].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m1000_result > 0) {
            sa.push({ label: 1000, amount: m1000_result, unit: "ใบ" });
            update.push({ id: 1, label: 1000, amount: 0, unit: "ใบ" });
            output += `<h6>1000 บาท ${m1000_result} ใบ</h6>`;
          }
        } else {
          i = i % 1000;
          const m1000_result = m1000;
          const m1000_left = money[0].amount - m1000_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m1000_result > 0) {
            sa.push({ label: 1000, amount: m1000_result, unit: "ใบ" });
            update.push({ id: 1, label: 1000, amount: m1000_left, unit: "ใบ" });
            output += `<h6>1000 บาท ${m1000_result} ใบ</h6>`;
          }
        }

        // 500
        const m500 = Math.floor(i / 500);
        if (i >= 500 && m500 > money[1].amount) {
          i = (i % 500) + 500 * m500 - 500 * money[1].amount;
          const m500_result = money[1].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m500_result > 0) {
            sa.push({ label: 500, amount: m500_result, unit: "ใบ" });
            update.push({ id: 2, label: 500, amount: 0, unit: "ใบ" });
            output += `<h6>500 บาท ${m500_result} ใบ</h6>`;
          }
        } else {
          i = i % 500;
          const m500_result = m500;
          const m500_left = money[1].amount - m500_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m500_result > 0) {
            sa.push({ label: 500, amount: m500_result, unit: "ใบ" });
            update.push({ id: 2, label: 500, amount: m500_left, unit: "ใบ" });
            output += `<h6>500 บาท ${m500_result} ใบ</h6>`;
          }
        }

        // 100
        const m100 = Math.floor(i / 100);
        if (i >= 100 && m100 > money[2].amount) {
          i = (i % 100) + 100 * m100 - 100 * money[2].amount;
          const m100_result = money[2].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m100_result > 0) {
            sa.push({ label: 100, amount: m100_result, unit: "ใบ" });
            update.push({ id: 3, label: 100, amount: 0, unit: "ใบ" });
            output += `<h6>100 บาท ${m100_result} ใบ</h6>`;
          }
        } else {
          i = i % 100;
          const m100_result = m100;
          const m100_left = money[2].amount - m100_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m100_result > 0) {
            sa.push({ label: 100, amount: m100_result, unit: "ใบ" });
            update.push({ id: 3, label: 100, amount: m100_left, unit: "ใบ" });
            output += `<h6>100 บาท ${m100_result} ใบ</h6>`;
          }
        }

        // 50
        const m50 = Math.floor(i / 50);
        if (i >= 50 && m50 > money[3].amount) {
          i = (i % 50) + 50 * m50 - 50 * money[3].amount;
          const m50_result = money[3].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m50_result > 0) {
            sa.push({ label: 50, amount: m50_result, unit: "ใบ" });
            update.push({ id: 4, label: 50, amount: 0, unit: "ใบ" });
            output += `<h6>50 บาท ${m50_result} ใบ</h6>`;
          }
        } else {
          i = i % 50;
          const m50_result = m50;
          const m50_left = money[3].amount - m50_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m50_result > 0) {
            sa.push({ label: 50, amount: m50_result, unit: "ใบ" });
            update.push({ id: 4, label: 50, amount: m50_left, unit: "ใบ" });
            output += `<h6>50 บาท ${m50_result} ใบ</h6>`;
          }
        }

        // 20
        const m20 = Math.floor(i / 20);
        if (i >= 20 && m20 > money[4].amount) {
          i = (i % 20) + 20 * m20 - 20 * money[4].amount;
          const m20_result = money[4].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m20_result > 0) {
            sa.push({ label: 20, amount: m20_result, unit: "ใบ" });
            update.push({ id: 5, label: 20, amount: 0, unit: "ใบ" });
            output += `<h6>20 บาท ${m20_result} ใบ</h6>`;
          }
        } else {
          i = i % 20;
          const m20_result = m20;
          const m20_left = money[4].amount - m20_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m20_result > 0) {
            sa.push({ label: 20, amount: m20_result, unit: "ใบ" });
            update.push({ id: 5, label: 20, amount: m20_left, unit: "ใบ" });
            output += `<h6>20 บาท ${m20_result} ใบ</h6>`;
          }
        }

        // 10
        const m10 = Math.floor(i / 10);
        if (i >= 10 && m10 > money[5].amount) {
          i = (i % 10) + 10 * m10 - 10 * money[5].amount;
          const m10_result = money[5].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m10_result > 0) {
            sa.push({ label: 10, amount: m10_result, unit: "เหรียญ" });
            update.push({ id: 6, label: 10, amount: 0, unit: "เหรียญ" });
            output += `<h6>10 บาท ${m10_result} เหรียญ</h6>`;
          }
        } else {
          i = i % 10;
          const m10_result = m10;
          const m10_left = money[5].amount - m10_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m10_result > 0) {
            sa.push({ label: 10, amount: m10_result, unit: "เหรียญ" });
            update.push({ id: 6, label: 10, amount: m10_left, unit: "เหรียญ" });
            output += `<h6>10 บาท ${m10_result} เหรียญ</h6>`;
          }
        }

        // 5
        const m5 = Math.floor(i / 5);
        if (i >= 5 && m5 > money[6].amount) {
          i = (i % 5) + 5 * m5 - 5 * money[6].amount;
          const m5_result = money[6].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m5_result > 0) {
            sa.push({ label: 5, amount: m5_result, unit: "เหรียญ" });
            update.push({ id: 7, label: 5, amount: 0, unit: "เหรียญ" });
            output += `<h6>5 บาท ${m5_result} เหรียญ</h6>`;
          }
        } else {
          i = i % 5;
          const m5_result = m5;
          const m5_left = money[6].amount - m5_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m5_result > 0) {
            sa.push({ label: 5, amount: m5_result, unit: "เหรียญ" });
            update.push({ id: 7, label: 5, amount: m5_left, unit: "เหรียญ" });
            output += `<h6>5 บาท ${m5_result} เหรียญ</h6>`;
          }
        }

        // 2
        const m2 = Math.floor(i / 2);
        if (i >= 2 && m2 > money[7].amount) {
          i = (i % 2) + 2 * m2 - 2 * money[7].amount;
          const m2_result = money[7].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m2_result > 0) {
            sa.push({ label: 2, amount: m2_result, unit: "เหรียญ" });
            update.push({ id: 8, label: 2, amount: 0, unit: "เหรียญ" });
            output += `<h6>2 บาท ${m2_result} เหรียญ</h6>`;
          }
        } else {
          i = i % 2;
          const m2_result = m2;
          const m2_left = money[7].amount - m2_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m2_result > 0) {
            sa.push({ label: 2, amount: m2_result, unit: "เหรียญ" });
            update.push({ id: 8, label: 2, amount: m2_left, unit: "เหรียญ" });
            output += `<h6>2 บาท ${m2_result} เหรียญ</h6>`;
          }
        }

        // 1
        const m1 = Math.floor(i / 1);
        if (i >= 1 && m1 > money[8].amount) {
          i = (i % 1) + 1 * m1 - 1 * money[8].amount;
          const m1_result = money[8].amount;
          // setMoney({
          //   amount: 0,
          // });
          if (m1_result > 0) {
            sa.push({ label: 1, amount: m1_result, unit: "เหรียญ" });
            update.push({ id: 9, label: 1, amount: 0, unit: "เหรียญ" });
            output += `<h6>1 บาท ${m1_result} เหรียญ</h6>`;
          }
        } else {
          i = i % 1;
          const m1_result = m1;
          const m1_left = money[8].amount - m1_result;
          // setMoney({
          //   amount: money[0].amount - m1000_result,
          // });
          if (m1_result > 0) {
            sa.push({ label: 1, amount: m1_result, unit: "เหรียญ" });
            update.push({ id: 9, label: 1, amount: m1_left, unit: "เหรียญ" });
            output += `<h6>1 บาท ${m1_result} เหรียญ</h6>`;
          }
        }
        // แบงค์อะไรบ้าง
        // console.log(sa);
        // เหลือแต่ละแบงค์เท่าไหร่
        // console.log(update);
        setUpdatedMoney([...update]);
        setShowMoney([...sa]);

        setMoneyArr((oldArray) => [
          ...oldArray,
          {
            moneyList: sa,
            moneyResult: moneyInput,
          },
        ]);

        // console.log(showMoney);
        // console.log(updatedMoney);
        const unUpdate = money.map((x) => {
          const result = update.find((e) => e.id === x.id);
          if (result) {
            const a = {
              id: result.id,
              label: result.label,
              amount: result.amount,
              unit: result.unit,
            };
            return a;
          } else {
            return x;
          }
        });
        // console.log(unUpdate);
        setMoney(unUpdate);
        // console.log(money);

        // setMoney([...money, ...update]);
        // console.log(money);

        // console.log(showMoney[0].label);
        return unUpdate;
      }
    }
  }

  return (
    <div>
      <Row>
        <Col xs="4"></Col>
        <Col xs="4">
          <div className="box-atm">
            {money.map((i, index) => {
              return (
                <div key={index}>
                  <h5>
                    {i.label} บาท {i.amount} {i.unit}
                  </h5>
                </div>
              );
            })}
            เงินในตู้ {sumArrayReduce} บาท
            <Row>
              <Col xs="9">
                <Input
                  type="text"
                  value={moneyInput}
                  onChange={(event) => setMoneyInput(event.target.value)}
                />
              </Col>
              <Col xs="3">
                <Button
                  color="primary"
                  onClick={() => {
                    result();
                    resetInputField();
                    // AllMoney();

                    // console.log(moneyArr);
                  }}
                >
                  Result
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Receipt
            moneyArr={moneyArr}
            money={result}
            moneyAtm={sumArrayReduce}
          />
          {/* <table>
            <tr>{moneyArr[0] && <div>{receipt}</div>}</tr>
          </table> */}
        </Col>
      </Row>
    </div>
  );
}

export default Atm;
