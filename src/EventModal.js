import React from 'react';
import './Modal.css';

const EventModal = ({ event, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{event.name}</h2>
                <p>{event.date} - {event.location}</p>
                <p>{event.description}</p>
                <img src={`/${event.image}`} alt={event.name} style={{ maxWidth: '100%' }} />
                <br />
                <a href={event.locationUrl} target="_blank" rel="noopener noreferrer" className="navigate-link">
                    Navigate to Event
                </a>
            </div>
        </div>
    );
};

export default EventModal;
