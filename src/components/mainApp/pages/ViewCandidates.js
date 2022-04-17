import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "./ViewCandidates.css";
import Candidates from "./Candidates";
import ViewReport from "./ViewReport";
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
import { Link } from "react-router-dom";

export default function ViewCandidates() {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Adwait",
      email: "adwaitswim@gmail.com",
      contact: "23y80y3010270",
      qualification: "BTech",
      age: "20",
      address: "Thane",
    },
    {
      id: 2,
      name: "Om",
      email: "om@gmail.com",
      contact: "23y80y3010270",
      qualification: "BTech",
      age: "20",
      address: "Gujju",
    },
    {
      id: 3,
      name: "XYZ",
      email: "aaqsq@gmail.com",
      contact: "23y80y3010270",
      qualification: "BTech",
      age: "20",
      address: "Pakistan",
    },
    {
      id: 4,
      name: "blah blah",
      email: "ewfow@gmail.com",
      contact: "fo2qf",
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
