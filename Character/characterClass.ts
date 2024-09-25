class Character {
    constructor(
        private characterName: string,
        private playerName: string,
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
export default Character;
/*
    TODO:
    add;
    array?  Active Bricks
    array?  Passive Bricks
    array?  Movement Bricks
    array?  Equipment
*/
