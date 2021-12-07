import {
    Accordion,
    Box,
    Button,
    Container, Heading,
    HStack,
    Image,
    Link,
    SimpleGrid, useColorModeValue
} from "@chakra-ui/react";
import Section from "../Components/Section";
import Paragraph from "../Components/Paragraph";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import ArticleLayout from "../Components/Layouts/Article";
import {TechStackItem} from "../Components/GridItem";
import SocialButton from "../Components/SocialButton";
import {BioAccordionItem} from "../Components/AccordionItems";
import {getProfileData} from "../API";

export default function Home({name, title, introduction}) {

    return (
        <ArticleLayout>
            <Container>
                <Box borderRadius={"lg"}
                     bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                     p={3}
                     align={"center"}
                     mb={"2em"}
                >
                    {"Hello, I'm a full-stack developer based in Melbourne!"}
                </Box>
                <Box display={{md: "flex"}}>
                    <Box flexGrow={1}>
                        <Heading as={"h2"} variant={"page-title"}>
                            {name}
                        </Heading>
                        <p>{title}</p>
                        <HStack mt={1} px={0}>
                            <SocialButton logo={"linkedin.svg"} href={"https://www.linkedin.com/in/korben-gao/"}
                                          alt={"LinkedIn"}/>
                            <SocialButton logo={"git.svg"} href={"https://github.com/KorbenAU/"} alt={"GitHub"}/>
                            <SocialButton logo={"gmail.svg"} alt={"Gamil"} popOver={true}
                                          popOverHead={"Email"} popOverText={"korben.au@gmail.com"}/>
                        </HStack>
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
                        {"Work"}
                    </Heading>
                    <Paragraph>
                        {introduction + " "}
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
                        {"Skills"}
                    </Heading>
                    <SimpleGrid columns={[2, 2, 3]} gap={6}>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"React"}
                                           text={"This is sample text for skills. This is sample text for skills."}
                                           logo={"React.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"Nodejs"}
                                           text={"This is sample text for skills"}
                                           logo={"Nodejs.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"Java"}
                                           text={"This is sample text for skills"}
                                           logo={"java.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"JavaScript"}
                                           text={"This is sample text for skills"}
                                           logo={"javascript.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"C#"}
                                           text={"This is sample text for skills"}
                                           logo={"c--.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"Docker"}
                                           text={"This is sample text for skills"}
                                           logo={"docker.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"Nextjs"}
                                           text={"This is sample text for skills"}
                                           logo={"nextjs.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"Python"}
                                           text={"This is sample text for skills"}
                                           logo={"python-5.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"yellow"}
                                           level={"Entry Level"}
                                           techName={"Redux"}
                                           text={"This is sample text for skills"}
                                           logo={"redux.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"blue"}
                                           level={"Entry Level"}
                                           techName={"Zabbix"}
                                           text={"This is sample text for skills"}
                                           logo={"zabbix.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"GraphQL"}
                                           text={"This is sample text for skills"}
                                           logo={"graphql.svg"}/>
                        </Section>
                        <Section>
                            <TechStackItem colorSchema={"green"}
                                           level={"Entry Level"}
                                           techName={"Kafka"}
                                           text={"This is sample text for skills"}
                                           logo={"kafka.svg"}/>
                        </Section>
                    </SimpleGrid>
                </Section>
                <Section delay={0.4}>
                    <Heading as={"h3"} variant={"section-title"}>
                        {"Bio"}
                    </Heading>
                    <Accordion>
                        <BioAccordionItem/>
                        <BioAccordionItem/>
                        <BioAccordionItem/>
                        <BioAccordionItem/>
                    </Accordion>
                    {/*<BioItem year={"2020 Psych Press - Full Stack Web Developer"} text={"Psych Press - Full Stack Web Developer"}/>*/}
                    {/*<BioItem year={"2019"} text={"Ultimate Solar Energy - Full Stack Developer"}/>*/}
                    {/*<BioItem year={"2016"} text={"University of Melbourne - Master in Software Engineering"}/>*/}
                    {/*<BioItem year={"2015"} text={"Dareway - Java Developer"}/>*/}
                    {/*<BioItem year={"2013"} text={"Shandong University - Master in Software Engineering"}/>*/}
                </Section>


            </Container>
        </ArticleLayout>
    );
}

export async function getStaticProps() {
    const profileData = await getProfileData();
    return {
        props: {
            ...profileData[0],
            revalidate: 6000,
        }
    };
}
