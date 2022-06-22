import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [beans, setBeans] = useState("");
  const getBeans = () => {
    fetch("http://localhost:5000/get_user_beans")
      .then((res) => res.json())
      .then((data) => {
        setBeans(data.message);
      });
  };

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3">
          🥔🥔 Kyle's Fantastic Bean App 🥔🥔
        </Typography>
        <Button
          onClick={getBeans}
          size="large"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          I would like some beans please
        </Button>

        <Card sx={{ minWidth: 325 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Server Response:
            </Typography>
            <Typography variant="body2">{beans}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;
