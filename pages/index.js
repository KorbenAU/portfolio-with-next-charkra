import {Box, Button, Container, Heading, Image, Link, useColorModeValue} from "@chakra-ui/react";
import Section from "../Components/Section";
import Paragraph from "../Components/Paragraph";
import {WorkTitle, WorkParagraph, BioTitle, BioParagraph} from "../Constants/TitleAndParagraphs";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import BioItem from "../Components/Bio";
import ArticleLayout from "../Components/Layouts/Article";

export default function Home() {
    return (
        <ArticleLayout>
            <Container>
                <Box borderRadius={"lg"}
                     bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                     p={3}
                     align={"center"}
                     mb={"2em"}
                >
                    Hello, gasdfasdgasdfasdgds
                </Box>
                <Box display={{md: "flex"}}>
                    <Box flexGrow={1}>
                        <Heading as={"h2"} variant={"page-title"}>
                            Korben Gao
                        </Heading>
                        <p>Digital Craftzman - Full stack developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align={"center"}>
                        <Image borderColor={"whiteAlpha.800"}
                               borderWidth={2}
                               borderStyle={"solid"}
                               maxWidth={"100px"}
                               display={"inline-block"}
                               borderRadius={"full"}
                               src={"/images/resume_square.jpg"}
                               alt={"Profile I'm Korben"}
                        />
                    </Box>
                </Box>
                <Section delay={0}>
                    <Heading as={"h3"} variant={"section-title"}>
                        {WorkTitle}
                    </Heading>
                    <Paragraph>
                        {`${WorkParagraph} `}
                        <NextLink href={"/works/inkdrop"}>
                            <Link>gadsfasd</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align={"center"} my={4}>
                        <NextLink href={"/works"}>
                            <Button rightIcon={<ChevronRightIcon/>}
                                    colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as={"h3"} variant={"section-title"}>
                        {BioTitle}
                    </Heading>
                    <BioItem year={"1990 Jun"}
                             text={"gasdfasdgasdfadsggasdfasdgasdfadsggasdfasdgasdfadsggasdfasdgasdfadsggasdfasdgasdfadsggasdfasdgasdfadsggasdfasdgasdfadsg"}/>
                    <BioItem year={"1990"} text={"gasdfasdgasdfadsg"}/>
                    <BioItem year={"1990"} text={"gasdfasdgasdfadsg"}/>
                </Section>
            </Container>
        </ArticleLayout>
    );
}
