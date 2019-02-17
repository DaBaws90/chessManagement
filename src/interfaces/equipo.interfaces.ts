import { Jugador } from "./player.interfaces";
import { Resultado } from "./resultado.interfaces";

export interface Equipo {
    nombre: string;
    ciudad: string;
    jugadores: Jugador[];
    local: string;
    fecha: string;
    hora: string;
    jugada: boolean;
    resultados: Resultado[];
    key: string;
}