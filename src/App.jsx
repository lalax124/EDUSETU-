import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import AssignmentsDashboard from './components/AssignmentsDashboard.jsx';
import MyCoursesDashboard from './components/MyCoursesDashboard.jsx';
import ChatDashboard from './components/ChatDashboard.jsx';
import ChemistryDashboard from './components/ChemistryDashboard.jsx';
import UploadContent from './components/UploadContent.jsx';
import Dashboard from './components/Dashboard.jsx';
import FrontPage from './components/FrontPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AssignmentsDashboard" element={<AssignmentsDashboard />} />
        <Route path="/MyCoursesDashboard" element={<MyCoursesDashboard />} />
        <Route path="/ChatDashboard" element={<ChatDashboard />} />
        <Route path="/ChemistryDashboard" element={<ChemistryDashboard />} />
        <Route path="/UploadContent" element={<UploadContent />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
