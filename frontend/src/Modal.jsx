import React from "react";
import {
  Box,
  Paper,
  Table,
  TableCell,
  Typography,
  TableHead,
  TableRow,
  Modal,
  Button,
  FormGroup,
  InputLabel,
  Input,
  FormControl,
  Stack,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({
  heading,
  onClose,
  open,
  handelEvent,
  setFormData,
  action,
  formData
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {heading}
          </Typography>
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <FormGroup>
            <Stack
              spacing={2}
              sx={{
                display: "flex",
              }}
            >
              <FormControl>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  type="text"
                  onChange={(e) => {
                    setFormData((prevstate) => {
                      return { ...prevstate, name: e.target.value };
                    });
                  }}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData((prevstate) => {
                      return { ...prevstate, description: e.target.value };
                    });
                  }}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="price">Price</InputLabel>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => {
                    setFormData((prevstate) => {
                      return { ...prevstate, price: e.target.value };
                    });
                  }}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="tax">Tax</InputLabel>
                <Input
                  id="tax"
                  name="tax"
                  type="number"
                  value={formData.tax}
                  onChange={(e) => {
                    setFormData((prevstate) => {
                      return { ...prevstate, tax: e.target.value };
                    });
                  }}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="sku">Sku</InputLabel>
                <Input
                  id="sku"
                  name="sku"
                  type="number"
                  value={formData.sku}
                  onChange={(e) => {
                    setFormData((prevstate) => {
                      return { ...prevstate, sku: e.target.value };
                    });
                  }}
                />
              </FormControl>
              <Button
                variant="contained"
                sx={{
                  width: 10,
                }}
                onClick={handelEvent}
              >
                {action}
              </Button>
            </Stack>
          </FormGroup>
        </Typography>
      </Box>
    </Modal>
  );
}
