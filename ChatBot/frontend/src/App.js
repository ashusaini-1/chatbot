import React, { useRef, useState } from "react";
import "./App.css";
import axios from "axios";

const YOU = "you";
const AI = "ai";

const App = () => {
  //to store any values like objects ,vlaue anything
  const inputRef = useRef();

  const { qna, setQna } = useState([
    //storing the date in this format
    //{from""YPU", value:"",},{from:"AI",value:"",}
    // {from:YOU,value:"FROM ME"},
    // {from:AI,value:["1 message from AI","2 message from AI"]}
  ]);
  const { Loading, setLoading } = useState(false);

  const updateQna = (from, value) => {
    // setQna([...qna,{from,value}]);
    //converted into call back function
    setQna((qna) => [...qna, { from, value }]);
  };

  //to read question heandlsend method is used
  const handleSend = () => {
    const question = inputRef.current.value;
    updateQna(YOU, question);
    setLoading(true);

    // setQna([...qna,{from:YOU,value:question}]);
    // console.log(question);
    axios
      .post("http://localhost:3000/chat", {
        question,
      })
      .then((response) => {
        // setQna([...qna,{from:AI,value:response.data.answer}]);
        // console.log(response.data.answer);
        updateQna(AI, response.data.answer);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderContent = (qna) => {
    const value = qna.value;
    if (Array.isArray(value)) {
      return value.map((v) => <p className="message-text">{v}</p>);
    }
  };

  return (
    <div class="container">
      <div class="chats">
        {qna.map((qna) => {
          if (qna.from === YOU) {
            return (
              <div class="send chat">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2202/220"
                  alt=""
                  class="avtar"
                />
                <p>{renderContent(qna)}</p>

                {/* <p class=""> Hi Bot-</p> */}
              </div>
            );
          }

          return (
            <div class="recieve chat">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/471"
                alt=""
                class="avtar"
              />
              {/* to display values on screen  renderContent(qna) */}
              <p>{renderContent(qna)}</p>

              {/* <p class=""> Hello Human</p>  */}
            </div>
          );
        })}

        <div class="chat-input">
          <input
            type="text"
            ref={inputRef}
            class="form-control col"
            placeholder="Type Something"
          />
          <button
            disabled={Loading}
            class="btn btn-success"
            onClick={handleSend}
          >
            Send
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default App;
