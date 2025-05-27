export interface Entidad {
  id?: number;
  nit: string;
  nombre: string;
  contratos?: number[]; // Opcional, puedes omitir si no lo usas en el front
}
