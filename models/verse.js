import Database from "../Database";

const db = new Database;

export default class Verse {
    /*id: number;
    number: number;
    choir: boolean;
    value: String;
    */
    constructor(value=null, number = 1, choir = false) {
        this.number = number;
        this.choir = choir;
        this.value = value;
    }

    clone() {
        return new Verse(this.number, this.choir, this.value);
    }

    one(id){
        return db.byId('Verse', id)
    }
    findAll(){
        return db.listAll('Verse')
    }
}