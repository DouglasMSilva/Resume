import styles from './Header.module.css';

import { FaWhatsapp, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Header = () => {
  const contact = [
    { 
      name: 'WhatsApp', 
      icon: <FaWhatsapp />, 
      link: 'https://wa.me/5521983632055', 
      display: '(21) 98363-2055' 
    },
    { 
      name: 'Gmail', 
      icon: <FaGoogle />, 
      link: 'mailto:melosilvadouglas7@gmail.com', 
      display: 'melosilvadouglas7@gmail.com' 
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub />, 
      link: 'https://github.com/DouglasMSilva' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />, 
      link: 'https://linkedin.com/in/seu-perfil' 
    }
  ];

  return (
    <div className={styles.header}>
      <h1>Douglas Melo Silva</h1>
      <img src='/assets/photo2.jpeg' style={{width: '300px', height: '300px', marginTop: -10}}/>
      <span>&lt;FRONT-END DEVELOPER|JR./&gt;</span>
      <hr />
      <div className={styles.contact}>
        <h2>Contato</h2>
        {contact.map((item, index) => (
          <div key={index} className={styles.links}>
            <i className={styles.icon}>{item.icon}</i>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.display || item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
