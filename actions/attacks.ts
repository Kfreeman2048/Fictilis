import{
    dieRoller,
} from '../dice_roller/rollDie.ts';
  
import{
    accuracyCheck,
    accuracyBeatBy5,
} from '../accuracy_checker/checkAccuracy.ts';

export function slam(DaD: number, wDamage: number): number {
    if (accuracyCheck(dieRoller(20), 8, DaD)) {
        return (wDamage * 2);
    }
    else {
        return 0;
    }
}

export function icicleSpear(DaD: number, wDamage: number): number {
    const accuracyValue = accuracyBeatBy5(dieRoller(20), 8, DaD);
    if (accuracyValue === 1) {
        return (wDamage);
    }
    if (accuracyValue === 2) {
        return (wDamage + 8)
    }
    else {
        return 0;
    }
}