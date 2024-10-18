// src/components/ContactRow.jsx

// Component to display a single contact row
export default function ContactRow({ contact, setSelectedContactId }) {
    return (
      <tr
        onClick={() => setSelectedContactId(contact.id)} // Set the selected contact ID on click
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  