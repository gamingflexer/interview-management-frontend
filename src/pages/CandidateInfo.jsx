import { React, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function CandidateInfo() {
  const params = useParams();
  const userId = params.userId;

  const navigate = useNavigate();

  const location = useLocation();
  const isDisabled = location.state.isDisabled;
  console.log(isDisabled);

  // Candidate Data API
  const CANDIDATE_PROFILE_URL =
    "https://game-of-thrones-quotes.herokuapp.com/v1/random";
  const [candidateData, setCandidateData] = useState("");
  useEffect(() => {
    async function fetchCandidateData() {
      const request = await axios.get();
      setCandidateData(request.data);
      //console.log(request);
      return request;
    }
    fetchCandidateData();
    return;
  }, []);

  const questions = [
    { id: 0, q: "Question" },
    { id: 1, q: "Reverse Linked List" },
    { id: 2, q: "Sort Linked List" },
    { id: 3, q: "Bubble Sort" },
    { id: 4, q: "Two Sum" },
  ];

  //console.log(candidateData);

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                JRAIMS
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Details of Candidate {userId} {/* name */}
              </h1>
              <div className="flex mb-4">
                <h1 className="flex-grow text-green-500 border-b-2 border-green-500 py-2 text-lg px-1">
                  Description
                </h1>
              </div>
              <div className="leading-relaxed mb-4">
                <table className="text-left">
                  <tr>
                    <th>Name</th>
                    <td className="text-right">Adwait Gawade</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>agawade20it</td>
                  </tr>
                  <tr>
                    <th>Education</th>
                    <td>B.Tech.</td>
                  </tr>
                  <tr>
                    <th>Experience</th>
                    <td>7 years</td>
                  </tr>
                  <tr>
                    <th>Education</th>
                    <td>B.Tech.</td>
                  </tr>
                </table>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <select className="w-9/12">
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
                    disabled={isDisabled}
                  />
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <select className="w-9/12">
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
                    disabled={isDisabled}
                  />
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <select className="w-9/12">
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
                    disabled={isDisabled}
                  />
                </span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Total
                </span>
                <button
                  className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                  onClick={() => navigate("../", { replace: true })}
                >
                  Edit
                </button>
                <button
                  className="flex ml-2 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                  onClick={() => navigate("../", { replace: true })}
                >
                  OK
                </button>
              </div>
            </div>
            <img
              alt="candidate"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://cdn1.iconfinder.com/data/icons/human-resources-1-6/128/76-1024.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
