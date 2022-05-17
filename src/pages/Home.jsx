import React from "react";
import ViewCandidates from "./ViewCandidates";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AddNewQuestion from "./AddNewQuestion";
import ViewQuestions from "./ViewQuestions";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Home</Tab>
          <Tab>Add New Question</Tab>
          <Tab>View Candidates</Tab>
          <Tab>View Questions</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ViewCandidates />
          </TabPanel>

          <TabPanel>
            <AddNewQuestion />
          </TabPanel>

          <TabPanel>
            <ViewCandidates />
          </TabPanel>

          <TabPanel>
            <ViewQuestions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
