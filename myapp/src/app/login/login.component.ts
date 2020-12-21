import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  status = localStorage['login_status'];
  isLoggedIn = false;

  constructor(private router: Router, private service: LoginService) {
    this.onload()
  }

  onlogin() {
    if (this.username.length == 0) {
      alert('email field can not be empty');
    } else if (this.password.length == 0) {
      alert('password can not be empty');
    } else {
      this.service.login(this.username, this.password).subscribe((res: any) => {
        if (res.username !== null && res.role === 'manager') {
          localStorage['login_status'] = '1';
          localStorage['username'] = res.username;
          localStorage['password'] = res.password;
          this.router.navigate(['/navbar']);
        } else if (res.role === 'register') {
          localStorage['login_status'] = '1';
          localStorage['username'] = res.username;
          localStorage['password'] = res.password;
          this.router.navigate(['/member']);
        } else if (res === null) {
          alert('invaild email or password');
        }
      });
    }
  }

  onload() {
    if (this.status === '1') {
      this.isLoggedIn = true;
      this.username = localStorage['username'];
      this.password = localStorage['password'];
      this.router.navigate(['/navbar']);
    }
  }

  onlogout() {
    this.isLoggedIn = false;
    localStorage['username'] = null;
    localStorage['password'] = null;
  }

  ngOnInit(): void {}
}
