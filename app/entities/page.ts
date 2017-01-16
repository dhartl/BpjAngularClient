import { Resource } from './resource';


export interface Page<T extends Resource> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}