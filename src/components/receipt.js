import Atm from "./atm";
import React, { useState, useEffect } from "react";
import "./atm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Input } from "reactstrap";

function Receipt({ moneyArr, moneyAtm }) {
  const [money1, setMoney1] = useState([]);
  // console.log(money1);
  
  function sumMoneyReturn(x) {
    const sumReturn = moneyAtm + x;
    // <Atm sumReturn={sumReturn}/>
  }

  function del(data) {
    sumMoneyReturn(data.moneyResult);

    // const updateMoneyArr = moneyArr.map((mnArr) => {

    //   if (data.find((dt) => dt.moneyResult !== mnArr.moneyResult)) {
    //     return mnArr;
    //   }
    // });
    // setMoney1(updateMoneyArr);

    console.log(data);
  }

  const receipt = moneyArr.map((item, index) => {
    return (
      <td key={index}>
        <div className="box-receipt">
          <div>
            {item.moneyList.map((list, idx) => {
              return (
                <div key={idx}>
                  {list.label} บาท {list.amount} {list.unit}
                </div>
              );
            })}
            รวม {item.moneyResult} บาท
          </div>
          <Button
            className="button-del"
            onClick={() => {
              del(moneyArr[index]);
              // console.log(moneyArr[index]);
            }}
          >
            คืนเงิน
          </Button>
        </div>
      </td>
    );
  });

  return (
    <div>
      <table>
        <tbody>{moneyArr[0] && <tr>{receipt}</tr>}</tbody>
      </table>
    </div>
  );
}

export default Receipt;
