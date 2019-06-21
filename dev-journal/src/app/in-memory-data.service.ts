import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { JournalEntry } from './journal-entry';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 1, name: 'Ann' },
      { id: 2, name: 'Jorge' },
      { id: 3, name: 'Maria' },
      { id: 4, name: 'Clara' },
      { id: 5, name: 'Julia' },
      { id: 6, name: 'Alex' },
    ];
    const journal = [
      { id: 1, 
        title: 'Angular template showing twice', 
        text: 'Remove the AppModule from the router - it doesn\'s need to be called there because it is already the root module.',
        user: users[5],
        creationDate: new Date('2018-12-17T03:24:00')
      },
      { id: 2, 
        title: 'Error when converting a set to a class - neither types overlap with each other', 
        text: 'The variable name has to match the property name.', 
        user: users[2], 
        creationDate: new Date('2019-01-18T03:24:00') },
      { id: 3, title: 'Good website to test regex expressions', text: 'https://regex101.com/', user: users[2], creationDate: new Date('2018-12-17T03:24:00') },
      { id: 4, title: 'Android scroll problems', text: 'Check if ScrollView height is match_parent and child view height is wrap_content.', user: users[4], creationDate: new Date('2018-12-17T03:24:00') },
      { id: 5, title: 'Good book about algorithms', text: 'The Algorithm Design Manual - Skienna', user: users[1], creationDate: new Date('2018-12-17T03:24:00') },
    ];
    return {journal, users};
  }

  // Overrides the genId method to ensure that a the entity always has an id.
  // If the entity array is empty,
  // the method below returns the initial number (1).
  // if the entity array is not empty, the method below returns the highest
  // entity id + 1.
  genId(journal: JournalEntry[]): number {
    return journal.length > 0 ? Math.max(...journal.map(journalEntry => journalEntry.id)) + 1 : 1;
  }
}
