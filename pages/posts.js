import React from "react";
import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import {PostGridItem} from "../Components/GridItem";
import Head from "next/head";
import {getPosts} from "../API";

const Posts = ({posts}) => {
    return (
        <>
            <Head>
                <title>Korben Gao - Posts</title>
            </Head>
            <Container>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Posts
                </Heading>
                <SimpleGrid columns={[1, 1, 1]} gap={6}>
                    {
                        posts.map((post, index) => (
                            <section key={index}>
                                <PostGridItem title={post.title}
                                              description={post.description}
                                              date={post.date}
                                              tags={post.tags}
                                              href={`/posts/${post.id}`}/>
                            </section>
                        ))
                    }
                </SimpleGrid>
            </Container>
        </>
    );
};

export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: {
            posts
        },
        revalidate: 300
    };
}

export default Posts;
