import { acidColorByProperty } from "./acid-color-by-property";
import { acidPropertyByType } from "./acid-properties-by-type";
import type { AcidType } from "./types/acid-type";

export const getAcidColorByType = (acidType: AcidType) => {
    return acidColorByProperty[acidPropertyByType[acidType]];
};
