import React, { useState, useEffect } from "react";
import "./ViewCandidates.css";
import axios from "../api/axios";
import requests from "../api/requests";
import Candidates from "../components/Candidates";
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
  const [candidateInfo, setCandidateInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchCandidates);
      setCandidateInfo(request.data.data);
      return request;
    }
    fetchData();
  }, [candidateInfo]);

  //console.log(candidateInfo);

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Candidate Data</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Candidate Name</Th>
              <Th>Email</Th>
              <Th>Experience</Th>
              <Th>Education</Th>
              <Th>Years Of Experience</Th>
              <Th>Achievements</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Candidates candidateInfo={candidateInfo} />
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
