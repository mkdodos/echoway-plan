import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default function TableView() {
  // 用 useState 存放資料
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:8888/echoway-plan/src/pdo/read.php';
    axios.get(url).then((res) => {
      //  將取得的資料存放到 state 變數
      setRows(res.data);
    });
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>表格標題</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* 用迴圈顯示資料 */}
          {rows.map((row) => {
            return (
              <Table.Row>
                <Table.Cell>{row.dateField}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>表格底</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
