import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//import "../styles/User.css"
import axios from "axios";
import { useState } from "react";
import "../styles/Quiz.css"

// to display users from backend
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // mounting
  // to get users from backend
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `https://smooth-swanky-watch.glitch.me/api/questions`
        );
        console.log(response.data.questions);
        setQuestions(response.data.questions);
      } catch (err) {
        alert("something went wrong in  fetching Questions");
      }
    };
    fetchQuestion();
  }, []);

  return (
    // to display  user to frontend
    <div>
      <h1> Take the Quiz</h1>

      {isLoading && <h3>Loading</h3>}
      {error && <h3>{error}</h3>}
      {questions.map((ques) => {
        return (
          <div style={{ backgroundColor:" SkyBlue" ,  width: " 600px" ,display:"grid" , margin: " 10px", borderRadius:" 10px", gridTemplateColumns:"auto"}} key={ques.id}>
            <div>
              <p>
                {" "}
                Q. no {ques.id} {ques.question}
              </p>
            </div>
            <div id="Option"  style={{ display: "grid" , gridTemplateRows:"auto auto auto auto" , Border: " 1px solid grey", width:" 60%" , margin: " auto" , }} >
              {" "}
              {ques.options.map((opt) => {
                return (
                  <>
                    <button type="radio" styles={ { color: "red" , displayl:" flex" ,  Border: " 1px solid grey" ,justifyContent:"row", marginTop: "10px"}} > {opt}</button>
                  </>
                );
              })}
            </div >
            <button style={ { color: " white", backgroundColor:"skyblue" , width:"40%" , margin:" auto"}}> Hide Answer</button>
          </div>
        );
      })}
    </div>
  );
};
export default Quiz;
