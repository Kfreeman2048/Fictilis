import { dieRoller } from "../dice_roller/rollDie.ts";

import { accuracyCheck } from "./checkAccuracy.ts";

export function hit(DaD: number, target: number): number {
    if (accuracyCheck(dieRoller(20), target, DaD)) {
        return 1;
    }
    else {
        return 0;
    }
};

export function basicAttack(DaD: number, wDamage: number, target: number): number | string {
    if (hit(DaD, target) === 0) {
        return "Miss";
    }
    else {
        return (wDamage);
    }
};