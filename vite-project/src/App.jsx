// src/App.jsx

import "./App.css"; // Import styles for the app
import { useState } from "react"; // Import useState hook
import ContactList from "./components/ContactList"; // Import ContactList component
import SelectedContact from "./components/SelectedContact"; // Import SelectedContact component

export default function App() {
  // State variable to track the selected contact ID
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {/* Conditional rendering based on selectedContactId */}
      {selectedContactId ? (
        // Render SelectedContact component if a contact is selected
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        // Render ContactList component if no contact is selected
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
