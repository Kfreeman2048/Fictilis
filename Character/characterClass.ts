class Character {
    characterName: string;
    playerName: string;
    maxHealth: number;
    currentHealth: number;
    maxEnergy: number;
    currentEnergy: number;
    deflectAndDodge: number;
    damageReduction: number;
    species: string;
    deathCondition: string;
    constructor(characterName: string, playerName: string, maxHealth: number, currentHealth: number, maxEnergy: number, currentEnergy: number, deflectAndDodge: number, damageReduction: number, species: string, deathCondition: string) {
        this.characterName = characterName;
        this.playerName = playerName;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.maxEnergy = maxEnergy;
        this.currentEnergy = currentEnergy;
        this.deflectAndDodge = deflectAndDodge;
        this.damageReduction = damageReduction;
        this.species = species;
        this.deathCondition = deathCondition;
    }
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
