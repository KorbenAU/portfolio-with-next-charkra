import React, {useRef, useState, Suspense} from "react";
import {Box, Spinner} from "@chakra-ui/react";
import {Canvas, useFrame, extend, useThree, useLoader} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

extend({OrbitControls});

const modelPath = "/3DModels/working_hard/scene.gltf";

const HardWorkModel = () => {
    const refContainer = useRef();

    const TheModel = (props) => {
        const model = useLoader(GLTFLoader, modelPath);
        const refTheModel = useRef();

        useFrame((state) => {
            refTheModel.current.rotation.y += 0.01;
        });

        return (
            <primitive ref={refTheModel}
                       object={model.scene}
                       {...props}/>
        );
    };

    const Orbit = (props) => {
        const {camera, gl} = useThree();
        return (
            <orbitControls args={[camera, gl.domElement]}/>
        );
    };

    const TheCube = props => {
        const refTheCube = useRef();
        useFrame((state) => {
            refTheCube.current.rotation.y += 0.01;
        });
        return (
            <mesh castShadow={true} ref={refTheCube} {...props}>
                <boxBufferGeometry args={[1, 1, 1]}/>
                <meshPhysicalMaterial color={"gray"}/>
            </mesh>
        );
    };

    const Floor = props => {
        return (
            <mesh receiveShadow={true} {...props}>
                <boxBufferGeometry args={[3, 0.01, 3]}/>
                <meshPhysicalMaterial color={"White"}/>
            </mesh>
        );
    };

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
             at={["-20px", "-60px", "-120px"]}
             mb={["-40px", "-140px", "-200px"]}
             w={[280, 480, 640]}
             h={[280, 480, 640]}
             position={"relative"}
        >
            <Canvas colorManagement shadowMap={true} camera={{position: [3, 1.5, 3]}}>
                <Suspense fallback={<TheSpinner/>}>
                    {/*    <TheModel position={[0, 0.5, 0]}/>*/}

                    <TheCube position={[0, 1, 0]}/>
                    <ambientLight intensity={0.25} castShadow={true}/>
                    <spotLight castShadow={true}
                               shadow-mapSize-height={512}
                               shadow-mapSize-width={512}
                               // color="Yellow"
                               intensity={0.8}
                               position={[2, 6, -1]}
                    />
                    <Orbit/>
                    <axesHelper args={[3]}/>
                    <Floor position={[0, 0, 0]}/>
                </Suspense>
            </Canvas>
        </Box>
    );
};

export default HardWorkModel;
