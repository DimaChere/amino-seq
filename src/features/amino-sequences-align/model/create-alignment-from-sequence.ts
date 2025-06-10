import { getAcidColorByType, type AcidType } from "@entities/amico-acid";
import type { AlignmentType } from "./types/alignment";

export const createAlignmentFromSequence = (
    sequence: string
): AlignmentType["sequence1"] => {
    const sequenceArr = sequence.toUpperCase().split("");

    return {
        sequence: sequenceArr as AcidType[],
        colors: sequenceArr.map((acid) => getAcidColorByType(acid as AcidType)),
    };
};
