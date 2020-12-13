import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  asignatura: Asignatura;
  idURL: string;
  asignaturaPrueba: any;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
  }

  getDatosAsignaturas(): Observable<any> {
    const tutRef = this.afs.doc('asignaturas/' + this.idURL);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tutRef);
      }, 1000);
    });
  }

  deleteAsignaturasOne(userKey) {
    return this.afs.collection('users').doc(userKey).delete();
  }

  getAllAsignaturas() {
    return this.afs.collection('asignaturas').snapshotChanges();
  }

  async updateOneAsignaturas(idr,nombrer, ihr) {
    this.afs.doc('asignaturas/' + idr).update(
      {
        nombre:nombrer,
        ih:ihr
      });
  }

  createAsignatura(asignatura: Asignatura): any {
    return this.afs.collection('asignaturas').add(
      {
        nombre: asignatura.nombre,
        ih: asignatura.ih
      });
  }


  loadAsignatura(id: string) {
    this.idURL = id;
    const asignaturas = this.afs.doc('asignaturas/' + id).valueChanges();
    asignaturas.subscribe(data => {
      this.asignaturaPrueba = data;
    });
    return this.asignaturaPrueba;
  }


  deleteAsignatura(asignaturaId: string) {
    return this.afs.collection('asignaturas').doc(asignaturaId).delete();
  }

  deleteAllAsignatura(): Promise<void> {
    // return this.clientesRef.remove();
    return null;
  }




}

