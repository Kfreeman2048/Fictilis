class CharacterClass {
    constructor(
        public id: number,
        public characterName: string,
        public playerName: string,
        private maxHealth: number,
        private currentHealth: number,
        private maxEnergy: number,
        private currentEnergy: number,
        private deflectAndDodge: number,
        private damageReduction: number,
        private species: string,
        private deathCondition: string
    ) {}
};
export default CharacterClass;
/*
    TODO:
    add;
    array?  Active Bricks
    array?  Passive Bricks
    array?  Movement Bricks
    array?  Equipment
*/
