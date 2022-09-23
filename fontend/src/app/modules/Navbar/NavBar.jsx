import React from 'react';
import { Fiverr } from '../../../assets/svgs/fiverr';
import { navBar } from '../../../data';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    flex: 1,
    width: '100%',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    paddingLeft: '2rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    marginLeft: '3rem',
    alignItems: 'center',
    height: '100%',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
    paddingBlock: '1.2rem',
  },
  userContainer: {
    paddingRight: '2rem',
  },
  userIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    padding: '0.5rem',
    cursor: 'pointer',
  },
};

export const NavBar = () => {
  return (
    <div className="nav_main" style={styles.container}>
      <div style={styles.main}>
        <div style={styles.logo}>
          <Fiverr />
        </div>
        <div style={styles.nav}>
          {navBar.navItems.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  ...styles.navContainer,
                  borderBottom: item.active === true ? '2px solid #1EC074' : '',
                }}
              >
                <a
                  key={index}
                  style={{
                    ...styles.navItem,
                    color: item.active === true ? '#1EC074' : '#9FA2A6',
                  }}
                  href={item.link}
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="user_image_container" style={styles.userContainer}>
        <img
          style={styles.userIcon}
          src="https://randomuser.me/api/portraits/men/75.jpg"
          className="user"
          alt=""
        />
      </div>
    </div>
  );
};
