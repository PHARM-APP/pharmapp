import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  user: any = null;
  constructor(private router: Router, private service: LoginService) {}
  onlogin() {
    // this.router.navigate(['/navbar']);
    var user = {
      username: this.username,
      password: this.password,
      // kjhbfk
    };
    if (this.username.length === 0) {
      alert('username filed can not be empty');
    } else if (this.password.length === 0) {
      alert('password filed can not be empty');
    } else {
      this.service
        .login(this.username, this.password)
        .subscribe((response: any) => {
          console.log(response);
          console.log(response);
          if (response['status'] == '200') {
            console.log(response['status']);

            this.router.navigate(['/navbar']);
          } else if (response['status'] == 'error') {
            alert('invaild email or password');
          }
        });
    }
  }

  ngOnInit(): void {}
}
