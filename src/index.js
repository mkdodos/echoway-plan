import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar';

import { BrowserRouter } from 'react-router-dom';
import DefaultRoutes from './routes/index';

import { Container } from 'semantic-ui-react';

// root 對應 index.html 的 div id="root"
const container = document.getElementById('root');
// 在 root div 建立 react dom
const root = ReactDOM.createRoot(container);
// render 內放置 html 內容
root.render(
  <BrowserRouter>
    <Container>
      <Navbar />
      <DefaultRoutes />
    </Container>
  </BrowserRouter>
);
