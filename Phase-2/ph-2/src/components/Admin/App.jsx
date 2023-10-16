import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import ChatPage from './ChatPage';
import AccountPage from './AccountPage';
import CoursePage from './CoursesPage';
import HomePage from './HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/admin" element={<HomePage />} />
        <Route path="/admin/profile" element={<ProfilePage />} />
        <Route path="/admin/chat" element={<ChatPage />} />
        <Route path="/admin/accounts" element={<AccountPage />} />
        <Route path="/admin/course" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
