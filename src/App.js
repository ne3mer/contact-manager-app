import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AddContact,
  EditContact,
  Contact,
  Contacts,
  Navbar,
} from "./components";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts" />} />
        <Route
          path="/Contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
        <Route path="/contacts/:contactId" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
