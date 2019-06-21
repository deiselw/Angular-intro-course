import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JournalEntry } from './journal-entry';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private journalUrl = 'api/journal';

  constructor(private http: HttpClient) { }

  getJournal(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(this.journalUrl);
  }

  addJournalEntry(journalEntry: JournalEntry): Observable<JournalEntry> {
    return this.http.post<JournalEntry>(this.journalUrl, journalEntry, httpOptions);
  }
}
