import { Resource } from './resource';


export interface Page<T extends Resource> {
    count: number;
    next: Resource;
    previous: Resource;
    results: T[];
}