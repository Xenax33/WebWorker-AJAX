import React , {useState} from "react";
import { TypeAnimation } from "react-type-animation";

export default function Heading(props) {
    const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <div  style={{marginTop : '90px'}}>
    <div className="container-fluid my-3 mainText" style={{marginTop : '90px'}}>
        <TypeAnimation
          sequence={[
            1500,
            () => {
              setTypingStatus("Typing...");
            },
            props.Heading,
            () => {
              setTypingStatus("Done Typing");
            },
            1000,
            () => {
              setTypingStatus("Deleting...");
            },
            "",
            () => {
              setTypingStatus("Done Deleting");
            },
          ]}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
