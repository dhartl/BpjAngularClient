import { Resource } from "./resource";
import { Film } from "./film";
import { Species } from "./species";

export interface Character extends Resource{

    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    films: string[];
    filmObjects: Film[];
}