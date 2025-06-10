import type { AcidProperty } from "./types/acid-property";

export const acidColorByProperty: Record<AcidProperty, string> = {
    cysteine: "#ffea00",
    hydrophobic: "#67e4a6",
    glycine: "#c4c4c4",
    negativelyCharged: "#fc9cac",
    positivelyCharged: "#bb99ff",
    polarUncharged: "#80bfff",
    empty: "transparent",
} as const;
