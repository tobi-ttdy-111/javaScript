
// imports
import { v4 as uuid } from 'uuid'; // ! cambiar nombre en la importacion

// Todo
export class Todo {

    constructor( description ) {
        this.id = uuid();
        this.description = description;
        this.done;
        this.createdAt = new Date();
    };

};
