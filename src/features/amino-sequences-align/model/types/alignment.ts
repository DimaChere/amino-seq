import type { AcidType } from "@entities/amico-acid";

type SequenceType = {
    sequence: AcidType[];
    colors: string[];
};

export type AlignmentType = {
    sequence1: SequenceType;
    sequence2: SequenceType;
};
