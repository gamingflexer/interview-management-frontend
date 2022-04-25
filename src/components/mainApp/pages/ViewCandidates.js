import React, { useState } from "react";
import "./ViewCandidates.css";
import Candidates from "./Candidates";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function ViewCandidates() {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Adwait",
      email: "adwaitswim@gmail.com",
      contact: "123456789",
      qualification: "BTech",
      age: "20",
      address: "Thane",
    },
    {
      id: 2,
      name: "Om",
      email: "om@gmail.com",
      contact: "123456789",
      qualification: "BTech",
      age: "20",
      address: "Gujju",
    },
    {
      id: 3,
      name: "XYZ",
      email: "aaqsq@gmail.com",
      contact: "123456789",
      qualification: "BTech",
      age: "20",
      address: "Pakistan",
    },
    {
      id: 4,
      name: "blah blah",
      email: "ewfow@gmail.com",
      contact: "123456789",
      qualification: "BTech",
      age: "20",
      address: "Panvel",
    },
  ]);

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
            <Candidates candidates={candidates} />
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
