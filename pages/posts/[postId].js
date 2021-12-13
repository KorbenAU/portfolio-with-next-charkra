import React, {useRef} from "react";
import {Badge, Box, Container, Heading, Wrap} from "@chakra-ui/react";
import {TableOfContents, Title} from "../../Components/Post";
import PostTag from "../../Components/PostTag";
import MarkdownViewer from "../../Components/MarkdownViewer/MarkdownViewer";
import Layout from "../../Components/Layouts/Article";
import {getPostById, getPostIds} from "../../API";

const PostDetailsPage = (props) => {
    console.log(props);
    const {title, date, tags, mdText} = props.post;
    const contentRef = useRef();

    return (
        <Layout title={"That's a sample post"}>
            <Container>
                <Title>
                    {title} <Badge>{date}</Badge>
                </Title>

                <Wrap>
                    {tags && tags.map((tag, index) => (
                        <PostTag key={index} tagName={tag}/>
                    ))}
                </Wrap>

                <Box my={"2em"}>
                    <Heading>Table of content:</Heading>
                    <TableOfContents contentRef={contentRef}/>
                </Box>

                <Box ref={contentRef}>
                    <MarkdownViewer>
                        {mdText}
                    </MarkdownViewer>
                </Box>

            </Container>

        </Layout>
    );
};

export async function getStaticPaths() {
    const ids = await getPostIds();
    const paths = ids.map(id => ({
        params: {postId: id}
    }));

    return {
        paths,
        fallback: "blocking"
    };
}

export async function getStaticProps({params}) {
    const post = await getPostById(params.postId);
    return {
        props: {post},
        revalidate: 600,
    };
}

export default PostDetailsPage;
