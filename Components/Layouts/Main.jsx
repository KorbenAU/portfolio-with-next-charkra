import React from "react";
import {Box, Container} from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Navbar";
import HardWorkModel from "../3D/HardWorkModel";
import NoSSR from "../NoSSR";
import Footer from "../Footer";

const Main = ({children, router}) => {
    return (
        <Box as={"main"} pb={0}>
            <Head>
                <meta name={"view port"}
                      content={"width=device-width,initial-scale=1"}/>
                <title>Korben Gao - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW={"container.md"} pt={14}>
                <NoSSR>
                    <HardWorkModel/>
                </NoSSR>
                {children}
            </Container>

            <Container maxW={"container.md"} pt={14}>
                <Footer/>
            </Container>
        </Box>
    );
};

export default Main;
