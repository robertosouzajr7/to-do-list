import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import axios from "axios";
const API_URL = "https://api-to-do-list-beta.vercel.app/api/users";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UserCreateModal({ open, handleClose }) {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const response = await axios.post(`${API_URL}`, values);
      alert("Usuário criado com sucesso!");
      resetForm();
      handleClose();
    } catch (error) {
      alert(
        "Falha ao criar usuário: " +
          (error.response ? error.response.data.message : error.message)
      );
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="user-creation-modal-title"
      aria-describedby="user-creation-modal-description"
    >
      <Box sx={style}>
        <Typography id="user-creation-modal-title" variant="h6" component="h2">
          Criar novo usuário
        </Typography>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                type="name"
                name="name"
                label="NOME"
                fullWidth
                required
              />
              <Field
                as={TextField}
                type="email"
                name="email"
                label="Email"
                fullWidth
                required
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Senha"
                fullWidth
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                disabled={isSubmitting}
              >
                Criar usuário
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

export default UserCreateModal;
