import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import "./ViewCandidates.css";
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
import { axios, requests } from "../api";

function AddNewQuestion() {
  // Input Field Question Value
  // TODO: Add question to databse
  const [question, setQuestion] = useState("");

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (event) => {
    console.log(question);
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
              <Input
                placeholder="Question..."
                size="lg"
                value={question}
                onChange={handleChange}
              />
            </Td>
            <Td className="candidate__buttons">
              <Button
                onClick={() => {
                  axios.post("/addq=<string:question>=<string:grades>");
                }}
              >
                ADD
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default AddNewQuestion;
