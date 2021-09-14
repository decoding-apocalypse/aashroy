import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "400px",
    height: "500px",
    floating: true
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    botFontSize:"23px",
    userFontSize:"23px",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to report"
    },
    {
      id: "Asking options to report",
      message: "Hi {previousValue}, Please click on what you want to report today!",
      trigger: "Displaying options to report"
    },
    {
      id: "Displaying options to report",
      options: [
        {
          value: "crimes",
          label: "Crimes",
          trigger: "Asking for crimes in your locality"
        },
        { value: "Illegal Activities", label: "Illegal Activities", trigger: "Illegal Activities report" }
      ]
    },
    { 
      id: "Illegal Activities report",
      message: "Enter your complaint against Illegal activities",
      trigger: "Illegal Activities Complaint",
    },
    {
      id:"Illegal Activities Complaint",
      user: true,
      trigger: "Location",
    },
    {
      id: "Location",
      message: "Please Enter your exact location or nearby landmark",
      trigger:"Entering location",
    },
    {
      id: "Entering location",
      user: true,
      trigger:"Thankyou",
    },
    {
      id: "Asking for crimes in your locality",
      message: "Please enter your complaint against Crimes..",
      trigger: "Illegal Activities Complaint",
    },
    
    {
      id: "Thankyou",
      message: "Thankyou! for your complaint. We are working hard to look into your complaint",
      trigger: "Done",
    },

    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
