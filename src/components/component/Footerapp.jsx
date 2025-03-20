// Footerapp.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight, FaCalendarAlt, FaUser } from 'react-icons/fa';
import Newsletter from './Newsletter';

function Footerapp() {
  const styles = {
    footer: {
      backgroundColor: '#f8f9fa',
      padding: '50px 0',
      color: '#333',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    section: {
      flex: '1 1 200px',
      marginBottom: '30px',
    },
    logo: {
      marginBottom: '20px',
    },
    logoH2: {
      fontSize: '24px',
      marginBottom: '5px',
    },
    logoP: {
      fontSize: '14px',
      color: '#666',
    },
    socialIcons: {
      marginTop: '20px',
    },
    socialIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#00a99d',
      color: '#fff',
      marginRight: '10px',
    },
    socialIconInner: {
      fontSize: '20px',
    },
    sectionH3: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    list: {
      listStyle: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '10px',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      display: 'inline-flex',
      alignItems: 'center',
    },
    post: {
      display: 'flex',
      marginBottom: '15px',
    },
    postImage: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      marginRight: '15px',
    },
    postH4: {
      fontSize: '16px',
      marginBottom: '5px',
    },
    postP: {
      fontSize: '12px',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '10px',
      color: '#00a99d',
    },
    copyright: {
      textAlign: 'center',
      paddingTop: '30px',
      borderTop: '1px solid #ddd',
      marginTop: '30px',
    },
    arrowIcon: {
      marginLeft: '5px',
      fontSize: '12px',
      color: '#00a99d',
    },
    postIcon: {
      marginRight: '5px',
      color: '#00a99d',
      fontSize: '12px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <Newsletter />
        <div style={styles.section}>
          <div style={styles.logo}>
            <h2 style={styles.logoH2}>ACADEMIA</h2>
            <p style={styles.logoP}>ONLINE EDUCATION & LEARNING</p>
            <p style={styles.logoP}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.socialIcon}><FaFacebookF style={styles.socialIconInner} /></a>
            <a href="#" style={styles.socialIcon}><FaTwitter style={styles.socialIconInner} /></a>
            <a href="#" style={styles.socialIcon}><FaInstagram style={styles.socialIconInner} /></a>
          </div>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionH3}>Explore</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#" style={styles.link}>About Us <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Services <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Courses <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Blog <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Contact Us <FaChevronRight style={styles.arrowIcon} /></a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionH3}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#" style={styles.link}>Contact Us <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Pricing <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Terms & Conditions <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Privacy <FaChevronRight style={styles.arrowIcon} /></a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Feedbacks <FaChevronRight style={styles.arrowIcon} /></a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionH3}>Recent Post</h3>
          <div style={styles.post}>
            <img src="image11.png" alt="Post 1" style={styles.postImage} />
            <div>
              <h4 style={styles.postH4}>Build your Dream Software & Engineering...</h4>
              <p style={styles.postP}><FaCalendarAlt style={styles.postIcon} /> JAN. 18, 2021 <FaUser style={styles.postIcon} /> Admin</p>
            </div>
          </div>
          <div style={styles.post}>
            <img src="image9.png" alt="Post 2" style={styles.postImage} />
            <div>
              <h4 style={styles.postH4}>Build your Dream Software & Engineering...</h4>
              <p style={styles.postP}><FaCalendarAlt style={styles.postIcon} /> APR 25, 2022 <FaUser style={styles.postIcon} /> Admin</p>
            </div>
          </div>
          <div style={styles.post}>
            <img src="image10.png" alt="Post 3" style={styles.postImage} />
            <div>
              <h4 style={styles.postH4}>Build your Dream Software & Engineering...</h4>
              <p style={styles.postP}><FaCalendarAlt style={styles.postIcon} /> MAY 15, 2022 <FaUser style={styles.postIcon} /> User</p>
            </div>
          </div>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionH3}>Have a Questions?</h3>
          <p><FaMapMarkerAlt style={styles.icon} /> 203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p><FaPhoneAlt style={styles.icon} /> +2 392 3929 210</p>
          <p><FaEnvelope style={styles.icon} /> info@yourdomain.com</p>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>Copyright ©2022 All rights reserved | This template is made with ❤️ by GorkhCoder</p>
      </div>
    </footer>
  );
}

export default Footerapp;