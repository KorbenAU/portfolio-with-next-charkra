import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

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

const SocialButton = ({href, logo, alt}) => {
    return (
        <Link href={href}>
            <a style={{display: "inline-block"}} target={"_blank"}>
                <LogoBox>
                    <Image src={`/logo/${logo}`}
                           width={30}
                           height={30}
                           alt={alt}/>
                </LogoBox>
            </a>
        </Link>
    );
};

export default SocialButton;
