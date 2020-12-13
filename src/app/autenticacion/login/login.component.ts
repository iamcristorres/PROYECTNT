import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './../services/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutenticacionService]
})
export class LoginComponent implements OnInit {  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AutenticacionService, private router: Router) {}
  ngOnInit(): void {}
  onLogin(): void {
    console.log('form login: ', this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password);
    this.router.navigate(['/listaClientes']);
  }}

