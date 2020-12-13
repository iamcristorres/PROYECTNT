import { AutenticacionService } from './../services/autenticacion.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AutenticacionService]
})
export class RegistroComponent implements OnInit {
  registroForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AutenticacionService, private router: Router) { }
  ngOnInit(): void {}
  onRegistro(): void {
    console.log('form: ', this.registroForm.value);
    const {email, password} = this.registroForm.value;
    this.authSvc.registrar(email, password);
    this.router.navigate(['/']);
  }
}

