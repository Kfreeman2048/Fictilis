import{
    dieRoller,
} from '../dice_roller/rollDie.ts';
  
import{
    accuracyCheck,
} from '../accuracy_checker/checkAccuracy.ts';

export function slam(DaD: number, wDamage: number): number {
    if (accuracyCheck(dieRoller(20), 8, DaD)) {
        return (wDamage * 2);
    }
    else {
        return 0;
    }
}
