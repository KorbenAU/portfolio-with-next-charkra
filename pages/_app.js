import "../styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import MainLayout from "../Components/Layouts/Main";
import theme from "../libs/theme";
import Fonts from "../Components/Fonts";
import {AnimatePresence} from "framer-motion";

function MyApp({Component, pageProps, router}) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <MainLayout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </MainLayout>
        </ChakraProvider>
    );
}

export default MyApp;

