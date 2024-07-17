import React from 'react';
import { Table,TableHeader,TableHeaderCell,TableBody,TableRow,TableCell } from 'semantic-ui-react';

export default function TableView({
  rows,
  totalCost,
  avgCost 
}) {  


  return (
    <div>
      <Table celled unstackable>
        <TableHeader>
          <TableRow>
            {/* <Table.HeaderCell width={2}>id</Table.HeaderCell> */}
            <TableHeaderCell width={2}>日期</TableHeaderCell>
            <TableHeaderCell width={2}>成交價{totalCost}</TableHeaderCell> 
            {/* <Table.HeaderCell width={2}>平均成本{Math.round(avgCost*100)/100}</Table.HeaderCell>  */}
            <TableHeaderCell width={2}>avg</TableHeaderCell> 
            
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.inDate}</TableCell>
                <TableCell>{row.price}</TableCell>
                 
                <TableCell>{Math.round(row.avg*100)/100}</TableCell>                             
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}