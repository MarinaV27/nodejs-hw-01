import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



const generateContacts = async (number) => { 
    try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
        const saveContacts = ([...contacts, ...newContacts]);
        await writeContacts(saveContacts);
        
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};




generateContacts(5);
