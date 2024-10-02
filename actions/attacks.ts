import{
    dieRoller,
} from '../dice_roller/rollDie.ts';
  
import{
    accuracyCheck,
    accuracyBeatBy5,
} from '../AttackModules/checkAccuracy.ts';

import{
    hit,
    basicAttack,
} from '../AttackModules/damageModules.ts'; 

export function slam(DaD: number, wDamage: number): number | string {
    if (hit(DaD, 8) === 0) {
        return "Miss";
    }
    else {
        return (wDamage * 2);
    }
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

export function cleave(DaD: number, wDamage: number, targets: number): number[] {
    if (targets === 2) {
        return new Array (wDamage * hit(DaD, 8), wDamage * hit(DaD, 8));
    }
    else {
        return new Array (wDamage * hit(DaD, 8), 0);
    }
};

export function parryingStrike(DaD: number, wDamage: number): number | string {
    if (hit(DaD, 8) === 0) {
        return "Miss";
    }
    else {
        return (wDamage);
    }
};

export function dragIntoDarkness(DaD: number, wDamage: number): number | string {
    if (hit(DaD, 8) === 0) {
        return "Miss";
    }
    else { 
        return (wDamage);
    }
};

export function shoot(DaD: number, wDamage: number): number[] {
    return new Array (wDamage * hit(DaD, 8), wDamage * hit(DaD, 8));
};
