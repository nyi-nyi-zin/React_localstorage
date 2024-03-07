import React from "react";
import Nav from "./Nav";
import FlutterImg from "../images/Flutter.png";
import styled from "styled-components";
import JavaImg from "../images/Java.png";
import nodeImg from "../images/NodeJs.png";
import { Button } from "../styles/shares";

const FlexDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);
`;

const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>Brighter Myanmar</h1>
          <h4 style={{ marginTop: "10px" }}>
            Professional Computer Programming Class
          </h4>
          <Button>Download APK</Button>
        </Flex>
        <Flex>
          <img src={FlutterImg} alt="ads" width="80%" />
        </Flex>
      </FlexDiv>

      <FlexDiv>
        <Flex>
          <img src={JavaImg} alt="ads" width="80%" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            distinctio, recusandae natus ad, amet ipsam et officia voluptates
            ipsum molestias ducimus omnis voluptatibus nam nobis, quaerat
            asperiores magni dolor suscipit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora distinctio,
          </p>
        </Flex>
      </FlexDiv>

      <FlexDiv>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            distinctio, recusandae natus ad, amet ipsam et officia voluptates
            ipsum molestias ducimus omnis voluptatibus nam nobis, quaerat
            asperiores magni dolor suscipit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora distinctio,
          </p>
        </Flex>
        <Flex>
          <img src={nodeImg} alt="ads" width="80%" />
        </Flex>
      </FlexDiv>
    </>
  );
}
