import React, { useState } from "react";
import Questions from "../Questions";
import { Button } from "@chakra-ui/react";
import "./ViewCandidates.css";
import "./AddNewCandidate.css";
import { Input } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function AddNewQuestion() {
  var handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.newquestion.value); // from elements property
    //console.log(event.target.username.value); // or directly
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Add New Question</TableCaption>
        <Thead>
          <Tr>
            <Th>SR. No.</Th>
            <Th>Question</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>
              <Input placeholder="Question..." size="lg" id="newquestion" />
            </Td>
            <Td className="candidate__buttons">
              <Button onClick={handleSubmit}>ADD</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default AddNewQuestion;
