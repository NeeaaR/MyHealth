import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal  from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: 'black',
    border: "2px solid #000",
    boxShadow: '5',
    padding: "16px 32px 24px",
};

const AddSlot = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    heure: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...slot, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAvailableSlot(formData));
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Ajouter un créneau
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className={style}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Heure"
              name="heure"
              type="time"
              value={formData.heure}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Ajouter
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddSlot;