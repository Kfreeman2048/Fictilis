import { dieRoller } from "../dice_roller/rollDie.ts";

import { accuracyCheck } from "./checkAccuracy.ts";

export function basicAttack(DaD: number, wDamage: number, target: number): number | string {
    if (!(accuracyCheck(dieRoller(20), target, DaD))) {
        return "Miss";
    }
    else {
        return (wDamage);
    }
};