import React from "react";
import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import {PostGridItem} from "../Components/GridItem";

const Posts = () => {
    return (
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Posts
            </Heading>
            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                <section>
                    <PostGridItem/>
                </section>
                <section>
                    <PostGridItem/>
                </section>
                <section>
                    <PostGridItem/>
                </section>
                <section>
                    <PostGridItem/>
                </section>
            </SimpleGrid>
        </Container>
    );
};

export default Posts;
