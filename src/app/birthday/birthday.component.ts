import { Component, OnInit } from '@angular/core';

import { MemberService } from '../member.service';
import { Member } from '../member';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  members: Member[];
  birthdays: Member[] = [];
  display: boolean = false;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
    this.getBirthdaysToday();
  }

  getMembers() : void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  getBirthdaysToday = () => {
    this.members.forEach(member => {
      let today = new Date();
      if (member.dob.getDate() === today.getDate() && member.dob.getMonth() === today.getMonth()) {
        this.birthdays.push(member);
        this.display = true;
      }
    });
  }

  getMessage(member: Member) : string {
    return " is vandaag " + member.getAge() + " jaar geworden. Hœlde!";
  }
}
