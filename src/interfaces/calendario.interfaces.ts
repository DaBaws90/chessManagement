import { Equipo } from "./equipo.interfaces";

export interface Calendario {
    nombre: String;
    fecha: String;
    hora: String;
    equipo: Equipo;
    local: String;
}