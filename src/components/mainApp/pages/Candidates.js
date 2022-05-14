import "./ViewCandidates.css";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Candidates(props) {
  const candidates = props.candidates;
  return (
    <>
      {candidates.map((candidate) => (
        <Tr>
          <Td>{candidate.name}</Td>
          <Td>{candidate.email}</Td>
          <Td>{candidate.contact}</Td>
          <Td>{candidate.qualification}</Td>
          <Td isNumeric>{candidate.age}</Td>
          <Td>{candidate.name}</Td>
          <Td className="candidate__buttons" style={{ display: "inline" }}>
            <Link to={`/viewreport/${candidate.id}`}>
              <Button style={{ marginBottom: 10 }}>View</Button>
            </Link>

            <Button style={{ marginBottom: 10 }}>GRADE</Button>
            <Button style={{ marginBottom: 10 }}>Remove</Button>
          </Td>
        </Tr>
      ))}
    </>
  );
}
