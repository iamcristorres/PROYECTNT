import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/autenticacion/services/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AutenticacionService]
})
export class RegistroComponent implements OnInit {
  registroForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });

  constructor(private authSvc: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegistro(): void {
        console.log('form: ', this.registroForm.value);
        const {email, password} = this.registroForm.value;
        this.authSvc.registrar(email, password);
        this.router.navigate(['/loginadmin']);
      }

}
