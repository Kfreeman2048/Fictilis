export function accuracyCheck(roll: number, target: number, DaD: number): boolean {
    if (roll >= target + DaD) {
        return true;
    }
    else return false;
}

export function accuracyBeatBy5(roll: number, target: number, DaD: number): number {
    if (roll < (target + DaD)) {
        return 0;
    }

    if (roll - (target + DaD) >= 5) {
        return 2;
    }

    if (roll >= (target + DaD)) {
        return 1;
    }
    else return 0;
}
