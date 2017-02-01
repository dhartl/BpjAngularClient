import { Category } from './category';


export interface Article {

    articleId : number;
    name : string;
    price : number;
    description : string;
    category : Category;
}