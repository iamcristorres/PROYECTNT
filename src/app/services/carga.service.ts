import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Carga } from '../models/carga.model';

@Injectable({
  providedIn: 'root'
})
export class CargaService {
  carga: Carga;
  idURL: string;
  cargaPrueba: any;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
  }

  getDatosCargas(): Observable<any> {
    const tutRef = this.afs.doc('cargas/' + this.idURL);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tutRef);
      }, 1000);
    });
  }

  deleteCargasOne(userKey) {
    return this.afs.collection('users').doc(userKey).delete();
  }

  getAllCargas() {
    return this.afs.collection('cargas').snapshotChanges();
  }


  async updateOneCargas(idr,asignaturar, docenter) {
    this.afs.doc('cargas/' + idr).update(
      {
        asignatura:asignaturar,
        docente:docenter
      });
  }

  createCarga(carga: Carga): any {
    return this.afs.collection('cargas').add(
      {
        asignatura: carga.asignatura,
        docente: carga.docente
      });
  }


  loadCarga(id: string) {
    this.idURL = id;
    const cargas = this.afs.doc('cargas/' + id).valueChanges();
    cargas.subscribe(data => {
      this.cargaPrueba = data;
    });
    return this.cargaPrueba;
  }


  deleteCarga(cargaId: string) {
    return this.afs.collection('cargas').doc(cargaId).delete();
  }

  deleteAllAsignatura(): Promise<void> {
    // return this.clientesRef.remove();
    return null;
  }



}
