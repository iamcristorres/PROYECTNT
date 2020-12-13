export class Cliente {
  id: string;
  nombre: string;
  cedula: number;
  direccion: string;
  categoria: number;
}

export class Categoria {
  id: string;
  nombre: string;
}

// Resolve - interface
export interface DatosCliente {
  id: string;
  nombre: string;
  cedula: number;
  direccion: string;
  categoria: number;
}
