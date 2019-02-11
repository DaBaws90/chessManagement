import { Jugador } from "./player.interfaces";
import { Resultado } from "./resultado.interfaces";

export interface Equipo {
    nombre: string;
    ciudad: string;
    jugadores: string[];
    local: string;
    fecha: string;
    hora: string;
    jugada: boolean;
    resultados: Resultado[];
    key: string;
}