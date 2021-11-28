import React from "react";
import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import {WorkGridItem} from "../Components/GridItem";
import Section from "../Components/Section";

const Works = () => {
    return (
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id={"SampleWorkPage"}
                                  title={"work1"}
                                  thumbnail={"/images/test.jpg"}>
                        This is my sample project based on java javascript react mongodb.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    );
};

export default Works;
