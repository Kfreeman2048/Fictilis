function wait(ms: number) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

export function dieRoller(max: number): number
{
    wait(1);
    return Math.ceil(Math.random() * max);
}

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
