import type { AcidProperty } from "./types/acid-property";
import type { AcidType } from "./types/acid-type";

export const acidPropertyByType: Record<AcidType, AcidProperty> = {
    C: "cysteine",
    A: "hydrophobic",
    I: "hydrophobic",
    L: "hydrophobic",
    M: "hydrophobic",
    F: "hydrophobic",
    W: "hydrophobic",
    Y: "hydrophobic",
    V: "hydrophobic",
    P: "hydrophobic",
    G: "glycine",
    D: "negativelyCharged",
    E: "negativelyCharged",
    K: "positivelyCharged",
    R: "positivelyCharged",
    S: "polarUncharged",
    T: "polarUncharged",
    H: "polarUncharged",
    Q: "polarUncharged",
    N: "polarUncharged",
    "-": "empty",
} as const;
