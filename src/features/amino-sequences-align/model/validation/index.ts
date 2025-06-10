import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AMINO_ACIDS_REGEX = /^[ARNDCQEGHILKMFPSTWYV-]+$/i;

const aminoAcidSequenceSchema = z
    .string()
    .min(1, "Обязательное поле")
    .regex(
        AMINO_ACIDS_REGEX,
        "Допустимы только латинские буквы аминокислот (A, R, N, ...) или дефис (-)"
    );

export const sequencesFormSchema = z
    .object({
        sequence1: aminoAcidSequenceSchema,
        sequence2: aminoAcidSequenceSchema,
    })
    .refine((data) => data.sequence1.length === data.sequence2.length, {
        message: "Длины последовательностей должны совпадать",
        path: ["sequence2"],
    });

export type SequencesForm = z.infer<typeof sequencesFormSchema>;
export const aminoFormResolver = zodResolver(sequencesFormSchema);

export const initialState: SequencesForm = { sequence1: "", sequence2: "" };
