export function accuracyCheck(roll: number, target: number, DaD: number): boolean
{
    if (target === null || target === 0)
    {
        target = 8;
    }
 
    if (roll >= target + DaD) {
        return true;
    }
    else return false;
}
