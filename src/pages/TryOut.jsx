import { useState } from "react";

const TryOut = () => {
  const questions = [
    { id: 1, q: "Reverse Linked List" },
    { id: 2, q: "Sort Linked List" },
    { id: 3, q: "Bubble Sort" },
    { id: 4, q: "Two Sum" },
  ];

  const [valueQ1, setValueQ1] = useState("");
  const [valueQ2, setValueQ2] = useState("");
  const [valueQ3, setValueQ3] = useState("");

  const handleChange1 = (e) => {
    setValueQ1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValueQ2(e.target.value);
  };
  const handleChange3 = (e) => {
    setValueQ3(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(valueQ1);
    console.log(valueQ2);
    console.log(valueQ3);
  };

  return (
    <div>
      <div className="flex border-t border-gray-200 py-2">
        {/* Select Question 1 */}
        <select
          className="w-64"
          id="dropdown"
          value={valueQ1}
          onChange={handleChange1}
        >
          {questions.map((ques) => (
            <option key={ques.id} value={ques.q}>
              {ques.q}
            </option>
          ))}
        </select>
        <span className="ml-auto text-gray-900">
          <input
            className="typing-container"
            placeholder={"marks"} /* write total marks */
            //disabled={isDisabled}
          />
        </span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        {/* Select Question 2 */}
        <select
          className="w-64"
          id="dropdown"
          value={valueQ2}
          onChange={handleChange2}
        >
          {questions.map((ques) => (
            <option key={ques.id} value={ques.q}>
              {ques.q}
            </option>
          ))}
        </select>
        <span className="ml-auto text-gray-900">
          <input
            className="typing-container"
            placeholder={"marks"}
            //disabled={isDisabled}
          />
        </span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        {/* Select Question 3 */}
        <select
          className="w-64"
          id="dropdown"
          value={valueQ3}
          onChange={handleChange3}
        >
          {questions.map((ques) => (
            <option key={ques.id} value={ques.q}>
              {ques.q}
            </option>
          ))}
        </select>
        <span className="ml-auto text-gray-900">
          <input
            className="typing-container"
            placeholder={"marks"}
            //disabled={isDisabled}
          />
        </span>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TryOut;
