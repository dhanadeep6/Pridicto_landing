import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#6366f1',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6366f1',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello! How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Learn about our services', trigger: '3' },
      { value: 2, label: 'Get a quote', trigger: '4' },
      { value: 3, label: 'Contact us', trigger: '5' },
      { value: 4, label: 'Explore now', trigger: '6' },
    ],
  },
  {
    id: '3',
    message: 'We offer Business Plans, Pitch Decks, Financial Modelling, Market Research, Startup Consulting, and HR Support. Which one interests you?',
    trigger: '2',
  },
  {
    id: '4',
    message: 'Please visit our Contact page to request a proposal. We\'ll get back to you soon!',
    end: true,
  },
  {
    id: '5',
    message: 'You can reach us at info@predicto.ai or visit the Contact page.',
    end: true,
  },
  {
    id: '6',
    message: 'Navigating to home page...',
    trigger: '7',
  },
  {
    id: '7',
    component: <NavigateToHome />,
    end: true,
  },
];

function NavigateToHome() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/');
  }, [navigate]);
  return null;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          cursor: 'pointer',
          fontSize: '24px',
        }}
        onClick={toggleChat}
      >
        🤖
      </div>
      {isOpen && (
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} floating={false} />
        </ThemeProvider>
      )}
    </>
  );
}
