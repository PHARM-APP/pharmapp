import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }
  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status']='0'
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
