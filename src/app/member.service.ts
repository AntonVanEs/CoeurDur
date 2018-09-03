import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers() : Observable<Member[]> {
    return of(MEMBERS);
  }

  getMember(id: string) : Observable<Member> {
    return of(MEMBERS.find(member => member.getIdString() === id));
  }
}
