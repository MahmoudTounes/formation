import React, { useState, useRef, useEffect } from 'react';
import './HeroContent.css';

function HeroContent() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="hero">
      <div className="hero-content">
        {isChatOpen && (
          <div className="chat-box">
            <div className="chat-header">
              <div className="chat-title">Questions ? Chat with us !</div>
              <button className="chat-close" onClick={toggleChat}>
                <img src="/close-icon.png" alt="Fermer la discussion" />
              </button>
            </div>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className="chat-message">
                  {msg}
                </div>
              ))}
              <div ref={messagesEndRef} />
              <div className="message-dot"></div>
              <div className="message-dot"></div>
              <div className="message-dot"></div>
              <div className="message-count">16+</div>
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Compose your message..."
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <div className="chat-actions">
                <button className="chat-action">
                  <img src="/sourire.png" alt="Emoji" />
                </button>
                <button className="chat-action">
                  <img src="/envoyer.png" alt="Image" />
                </button>
                <button className="chat-action">
                  <img src="/mincr.png" alt="Microphone" />
                </button>
              </div>
            </div>
          </div>
        )}
      
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="/Register" className="start-button">Commencer maintenant</a>
          <a href="#" className="message-button" onClick={(e) => { e.preventDefault(); toggleChat(); }}>
            <img src="/message.png" alt="Ouvrir la discussion" className="message-image" />
          </a>
        </div>
        </div>
    
      </section>
      </div>
     
    </div>

  );
  }


export default HeroContent;