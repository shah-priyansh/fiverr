import React from 'react';
import { Chat } from '../../../assets/svgs/chat';
import { Dots } from '../../../assets/svgs/dots';

const styles = {
  upperContainer: {},
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    flex: 1,
    marginTop: '1rem',
    borderRadius: '5px',
  },
  dotContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '1.5rem',
    padding: '0 1rem',
  },
  dot: {
    width: '1rem',
    height: 'auto',
    cursor: 'pointer',
    fill: 'current',
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginInline: '0.8rem',
    marginBottom: '1rem',
  },
  imageContainer: {
    display: 'flex',
    width: '4rem',
    height: '4rem',
    borderRadius: '5px',
    border: '2px solid #efefff',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  image: {
    borderRadius: '5px',
    width: 'inherit',
    height: 'inherit',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  todosBox: {
    margin: '1rem 0.5rem',
    padding: '0.5rem',
    backgroundColor: '#f5f5f5',
  },
  chip: {
    borderRadius: '30px',
    display: 'flex',
    padding: '0.1rem 0.5rem',
    fontSize: '0.7rem',
    fontWeight: '600',
    justifyContent: 'center',
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  days: {
    color: '#9FAfAf',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginTop: '0.5rem',
    textAlign: 'right',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0.1rem 0.8rem',
    color: 'grey',
  },
  sectionHeader: {
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  userContainer: {},
  userIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    padding: '0.5rem',
    cursor: 'pointer',
  },
};

export const OrderCard = ({ props, clicked, toggle }) => {
  const getChipColor = (status) => {
    switch (status) {
      case 'new':
        return '#FFECD1';
      case 'progress':
        return '#CED8F4';
      case 'waiting':
        return '#F1C9DD';
      case 'completed':
        return '#C5F0DC';
      default:
        return '#FFECD1';
    }
  };

  return (
    <div style={styles.container}>
      <div styles={styles.upperContainer}>
        <div style={styles.dotContainer}>
          <Dots style={styles.dot} onClick={toggle} />
        </div>
        <div style={styles.statusContainer}>
          <div style={styles.imageContainer}>
            <img src={props.image} style={styles.image} alt="product" />
          </div>
          <div style={styles.detailsContainer}>
            <div style={styles.chipContainer}>
              <div
                style={{
                  ...styles.chip,
                  backgroundColor: getChipColor(props.status),
                }}
              >
                {props.currentStatus}
              </div>
            </div>
            <div style={styles.days}>{props.days}</div>
            <div style={styles.days}>
              {`${props.hours} hrs`} |
              <span style={{ color: 'black' }}>{` $${props.amount}`}</span>
            </div>
          </div>
        </div>
        {clicked && (
          <div style={styles.category}>
            <div style={styles.todosBox}>
              <div style={styles.checkboxContainer}>
                <input type="checkbox" />
                <div
                  style={{
                    ...styles.todoTax,
                    textDecoration: 'line-through',
                    color: 'grey',
                  }}
                >
                  Reply to John's message
                </div>
              </div>
              <div style={{ ...styles.checkboxContainer, color: '#5e5454' }}>
                <input type="checkbox" />
                <div style={styles.todoTax}>Send a draft</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          backgroundColor: '#efefff',
          height: '1px',
        }}
      />
      <div style={styles.bottomSection}>
        <div style={styles.sectionHeader}>View Order</div>
        <div style={styles.rightSection}>
          <div>
            <Chat style={styles.dot} />
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
      </div>
    </div>
  );
};
