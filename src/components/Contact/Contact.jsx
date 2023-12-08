import { Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'
import HomeFooter from '../Footer/HomeFooter'



export const Contact = () => {
  return (
    <div className="relative h-full">
            <div className="rounded-15xl m-5 p-5 md:m-10 md:p-10 lg:m-10 lg:p-10" style={{ boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 15, backgroundImage: "linear-gradient(292deg, rgba(255, 210, 184, 0.70) 13.74%, rgba(255, 239, 229, 0.70) 92.18%)" }}>
                <h1 className='text-red-800 text-4xl'>Contact Us</h1>
                <Container>
                    <form className="mt-8 space-y-6">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    // InputProps={{ inputProps: { style: { color: '#fff' }}}}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    variant="outlined"
                                    type="tel"
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Subject"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: '#B74200', color: '#fff',width:90,height:40 }}
                            className="py-2"
                        >
                            Submit
                        </Button>
                    </form>
                </Container>
            </div>
            {/* <HomeFooter/> */}
        </div>
  )
}
