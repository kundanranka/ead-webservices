import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Box,
  Paper,
  Table,
  TableCell,
  Typography,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import CustomModal from "./Modal";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDelete] = useState(false);

  const [formData, setFormData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/product").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleAdd = () => {
    console.log(formData);
    axios.post("http://localhost:8000/api/product", formData).then((res) => {
      setData([res.data, ...data]);
      setOpen(false);
    });
  };

  const enableEdit = (row) => {
    setFormData(row);
    setEdit(true);
  };
  const handleEdit = () => {
    let row = {...formData}
    console.log(formData);
    axios.patch("http://localhost:8000/api/product/" + row.id, formData).then((res) => {
      setData([...data.filter((item) => item.id !== row.id), res.data]);
      setEdit(false);
    });
  };
  const handleDelete = (row) => {
    axios.delete("http://localhost:8000/api/product/" + row.id).then((res) => {
      setData(data.filter((item) => item.id !== row.id));
    });
  };
  return (
    <Box
      sx={{
        padding: 10,
      }}
      component={Paper}
    >
      <CustomModal
        heading="Add Item"
        onClose={() => setOpen(false)}
        open={open}
        handelEvent={handleAdd}
        setFormData={setFormData}
        formData={formData}
        action="Add"
      />
      <CustomModal
        heading="Edit Item"
        onClose={() => setEdit(false)}
        open={edit}
        handelEvent={handleEdit}
        setFormData={setFormData}
        formData={formData}
        action="Edit"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Basic CRUD Operation</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setFormData({});
            setOpen(true);
          }}
        >
          {" "}
          Add Item{" "}
        </Button>
      </Box>
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableHead>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.tax}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    marginRight: 2,
                  }}
                  onClick={() => enableEdit(item)}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(item)}
                >
                  <DeleteOutlineIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Box>
    </Box>
  );
}

export default App;
