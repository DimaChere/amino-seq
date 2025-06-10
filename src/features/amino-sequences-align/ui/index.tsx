import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createAlignmentFromSequence } from "../model/create-alignment-from-sequence";
import type { AlignmentType } from "../model/types/alignment";
import {
    aminoFormResolver,
    initialState,
    type SequencesForm,
} from "../model/validation";

export const AminoSequenceAlign = () => {
    const [currentAlignment, setCurrentAlignment] = useState<AlignmentType>({
        sequence1: { sequence: [], colors: [] },
        sequence2: { sequence: [], colors: [] },
    });

    const { register, formState, handleSubmit } = useForm<SequencesForm>({
        resolver: aminoFormResolver,
        defaultValues: initialState,
    });

    const onSubmit = (data: SequencesForm) => {
        const sequence1 = createAlignmentFromSequence(data.sequence1);
        const sequence2 = createAlignmentFromSequence(data.sequence2);

        setCurrentAlignment({ sequence1, sequence2 });
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Последовательность 1"
                        variant="standard"
                        {...register("sequence1")}
                        error={formState.errors.sequence1 !== undefined}
                        helperText={formState.errors.sequence1?.message}
                    />
                    <TextField
                        label="Последовательность 2"
                        variant="standard"
                        {...register("sequence2")}
                        error={formState.errors.sequence2 !== undefined}
                        helperText={formState.errors.sequence2?.message}
                    />
                    <Button type="submit" variant="contained">
                        Выровнять
                    </Button>
                </Box>
            </form>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {currentAlignment.sequence1.sequence.length &&
                    currentAlignment.sequence1.sequence.map((_, index) => {
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 25,
                                        height: 25,
                                        borderRadius: 1,
                                        backgroundColor:
                                            currentAlignment.sequence1.colors[
                                                index
                                            ],
                                    }}
                                >
                                    <Typography sx={{ lineHeight: 1 }}>
                                        {
                                            currentAlignment.sequence1.sequence[
                                                index
                                            ]
                                        }
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 25,
                                        height: 25,
                                        border: "1px solid grey",
                                        borderRadius: 1,
                                        backgroundColor:
                                            currentAlignment.sequence2.sequence[
                                                index
                                            ] !==
                                            currentAlignment.sequence1.sequence[
                                                index
                                            ]
                                                ? "lightgrey"
                                                : "transparent",
                                    }}
                                >
                                    <Typography sx={{ lineHeight: 1 }}>
                                        {
                                            currentAlignment.sequence2.sequence[
                                                index
                                            ]
                                        }
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
            </Box>
        </Box>
    );
};
