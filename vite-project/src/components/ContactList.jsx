// src/components/ContactList.jsx

import { useEffect, useState } from "react"; // Import hooks
import ContactRow from "./ContactRow"; // Import the ContactRow component

// Component to display the list of contacts
export default function ContactList({ setSelectedContactId }) {
  // State to hold the contacts fetched from the API
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API when the component mounts
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        const result = await response.json();
        setContacts(result); // Update the contacts state
      } catch (error) {
        console.error("Error fetching contacts:", error); // Log any errors
      }
    }
    fetchContacts(); // Call the fetch function
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {/* Map over the contacts to create a ContactRow for each */}
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
        ))}
      </tbody>
    </table>
  );
}
