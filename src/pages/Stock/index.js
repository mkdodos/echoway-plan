import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockChart from './components/StockChart';
import TableView from './components/TableView';

export default function index() {
  // 用 useState 存放資料
  const [rows, setRows] = useState([]);

  // const [data1, setData1] = useState([]);
  const [data1, setData1] = useState([]);

  // 總成本
  const [totalCost, setTotalCost] = useState(0);

  // 平均成本
  const [avgCost, setAvgCost] = useState(0);

  const [series, setSeries] = useState([
    {
      name: '成交價',
      data: [38.2, 35.55, 35.2],
    },
    {
      name: '平均成本',
      data: [],
    },
  ]);

  const [categories, setCategories] = useState([]);

  // const series = [
  //   {
  //     name: '成交價',
  //     data: [38.2, 35.55, 35.2],
  //     // data: data1,
  //   },

  // ];

  useEffect(() => {
    const url = 'http://localhost:8888/echoway-plan/src/pdo/stock/read.php';
    axios.get(url).then((res) => {
      console.log(res.data);

      // 數列值和X軸日期
      let tempPrice = [];
      let tempAvgCost = [];
      //
      let tempDate = [];

      // 成交價合計
      let sumPrice = 0;
      res.data.map((obj, i) => {
        tempPrice.push(obj.price * 1);
        sumPrice += obj.price * 1;
        // tempAvgCost.push(obj.avgCost * 1);
        tempDate.push(obj.inDate);
        

        res.data[i].avg = calAvg(res.data, i);

        tempAvgCost.push(res.data[i].avg);

      });

      // res.data[1].avg =
      //   (Number(res.data[0].price) + Number(res.data[1].price)) / 2;
      // res.data[2].avg =
      //   (Number(res.data[0].price) +
      //     Number(res.data[1].price) +
      //     Number(res.data[2].price)) /
      //   3;

      // res.data[0].avg = calAvg(res.data, 0);
      // res.data[1].avg = calAvg(res.data, 1);
      // res.data[2].avg = calAvg(res.data, 2);
      // res.data[3].avg = calAvg(res.data, 3);

      setAvgCost(sumPrice / res.data.length);

      setTotalCost(sumPrice);

      let tempSeries = series.slice();

      // 成交價數列
      tempSeries[0].data = tempPrice;
      // 平均成本數列
      tempSeries[1].data = tempAvgCost;

      setSeries(tempSeries);

      setCategories(tempDate);

      //  將取得的資料存放到 state 變數
      setRows(res.data);
    });

    // 計算平均成本

    // 傳入陣列,傳回平均值

    const calAvg = (arrCost, counts) => {
      // let avg =
      //   (Number(arrCost[0].price) +
      //     Number(arrCost[1].price) +
      //     Number(arrCost[2].price)) /
      //   3;

      let total = 0;
      console.log(arrCost.length)
      for (let i = 0; i < arrCost.length; i++) {
        
        total += arrCost[i].price * 1;
        if (i === counts) { break; }
      }
      console.log(total)

      let avg = 0;
      avg = total / (counts+1);

      return avg;
    };
  }, []);

  return (
    <div>
      <StockChart series={series} categories={categories} />
      <TableView rows={rows} totalCost={totalCost}  />
    </div>
  );
}
