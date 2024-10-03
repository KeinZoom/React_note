import { NavBar, DatePicker } from "antd-mobile";
import "./index.scss";
import { useMemo, useState, useEffect } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";

function Month() {
  const [dateVisible, setDateVisible] = useState(false);
  const [currentMonthList, setCurrentMonthList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(() => {
    return dayjs().format("YYYY-MM");
  });

  // 按月分组
  const billList = useSelector((state) => state.bill.billList);

  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY-MM"));
  }, [billList]);

  const dateConfirm = (date) => {
    setDateVisible(false);
    const monthKey = dayjs(date).format("YYYY-MM");
    setCurrentMonth(monthKey);
    setCurrentMonthList(monthGroup[monthKey]);
  };

  const overview = useMemo(() => {
    if (!currentMonthList) return { income: 0, pay: 0, total: 0 };
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.amount, 0);

    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.amount, 0);

    return {
      income,
      pay,
      total: income - pay,
    };
  }, [currentMonthList]);

  useEffect(() => {
    const list = monthGroup[dayjs().format("YYYY-MM")];
    if (list) {
      setCurrentMonthList(list);
    }
  }, [monthGroup]);

  return (
    <div className="monthlyBill">
      <NavBar className="nav">月度收支</NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentMonth}账单</span>
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{overview.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{overview.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{overview.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          <DatePicker
            className="datepick"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={new Date()}
            onConfirm={dateConfirm}
            onCancel={() => setDateVisible(false)}
            onClose={() => setDateVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Month;
