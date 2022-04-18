import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Questions = (props) => {
  const quests = props.quests;

  return (
    <>
      {quests.map((quest) => (
        <Tr>
          <Td>{quest.id} </Td>
          <Td>{quest.title}</Td>
          <Td
            className="candidate__buttons"
            style={{ display: "inline", width: 50 }}
          >
            <Button style={{ marginBottom: 10 }}>Edit</Button>
            <Button style={{ marginBottom: 10 }}>Remove</Button>
          </Td>
        </Tr>
      ))}
    </>
  );
};

export default Questions;