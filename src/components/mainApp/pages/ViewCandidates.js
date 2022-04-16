import { Box, Button } from "@chakra-ui/react";
import React from "react";
import "./ViewCandidates.css";
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

export default function ViewCandidates() {
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Candidate Data</TableCaption>
          <Thead>
            <Tr>
              <Th>Candidate Name</Th>
              <Th>Email</Th>
              <Th>Contact</Th>
              <Th>Qualification</Th>
              <Th isNumeric>Age</Th>
              <Th>Address</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Adwait</Td>
              <Td>adwait@gmail.com</Td>
              <Td>8928727935</Td>
              <Td>B.Tech</Td>
              <Td isNumeric>20</Td>
              <Td>Thane</Td>
              <Td className="candidate__buttons" style={{ display: "inline" }}>
                <Button style={{ marginBottom: 10 }}>View</Button>
                <Button style={{ marginBottom: 10 }}>Take Exam</Button>
                <Button style={{ marginBottom: 10 }}>Remove</Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            {/* <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr> */}
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
