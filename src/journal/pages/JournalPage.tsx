import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import type { ReactElement } from "react";

import { JournalLayout } from "../layour/JournalLayout.tsx";
import { NothingSelectedView } from "../views";

export const JournalPage = (): ReactElement => {
  console.log("JournalPage");

  return (
    <JournalLayout>
      <NothingSelectedView />
      {/*<NoteView />*/}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          position: "fixed",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
