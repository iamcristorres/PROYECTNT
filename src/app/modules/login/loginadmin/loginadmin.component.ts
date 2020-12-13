import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css'],
  providers: [AutenticacionService]
})
export class LoginadminComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AutenticacionService, private router: Router) { }
   ngOnInit(): void {}
   onLogin(): void {
    console.log('form login: ', this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password);
    this.router.navigate(['/inicio']);
  }

}

