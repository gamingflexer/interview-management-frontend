import React, { useState } from "react";
import Questions from "../Questions";

function AddNewQuestion() {
  const [quests, setQuests] = useState([
    { title: "How To Reverse a Linked List", id: 1 },
    { title: "Explain Micro Services Architecture", id: 2 },
    { title: "What are four pillars of OOP Paradigm", id: 3 },
    { title: "Explain dijkstras algorithm", id: 4 },
  ]);

  return (
    <div>
      <Questions quests={quests} />
    </div>
  );
}

export default AddNewQuestion;
