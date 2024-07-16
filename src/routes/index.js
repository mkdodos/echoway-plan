import { Routes, Route } from 'react-router-dom';
import Page1 from '../pages/Page1';

import Stock from '../pages/Stock'


export default function index() {
  return (
    <Routes>      
      <Route path="/page1" element={<Page1 />} />
      <Route path="/stock" element={<Stock />} />
    </Routes>
  );
}
