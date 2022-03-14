import { Center, Container, ScrollArea, SimpleGrid } from "@mantine/core";
import React from "react";
import useDOMTitle from "react-use-dom-title-hook";
import "./index.css";
import Playground from "./Playground";
import ScheduledComponent from "./ScheduledComponent";
import TextInputComponent from "./TextInputComponent";
import { TitleComponentExample } from "./TitleComponent";
export default function DemoApp() {
  useDOMTitle("Demo for react-use-dom-title-hook");

  return (
    <ScrollArea style={{ height: "100vh" }}>
      <Container style={{ marginTop: 50 }}>
        <Center>
          <SimpleGrid>
            <TextInputComponent />

            <TitleComponentExample />
            <ScheduledComponent
              title="Chained titles"
              titles={["1st title", "2nd title", "3rd title"]}
              schedule={[0, 1, 2, 2, 1, 0]}
            />
            <ScheduledComponent
              title="Removing in the middle does not break the chain"
              titles={["1st title", "2nd title", "3rd title"]}
              schedule={[0, 1, 2, 1, 0, 2]}
            />
            <ScheduledComponent
              title="Same titles form a group"
              titles={["1st title", "Loading...", "Loading...", "2nd title"]}
              schedule={[0, 1, 2, 3, 3, 1, 2, 0]}
            />
            <ScheduledComponent
              title="But they only group when mounted right after each other"
              titles={["1st title", "Loading...", "2nd title", "Loading..."]}
              schedule={[0, 1, 2, 3, 1, 3, 2, 0]}
            />
            <Playground />
            <div style={{ minHeight: "5vh" }} />
          </SimpleGrid>
        </Center>
      </Container>
    </ScrollArea>
  );
}