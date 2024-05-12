import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Grid } from "@mui/material";
import PostCard from "../components/PostCard";

const Home = () => {
    return(
        <>

        <Box sx={{ bgcolor: "afafafa", minHeight: "200vh"}}>
            <Navbar />
                <Container sx={{ pt: 5, pb: 5, minHeight: "83vh"}}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={{xs: 2, md: 0}} columns={{xs: 4, sm: 8, md: 12}}>
                            <Grid items xs={4} sm={9} md={4}>
                                <PostCard />
                            </Grid>

                        </Grid>
                    </Box>
                </Container>
            <Footer />
        </Box>
            
        </>
    )
}

export default Home