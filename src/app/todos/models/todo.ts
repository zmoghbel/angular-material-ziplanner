export class Todo {
    id!:number;
    title?:string;
    date?:string;
    time?:string;
    description?:string | null;
    isDone?:boolean;
    reminder?:boolean;
}