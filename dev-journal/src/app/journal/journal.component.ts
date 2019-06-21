import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { JournalEntry } from '../journal-entry';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  journal: JournalEntry[];
  users: User[];

  constructor(
    private journalService: JournalService, 
    private userService: UserService) { }

  ngOnInit() {
    this.journalService.getJournal()
      .subscribe(journal => this.journal = journal);

    this.userService.getUsers()
      .subscribe(users => { this.users = users });
  }

  add(title: string, text: string): void {
    title = title.trim();
    text = text.trim();
    if (!title && !text) { return; }
    let creationDate = new Date();
    let user = this.users[0];
    this.journalService.addJournalEntry({ title, text, user, creationDate} as JournalEntry)
      .subscribe(journalEntry => {
        this.journal.push(journalEntry);
      });
  }
}