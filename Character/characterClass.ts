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
    Character attributes;
    num     Max Health
    num     Health (HP)
    num     Max energy
    num     Current energy
    num     Deflect and Dodge (DaD)
    num     Damage Reduction (DR)
    string  Species
    String  Death Condition
    array?  Active Bricks
    array?  Passive Bricks
    array?  Movement Bricks
    array?  Equipment
*/
