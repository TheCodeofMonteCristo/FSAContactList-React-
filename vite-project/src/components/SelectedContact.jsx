// src/components/SelectedContact.jsx

import { useEffect, useState } from "react"; // Import hooks

// Component to display details of the selected contact
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  // State to hold the selected contact's details
  const [contact, setContact] = useState(null);

  // Fetch the selected contact's details when the component mounts
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result); // Update the contact state with fetched data
      } catch (error) {
        console.error("Error fetching contact:", error); // Log any errors
      }
    }
    fetchContact(); // Call the fetch function
  }, [selectedContactId]); // Dependency array to run effect when selectedContactId changes

  if (!contact) return <p>Loading...</p>; // Show loading text while fetching

  return (
    <div>
      <h2>{contact.name}</h2> {/* Display contact name */}
      <p>Email: {contact.email}</p> {/* Display contact email */}
      <p>Phone: {contact.phone}</p> {/* Display contact phone */}
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button> {/* Button to go back to the list */}
    </div>
  );
}
