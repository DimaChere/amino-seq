import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { aminoFormResolver, type SequencesForm } from "../model/validation";

export const AminoSequenceAlign = () => {
    const { register, handleSubmit } = useForm<SequencesForm>({
        resolver: aminoFormResolver,
    });

    const onSubmit = () => {
        console.log("Submit");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    label="Последовательность 1"
                    variant="standard"
                    {...register("sequence1")}
                />
                <TextField
                    label="Последовательность 2"
                    variant="standard"
                    {...register("sequence2")}
                />
                <Button type="submit" variant="contained">
                    Sum Amino Acids
                </Button>
            </Box>
        </form>
    );
};
