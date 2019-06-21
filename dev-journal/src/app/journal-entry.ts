import { User } from './user';

export class JournalEntry {
    id: number;
    title: string;
    text: string;
    user: User;
    creationDate: Date;
}
