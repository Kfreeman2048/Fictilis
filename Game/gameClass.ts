import CharacterClass from "../Character/characterClass.ts";

class GameClass {
    constructor(
        private gameName: string,
        private characters: Array<CharacterClass>,
    ) {}
};
export default GameClass;
