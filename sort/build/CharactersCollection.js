"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const character = this.data.split('');
        const temp = character[leftIndex];
        character[leftIndex] = character[rightIndex];
        character[rightIndex] = temp;
        this.data = character.join('');
    }
}
exports.CharactersCollection = CharactersCollection;