import { Button } from "@chakra-ui/react";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Candidates(props) {
  const candidateInfo = props.candidateInfo;
  return (
    <>
      {candidateInfo.map((candidate) => (
        <Tr>
          <Td>{candidate.id}</Td>
          <Td>{candidate.name}</Td>
          <Td>{candidate.email}</Td>
          <Td>{candidate.exp}</Td>
          <Td>{candidate.edu}</Td>
          <Td>{candidate.nexp}</Td>
          <Td className="candidate__buttons" style={{ display: "inline" }}>
            <Link
              to={`/candidate/${candidate.id}`}
              state={{ isDisabled: true }}
            >
              <Button style={{ marginBottom: 10 }}>View</Button>
            </Link>

            <Link
              to={`/candidate/${candidate.id}`}
              state={{ isDisabled: false }}
            >
              <Button style={{ marginBottom: 10 }}>GRADE</Button>
            </Link>

            <Button style={{ marginBottom: 10 }}>Remove</Button>
          </Td>
        </Tr>
      ))}
    </>
  );
}
