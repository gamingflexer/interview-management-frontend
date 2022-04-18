import React, { useState } from "react";
import Questions from "../Questions";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./ViewCandidates.css";
import "./AddNewCandidate.css";
import { Input } from "@chakra-ui/react";
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

function AddNewQuestion() {
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
              <Input placeholder="Question..." size="lg" />
            </Td>
            <Td className="candidate__buttons">
              <Button>ADD</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default AddNewQuestion;
