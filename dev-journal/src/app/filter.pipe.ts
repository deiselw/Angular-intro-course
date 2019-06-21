import { Pipe, PipeTransform } from '@angular/core';

// const usernameRegexExp = /( *)(@\w+)/g;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(journal: any, text: string): any {
    if (!journal) {
      return [];
    }
    if (!text || text.trim() == '') {
      return journal;
    }

    // if (text == "@") return journal;

    return journal.filter(journalEntry => {
      text = text.toLowerCase();

      // let hasUser = false;
      // var userMatch, username, journalEntryUserName = journalEntry.user.name.toLowerCase();
      // while(hasUser == false && (userMatch = usernameRegexExp.exec(text))) {
      //   username = userMatch[2].substring(1);
      //   hasUser = journalEntryUserName.includes(username);
      //   text.replace(userMatch[2], '');
      // }

      return journalEntry.title.toLowerCase().includes(text)
        || journalEntry.text.toLowerCase().includes(text);
        // || hasUser;
    });
  }

}