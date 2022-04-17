import React from 'react';
import { Form } from 'react-bootstrap';
import './Calender.css'

const Calender = () => {
    return (
        <div className='calender-container'>
            <h3>Dashboard</h3>
            <div className='select-calender'>
                <Form.Select aria-label="Default select example">
                    <option>All campaigns</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
        </div>
    );
};

export default Calender;