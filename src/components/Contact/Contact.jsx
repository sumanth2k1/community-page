import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@material-ui/core";
import * as React from "react"; 
import { Grid, InputLabel, Paper } from "@mui/material";
import Alert from '@mui/material/Alert';


export const Contact = () => {
  return (
    <div className=" h-full" style={{ justifyContent: 'center', height: "100vh" }}>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%", marginTop: "5%", paddingRight: 5, paddingLeft: 2, paddingBottom: 5, paddingTop: 3, borderRadius: 7, color: 'orange' }}>
        <Box sx={{ padding: 10, margin: 10 }}>
          <Typography variant="h6" style={{ margin: 25 }} gutterBottom sx={{ paddingBottom: 5 }}>
            Reach us / Send us a message
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2} />
            <Grid item xs={12} sm={5}>
              <TextField
                required
                id="email"
                name="email"
                label="email"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  fontWeight: 700
                }}
              >
                Email
              </TextField>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                // type="number"
                id="phone"
                name="phone"
                defaultValue="+91 "
                label="Phone no."
                variant="outlined"
                size="small"
                autoComplete="off"
                fullWidth
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  fontWeight: 700
                }}
              >
                Phone no.
              </TextField>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  color: 'orange',
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Subject :-
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="url"
                name="url"
                label="subject ..."
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  color: 'orange',
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Message :-
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                variant="outlined"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button variant="contained" style={{ color: "orange" }}>
                Send
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
            <Alert severity="success">This is a success alert — check it out!</Alert>
          </Grid>
        </Box>
      </Paper>
    </div>
  )
}
