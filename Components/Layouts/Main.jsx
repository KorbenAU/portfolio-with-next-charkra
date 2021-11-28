import React from "react";
import {Box, Container} from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Navbar";
import HardWorkModel from "../3D/HardWorkModel";
import NoSSR from "../NoSSR";

const Main = ({children, router}) => {
    return (
        <Box as={"main"} pb={8}>
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
        </Box>
    );
};

export default Main;
