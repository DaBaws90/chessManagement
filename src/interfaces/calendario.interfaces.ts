import { Timestamp } from "rxjs";
import { Equipo } from "./equipo.interfaces";

export interface Calendario {
    nombre: String,
    fecha: Date,
    hora: String,
    equipo: Equipo,
    local: String
}