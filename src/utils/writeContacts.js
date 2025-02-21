import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFale(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    } catch (error) {
        console.error(error.message);
    }
};
