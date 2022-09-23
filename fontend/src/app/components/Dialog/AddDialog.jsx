import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";

export const AddDialog = ({ open, setOpen, handleClose }) => {
  const addCard = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment">
      <DialogTitle id="edit-apartment">Edit</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please, edit the flat and the floor of your apartment.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="flat"
          label="Flat"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="floor"
          label="Floor"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={addCard} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
