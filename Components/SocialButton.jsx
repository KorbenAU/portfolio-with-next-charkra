import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader, PopoverTrigger
} from "@chakra-ui/react";

const LogoBox = styled.span`
   font-weight: bold;
   font-size: 18px;
   display: inline-flex;
   align-items: center;
   height: 30px;
   line-height: 20px;
   padding: 0;

   &:hover {
      transform: rotate(20deg);
   }
`;

const SocialButton = ({href, logo, alt, popOver, popOverHead, popOverText}) => {
    if (popOver) {
        return (
            <Popover>
                <PopoverTrigger p={0}>
                    <LogoBox>
                        <Image src={`/logo/${logo}`}
                               width={"30px"}
                               height={"30px"}
                               alt={alt}/>
                    </LogoBox>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverHeader>{popOverHead}</PopoverHeader>
                    <PopoverBody>{popOverText}</PopoverBody>
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Link href={href}>
            <a style={{display: "inline-block"}} target={"_blank"}>
                <LogoBox>
                    <Image src={`/logo/${logo}`}
                           width={"30px"}
                           height={"30px"}
                           alt={alt}/>
                </LogoBox>
            </a>
        </Link>
    );
};

export default SocialButton;
