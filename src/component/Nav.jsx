import { Grid, Button } from "@mui/material";
import React from "react";
import { navData } from "./navData";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Grid container spacing={2}>
      {navData.map((item) => {
        return (
          <Grid item xs={2}>
            <Link to={item.path}>
              <Button variant="contained" fullWidth>{item.label}</Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Nav;
