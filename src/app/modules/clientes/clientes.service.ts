import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cliente } from './cliente.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  cliente: Cliente;
  clientePrueba: any;
  idURL: string;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
    // esto permite que se cree la collección categorias
    // con dos documentos de id:1 e id:2f
    this.afs.collection('categorias').doc('1').set({ nombre: 'Antiguo' });
    this.afs.collection('categorias').doc('2').set({ nombre: 'Nuevo' });
  }


  getDatosCliente(): Observable<any> {
    const tutRef = this.afs.doc('clientes/' + this.idURL);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tutRef);
      }, 1000);
    });
  }


  deleteClienteOne(userKey) {
    return this.afs.collection('users').doc(userKey).delete();
  }

  getAllCategorias() {
    return this.afs.collection('categorias').snapshotChanges();
  }

  getAllClientes() {
    return this.afs.collection('clientes').snapshotChanges();
  }

  async updateOneCliente(idr, nombrer, cedular, direccionr) {
    this.afs.doc('clientes/' + idr).update(
      {
        nombre: nombrer,
        cedula: cedular,
        direccion: direccionr
      });
  }

  createCliente(cliente: Cliente): any {
    return this.afs.collection('clientes').add(
      {
        cedula: cliente.cedula,
        nombre: cliente.nombre,
        direccion: cliente.direccion,
        categoria: cliente.categoria
      });
  }

  loadCliente(id: string) {
    this.idURL = id;
    const clientes = this.afs.doc('clientes/' + id).valueChanges();
    clientes.subscribe(data => {
      this.clientePrueba = data;
    });
    return this.clientePrueba;
  }


  deleteCliente(clienteId: string) {
    return this.afs.collection('clientes').doc(clienteId).delete();
  }

  deleteAllClientes(): Promise<void> {
    // return this.clientesRef.remove();
    return null;
  }

}
