import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import type { ReactElement } from "react";

import { ImageGallery } from "../components";

export const NoteView = (): ReactElement => {
  console.log("NoteView");

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          August 38, 2024
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          fullWidth
          label="Title"
          placeholder="Add title"
          sx={{ border: "none", mb: 1 }}
          type="text"
          variant="filled"
        />

        <TextField
          fullWidth
          label="Description"
          minRows={5}
          multiline
          placeholder="What do you want to write today?"
          type="text"
          variant="filled"
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
