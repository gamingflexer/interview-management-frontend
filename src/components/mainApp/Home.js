import React from "react";
import ViewCandidates from "./pages/ViewCandidates";
import SignUp from "../SignUp/SignUp";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Home() {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Home</Tab>
        <Tab>Add New Candidate</Tab>
        <Tab>Add New Question</Tab>
        <Tab>View Candidates</Tab>
        <Tab>View Questions</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ViewCandidates />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
