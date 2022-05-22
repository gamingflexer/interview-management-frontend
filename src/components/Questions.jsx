import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Tr, Td } from "@chakra-ui/react";
import { axios, requests } from "../api";

const Questions = () => {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchQuestions);
      setAllQuestions(request.data.data);
      return request;
    }
    fetchData();
  }, [allQuestions]);

  return (
    <>
      {allQuestions.map((quest) => (
        <Tr key={quest.qid}>
          <Td>{quest.qid} </Td>
          <Td>{quest.questions}</Td>
          <Td className="candidate__buttons">
            <Button
              onClick={() => {
                //axios.post(requests.deleteQuestion`${quest.qid}`);
                //console.log(`${quest.qid}`);
              }}
            >
              Remove
            </Button>
          </Td>
        </Tr>
      ))}
    </>
  );
};

export default Questions;
