import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => { 
    const contactsLength = await readContacts();
    return contactsLength.length;
};

console.log(await countContacts());
