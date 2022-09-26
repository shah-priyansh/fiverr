import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, InputLabel, MenuItem, Select } from "@material-ui/core";

export const AddDialog = ({
  open,
  handleClose,
  status,
  amount,
  setStatus,
  setAmount,
  addCard,
  edit,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment">
      <DialogTitle id="edit-apartment">
        {edit === true ? "Edit" : "Add"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Please, Add or Edit your card .</DialogContentText>
        <InputLabel id="demo-simple-select-label">status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Age"
          fullWidth
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value={"New Order"}>New Order</MenuItem>
          <MenuItem value={"In Progress"}>In Progress</MenuItem>
          <MenuItem value={"Delivered"}>Delivered</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
        </Select>
        <TextField
          autoFocus
          margin="dense"
          id="floor"
          label="Floor"
          type="number"
          key="amount"
          value={amount}
          fullWidth
          onChange={(e) => setAmount(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={addCard} color="primary">
          {edit === true ? "Edit" : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
