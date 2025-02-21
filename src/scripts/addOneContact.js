import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



export const addOneContact = async () => { 
    try {
    const contacts = await readContacts();
    const newContacts = createFakeContact();
        const saveContacts = [...contacts, newContacts];
        await writeContacts(saveContacts);
        
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};



addOneContact();
