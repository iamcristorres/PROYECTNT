import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente.model';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  docente: Docente;
  idURL: string;
  docentePrueba: any;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
  }

  getDatosDocente(): Observable<any> {
    const tutRef = this.afs.doc('docentes/' + this.idURL);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tutRef);
      }, 1000);
    });
  }

  deleteDocentesOne(userKey) {
    return this.afs.collection('users').doc(userKey).delete();
  }

  getAllDocentes() {
    return this.afs.collection('docentes').snapshotChanges();
  }

  async updateOneDocente(idr, codigor, apellidor, nombrer, correor, telefonor, direccionr) {
    this.afs.doc('docentes/' + idr).update(
      {
        codigo: codigor,
        apellido: apellidor,
        nombre: nombrer,
        correo: correor,
        telefono:telefonor,
        direccion:direccionr
      });
  }

  createDocente(docente: Docente): any {
    return this.afs.collection('docentes').add(
      {
        codigo: docente.codigo,
        apellido: docente.apellido,
        nombre: docente.nombre,
        correo: docente.correo,
        telefono:docente.telefono,
        direccion:docente.direccion
      });
  }


  loadDocente(id: string) {
    this.idURL = id;
    const docentes = this.afs.doc('docentes/' + id).valueChanges();
    docentes.subscribe(data => {
      this.docentePrueba = data;
    });
    return this.docentePrueba;
  }


  deleteDocente(clienteId: string) {
    return this.afs.collection('docentes').doc(clienteId).delete();
  }

  deleteAllDocente(): Promise<void> {
    // return this.clientesRef.remove();
    return null;
  }




}

