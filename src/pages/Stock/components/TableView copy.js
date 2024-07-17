import React from 'react';
import { Table } from 'semantic-ui-react';

export default function TableView({
  rows,
  totalCost,
  avgCost 
}) {  


  return (
    <div>
      <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            {/* <Table.HeaderCell width={2}>id</Table.HeaderCell> */}
            <Table.HeaderCell width={2}>日期</Table.HeaderCell>
            <Table.HeaderCell width={2}>成交價{totalCost}</Table.HeaderCell> 
            {/* <Table.HeaderCell width={2}>平均成本{Math.round(avgCost*100)/100}</Table.HeaderCell>  */}
            <Table.HeaderCell width={2}>avg</Table.HeaderCell> 
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell>{row.inDate}</Table.Cell>
                <Table.Cell>{row.price}</Table.Cell>
                {/* <Table.Cell>{row.avgCost}</Table.Cell>       */}
                <Table.Cell>{Math.round(row.avg*100)/100}</Table.Cell>                             
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}