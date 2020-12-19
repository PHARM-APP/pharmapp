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

  constructor(private router: Router, private service: LoginService) {}

  onlogin() {
    if (this.username.length == 0) {
      alert('email field can not be empty');
    } else if (this.password.length == 0) {
      alert('password can not be empty');
    } else {
      this.service.login(this.username, this.password).subscribe((res: any) => {
        console.log(res);
        if (res.username !== null && res.role === 'manager') {
          console.log(res);

          localStorage['username'] = res.username;
          localStorage['password'] = res.password;

          this.router.navigate(['/navbar']);
        } else if (res.role === 'register') {
          this.router.navigate(['/member']);
        } else if (res === null) {
          alert('invaild email or password');
        }
      });
    }
  }

  ngOnInit(): void {}
}
