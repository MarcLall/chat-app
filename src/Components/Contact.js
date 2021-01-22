import React from 'react'
import './Contact.css'
import PropTypes from 'prop-types';

function Contact (props) {
    return (
        <div className="Contact">
            <img className="avatar" alt="Contact" src={props.avatar}
            />
            <div className="status">
                <div className="name"> {props.name}
                </div>
                <div className={props.online ? "status-online" : "status-offline"}>
                </div>
                <div  className="status-text">{props.online ? "online" : "offline"}
                </div>
            </div>
        </div>
    );
}

export default Contact

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
  };