import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
        return JSON.parse(contacts);
    } catch (error) {
        console.error(error.message);
        return [];
    };
};
