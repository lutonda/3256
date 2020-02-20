import Verse from "./verse";

export default class Hymn {
    /*id: number;
    number: number;
    title: boolean;
    verses: Array<Verse>;
    */
    constructor(title=null, number = 0) {
        this.number = number;
        this.choir = choir;
        this.value = value;
    }

    addVerse(verse){
        this.verses.push(verse)
    }

    clone() {
        return new Hymn(this.number, this.choir, this.value);
    }
}