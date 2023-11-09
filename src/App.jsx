import './App.css'
import { AddMonitor, EditMonitor, MonitorDetail,MonitorList } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
   <div className="container">
    <h1>React.js CRUD Operation</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MonitorList/>}></Route>
        <Route path="/monitor/create" element={<AddMonitor/>}></Route>
        <Route path="/monitor/edit/:id" element={<EditMonitor/>}></Route>
        <Route path="/monitor/detail/:id" element={<MonitorDetail/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App
