import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
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
      message:
        "Please write your complaint against the illegal activities",
        user:true,
      trigger: "Location",
    },
    {
      id: "Location",
      message: "Please enter the location where you saw the event happening?",  
      user:true,
      trigger:"Thankyou",
    },
    {
      id: "Asking for Crimes after illegal activities",
      message: "Do you want to report any  crimes as well? ", 
      options: [
        { value: true, label: "Yes", trigger: "Asking for crimes in your locality" },
        { value: false, label: "No", trigger: "Done" }
      ]
    },
    {
      id: "Asking for crimes in your locality",
      message: "Please write your Crime report here...",
      user: true,
      trigger: "Location",
    },
    // {
    //   id: "Crime Report",
    //   message: "Enter your location",
    //   user:true,
    //   trigger:"Thankyou",
    // },
    {
      id: "Location",
      message: "Please enter the location where you saw the event happening?",  
      user:true,
      trigger:"Thankyou",
    },
    {
      id: "Thankyou",
      message: "Thankyou! for your complaint. We are working hard to look into your complaint",
      trigger: "Done",
    },

    // {
    //   id: "Asking for Mushroom in Pizza",
    //   message: "Would you like to have mushroom in your pizza",
    //   trigger: "Adding Mushroom in Pizza",
    // },

    // {
    //   id: "Adding Mushroom in Pizza",
    //   options: [
    //     {
    //       value: true,
    //       label: "Yes",
    //       trigger: () => {
    //         props.eventHandler("mushroom");
    //         return "Asking for Corn in Pizza";
    //       }
    //     },
    //     { value: false, label: "No", trigger: "Asking for Corn in Pizza" }
    //   ]
    // },
    // {
    //   id: "Asking for Corn in Pizza",
    //   message: "Would you like to have corn in your pizza",
    //   trigger: "Adding Corn in Pizza"
    // },

    // {
    //   id: "Adding Corn in Pizza",
    //   options: [
    //     {
    //       value: true,
    //       label: "Yes",
    //       trigger: () => {
    //         props.eventHandler("corn");
    //         return "Asking for Veggies in Pizza";
    //       }
    //     },
    //     { value: false, label: "No", trigger: "Asking for Veggies in Pizza" }
    //   ]
    // },

    // {
    //   id: "Asking for Veggies in Pizza",
    //   message: "Would you like to have veggies in your pizza",
    //   trigger: "Adding Veggies in Pizza"
    // },

    // {
    //   id: "Adding Veggies in Pizza",
    //   options: [
    //     {
    //       value: true,
    //       label: "Yes",
    //       trigger: () => {
    //         props.eventHandler("veggie");
    //         return "Done";
    //       }
    //     },
    //     { value: false, label: "No", trigger: "Done" }
    //   ]
    // },
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
