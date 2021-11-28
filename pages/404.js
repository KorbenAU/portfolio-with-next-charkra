import React from "react";
import NextLink from "next/link";
import {Box, Button, Container, Divider, Heading, Text} from "@chakra-ui/react";

const NotFoundPage = () => {
    return (
        <Container mt={["5px", "10px", "20px"]}>
            <Heading as={"h1"}>404</Heading>
            <Text>{"Ooops! You weren't supposed to see this."}</Text>

            <Divider my={6}/>

            <Box my={6} align={"center"}>
                <NextLink href={"/"}>
                    <Button colorSchema={"teal"}>Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    );
};

export default NotFoundPage;
