import React from "react";
import Layout from "../../Components/Layouts/Article";
import {Badge, Container, Link, List, ListItem} from "@chakra-ui/react";
import {Title, WorkImage, Meta} from "../../Components/Work";
import Paragraph from "../../Components/Paragraph";

const WorkPage = () => {
    return (
        <Layout title={"Sample Layout"}>
            <Container>
                <Title>
                    Sample Work <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A sample work item. This is a sample work item.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href={"https://www.google.com"}>{"https://www.google.com"}</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Linux/MacOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Node js, React, MongoDB</span>
                    </ListItem>
                </List>

                <WorkImage src={"/images/test.jpg"} alt={"Sample work image"}/>
                <WorkImage src={"/images/test.jpg"} alt={"Sample work image"}/>
            </Container>
        </Layout>
    );
};

export default WorkPage;
