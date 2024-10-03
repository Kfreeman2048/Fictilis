import{
    dieRoller,
} from '../dice_roller/rollDie.ts';
  
import{
    accuracyBeatBy5,
} from '../AttackModules/checkAccuracy.ts';

import{
    basicAttack,
} from '../AttackModules/damageModules.ts'; 

export function slam(DaD: number, wDamage: number): number | string {
    return basicAttack(DaD, wDamage * 2, 8);
};

export function icicleSpear(DaD: number, wDamage: number): number | string {
    const accuracyValue = accuracyBeatBy5(dieRoller(20), 8, DaD);
    if (accuracyValue === 1) {
        return (wDamage);
    }
    if (accuracyValue === 2) {
        return (wDamage + 8);
    }
    else {
        return "Miss";
    }
};

export function flurry(DaD: number, wDamage: number): (number | string)[] {
    return new Array (basicAttack(DaD, wDamage, 8), basicAttack(DaD, wDamage, 8), basicAttack(DaD, wDamage, 8));
};

export function cleave(DaD: number, wDamage: number, targets: number): (number | string)[] | number | string {
    if (targets === 2) {
        return new Array (basicAttack(DaD, wDamage, 8), basicAttack(DaD, wDamage, 8));
    }
    if (targets === 1) {
        return basicAttack(DaD, wDamage, 8);
    }
    else {
        return "Error, invalid number of targets";
    }
};

export function parryingStrike(DaD: number, wDamage: number): number | string {
    return basicAttack(DaD, wDamage, 8);
};

export function dragIntoDarkness(DaD: number, wDamage: number): number | string {
    return basicAttack(DaD, wDamage, 8);
};

export function shoot(DaD: number, wDamage: number): (number | string)[] {
    return new Array (basicAttack(DaD, wDamage, 8), basicAttack(DaD, wDamage, 8));
};
