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
