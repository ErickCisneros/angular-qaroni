import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('prueba@qaroni.com'),
    password: new FormControl('12345678'),
  });

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/','admin'])
    }
  }

  onLogin() {
    this.loginService.login(this.loginForm.value).subscribe((res) => {
      if (res.result[0].userId) {
        this.cookieService.set('token', res.result[0].access_token);
        this.router.navigate(['/','admin'])
      }
    });
  }
}
