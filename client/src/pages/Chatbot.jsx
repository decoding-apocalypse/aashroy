import React, { useEffect } from "react";
import "./css/Chatbot.css";
import "../helper/Chatbot.js"
import "../helper/constants.js"
const AboutUs = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="Chatbot">
     <div id="chat-container" class="chat-container">
		<div id="chat" class="chat">
			
			<div id="chat-messages" class="chat-messages"></div>
			<input id="chat-input" type="text" placeholder="Say something..." autocomplete="off" autofocus="true" />
		</div>
		<img src="bot-2.png" alt="Robot cartoon" height="500vh"/>
	</div>
    </main>
  )
}
export default Chatbot;