import { Component, OnInit } from '@angular/core';

import { MemberService } from '../member.service';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member: Member;

  constructor(private memberService: MemberService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getMember();
  }

  getMember() : void {
    const idString = this.route.snapshot.paramMap.get('member.getIdString()');
    this.memberService.getMember(idString).subscribe(member => this.member = member);
  }

}
