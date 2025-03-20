// Newsletter.js
import React, { useState } from 'react';

const Newsletter = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    newsletter: {
      backgroundColor: "#1eb2a663",
      padding: "20px 5%", // Adjusted padding
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%", // Take full width
      boxSizing: "border-box",
      textAlign: "left",
    },
    content: {
      color: 'white',
      flex: '1',
      paddingRight: '20px', // Adjusted padding
      width: "100%"
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '14px',
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      flex: '1',
      justifyContent: 'flex-end',
    },
    input: {
      backgroundColor: 'white',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      width: '300px',
    },
    button: {
      backgroundColor: 'white',
      border: '1px solid #ccc',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    buttonHover: {
      backgroundColor: '#e6e6e6',
    },
    icon: {
      fontSize: '16px',
      color: '#66c2b3',
    },
  };

  return (
    <div style={styles.newsletter}>
      <div style={styles.content}>
        <div style={styles.title}>Newsletter - Stay tune and get the latest update</div>
        <div style={styles.description}>Far far away, behind the word mountains</div>
      </div>
      <div style={styles.form}>
        <input type="email" placeholder="Enter email address" style={styles.input} />
        <button
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span style={styles.icon}>&#x27A4;</span>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;