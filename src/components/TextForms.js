import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const [retrieveString, setRetrieveString] = useState("");

  const uppercaseClick = () => {
    if (text === "")
      props.showAlert("Console already has no content.", "primary");
    setText(text.toUpperCase());
  };
  const lowercaseClick = () => {
    if (text === "")
      props.showAlert("Console already has no content.", "primary");
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const countWords = () => {
    return text.split(" ").filter(function (n) {
      return n !== "";
    }).length;
  };
  const countPara = () => {
    return text.split("\n").filter(function (n) {
      return n !== "";
    }).length;
  };

  const capitalize = (input, lowercaseBefore) => {
    input = input === undefined || input === null ? "" : input;
    if (lowercaseBefore) {
      input = input.toLowerCase();
    }
    const newStr = input
      .toString()
      .replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
        return separator + char.toUpperCase();
      });

    setText(newStr);
  };

  const copyHandler = async () => {
    let copyText = document.getElementsByClassName("my-textarea")[0];
    copyText.setAttribute("inputmode", "none");
    await copyText.focus();
    await copyText.select();
    await copyText.setSelectionRange(0, 99999);
    try {
      document.execCommand("copy");
    } catch (error) {
      console.log(error);
    }
  };

  const voice = () => {
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[115];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1.1;
    msg.pitch = 0.8;
    msg.text = text;
    msg.lang = "en-US";
    speechSynthesis.speak(msg);
  };

  return (
    <>
      <div className="mx-2">
        <div className="container my-3">
          <h1 className="text-left">
            <em>{props.heading}</em>
          </h1>
          <div className="mb-3">
            <textarea
              className={`form-control my-textarea my-3 bg-${
                props.mode === false ? "light" : "dark"
              } text-${props.mode === false ? "dark" : "light"}`}
              id="myTextarea"
              rows="4"
              value={text}
              onChange={handleOnChange}
              placeholder="Text here."
              spellCheck="false"
              onClick={function () {
                let myTextarea =
                  document.getElementsByClassName("my-textarea")[0];
                myTextarea.setAttribute("inputmode", "text");
              }}
            ></textarea>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-center my-4">
            <div>
              <button
                className="mb-4 btn btn-primary my-btn mx-3"
                onClick={uppercaseClick}
              >
                Uppercase
              </button>
              <button
                className="mb-4 btn btn-success my-btn mx-3"
                onClick={lowercaseClick}
              >
                lowercase
              </button>
            </div>
            <div>
              <button
                className="mb-4 btn btn-info my-btn mx-3"
                onClick={() => {
                  if (text === "")
                    props.showAlert(
                      "Console already has no content.",
                      "primary"
                    );
                  capitalize(text);
                }}
              >
                Capitalize
              </button>
              <button
                className="mb-4 btn btn-danger my-btn mx-3"
                onClick={async () => {
                  setRetrieveString(text);
                  setText("");

                  text === ""
                    ? props.showAlert(
                        "Console already has no content.",
                        "primary"
                      )
                    : props.showAlert(
                        "Hit retrieve button to undo change.",
                        "danger"
                      );
                }}
              >
                clear
              </button>
            </div>
            <div>
              <button
                className="mb-4 btn btn-secondary my-btn mx-3"
                onClick={async () => {
                  text === ""
                    ? setText(retrieveString)
                    : props.showAlert("Console has content in it.", "warning");
                }}
              >
                retrieve
              </button>
            </div>
          </div>
        </div>
        <div className="container mb-0 text-left">
          <h2>
            <em>Text Summary.</em>
          </h2>
          <div className="d-flex justify-content-between my-3">
            <p>
              <p>
                <strong>{countWords()}</strong> <em>words</em> and{" "}
                <strong>{text.length}</strong> <em>characters.</em>
              </p>
              <p>
                <strong>{countPara()}</strong> <em>paragraphs.</em>
              </p>
            </p>
            <p>
              <strong>{Math.round(countWords() * 0.008)}</strong> min{" "}
              <em>read time.</em>
            </p>
          </div>
        </div>
        <div className="container my-1 text-left">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between preview-box">
              <h2>
                <em>Preview.</em>
              </h2>
              <div className="voice-container">
                <img
                  className="copy-to-clipboard play-button"
                  src={`./play-button-${
                    props.mode === false ? "dark" : "light"
                  }.png`}
                  alt=""
                  onClick={voice}
                />
              </div>
            </div>
            <div className="toolkit-box">
              <div
                className={`toolkit d-flex justify-content-center align-items-center bg-${
                  props.mode === false ? "light" : "dark"
                } text-${props.mode === false ? "dark" : "light"}`}
              >
                Text Copied!
              </div>
              <div className="img-box d-flex justify-content-center align-items-center">
                <img
                  className="copy-to-clipboard"
                  src={`./copy-${props.mode === false ? "dark" : "light"}.png`}
                  alt=""
                  onClick={copyHandler}
                />
              </div>
            </div>
          </div>
          <p className="content-box my-2">
            {
              <div id="copyDiv">
                {text.split("\n").map((e) => (
                  <div>{e}</div>
                ))}
              </div>
            }
          </p>
        </div>
      </div>
    </>
  );
}

TextForms.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForms.defaultProps = {
  heading: "Enter text here.",
};
