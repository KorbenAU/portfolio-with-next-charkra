import React, {useRef, useState, Suspense} from "react";
import {Box, Spinner} from "@chakra-ui/react";
import {Canvas, useFrame, extend, useThree, useLoader} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import Orbit from "./Orbit";

const modelPath = "/3DModels/working_hard/scene.gltf";

const HardWorkModel = () => {
    const refContainer = useRef();

    const TheModel = (props) => {
        const model = useLoader(GLTFLoader, modelPath);
        const refTheModel = useRef();

        useFrame((state) => {
            refTheModel.current.rotation.y += 0.005;
        });

        return (
            <primitive ref={refTheModel}
                       object={model.scene}
                       scale={new Array(3).fill(1.4)}
                       {...props}/>
        );
    };

    // const TheCube = props => {
    //     const refTheCube = useRef();
    //     useFrame((state) => {
    //         refTheCube.current.rotation.y += 0.01;
    //     });
    //     return (
    //         <mesh ref={refTheCube} {...props}>
    //             <boxBufferGeometry args={[1, 1, 1]}/>
    //             <meshPhysicalMaterial color={"gray"}/>
    //         </mesh>
    //     );
    // };
    //
    // const Floor = props => {
    //     return (
    //         <mesh {...props}>
    //             <boxBufferGeometry args={[3, 0.01, 3]}/>
    //             <meshPhysicalMaterial color={"White"}/>
    //         </mesh>
    //     );
    // };

    const TheSpinner = () => {
        return (
            <Spinner size={"xl"}
                     position={"absolute"}
                     left={"50%"}
                     top={"50%"}
                     ml={"calc(0px - var(--spinner-size) / 2)"}
                     mt={"calc(0px - var(--spinner-size))"}
            />
        );
    };

    return (
        <Box ref={refContainer}
             className={"hard-work-model-box"}
             m={"auto"}
             mb={["-50px", "-150px", "-150px"]}
             mt={["-30px", "-50px", "-80px"]}
             w={[280, 480, 640]}
             h={[280, 480, 640]}
             position={"relative"}
        >
            <Suspense fallback={<TheSpinner/>}>
                <Canvas camera={{position: [2, 1.5, 2]}}>
                    <TheModel position={[0, 0.5, 0]}/>
                    {/*<TheCube position={[0, 0, 0]}/>*/}
                    <ambientLight intensity={0.5} color={"0xcccccc"} castShadow={true}/>
                    <spotLight castShadow={true}
                               shadow-mapSize-height={512}
                               shadow-mapSize-width={512}
                               intensity={0.8}
                               position={[2, 6, -1]}
                    />
                    <Orbit enableZoom={false}/>
                    {/*<axesHelper args={[3]}/>*/}
                    {/*<Floor position={[0, 0, 0]}/>*/}
                </Canvas>
            </Suspense>
        </Box>
    );
};

export default HardWorkModel;
