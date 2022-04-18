import React, { useState } from "react";
import Questions from "../Questions";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./ViewCandidates.css";
import "./AddNewCandidate.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function ViewQuestions() {
  const [quests, setQuests] = useState([
    { title: "How To Reverse a Linked List", id: 1 },
    { title: "Explain Micro Services Architecture", id: 2 },
    { title: "What are four pillars of OOP Paradigm", id: 3 },
    { title: "Explain dijkstras algorithm", id: 4 },
  ]);

  return (
    <>
      <TableContainer>
        <Table variant="simple" colorScheme="telegram">
          <TableCaption>Questions</TableCaption>
          <Thead>
            <Tr>
              <Th>Sr. No.</Th>
              <Th>Question</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Questions quests={quests} />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
