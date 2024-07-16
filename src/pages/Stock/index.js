import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockChart from './components/StockChart';
import TableView from './components/TableView';

export default function index() {
  // 用 useState 存放資料
  const [rows, setRows] = useState([]);

  // const [data1, setData1] = useState([]);
  const [data1, setData1] = useState([]);


  const [series, setSeries] = useState([{
    name: '成交價',
      data: [38.2, 35.55, 35.2],
  }]);


  const [categories,setCategories] = useState([]);


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
      let temp = [];
      let tempDate = [];
      res.data.map((obj) => {
        temp.push(obj.price*1);
        tempDate.push(obj.inDate);
      });      

      let tempSeries = series.slice();

      tempSeries[0].data=temp;

      setSeries(tempSeries);

      setCategories(tempDate);

      // setSeries

     

      //   {
      //     "id": "1",
      //     "inDate": "2024-07-01",
      //     "price": "35"
      // }

      //  將取得的資料存放到 state 變數
      setRows(res.data);
    });
  }, []);

  return (
    <div>
      <StockChart series={series} categories={categories} />
      <TableView rows={rows} />
    </div>
  );
}
