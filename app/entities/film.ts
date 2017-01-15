import { Resource } from "./resource";

export interface Film extends Resource {
    title : string;
    episode_id : number;
    opening_crawl : string;
    director : string;
    producer : string;
    release_date : string;
}