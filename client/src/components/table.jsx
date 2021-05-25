/* import React, { useState, useEffect}  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; */

export default function Table(props) {
    console.log({props})
    return (
        <p>{JSON.stringify(props.content)}</p>
    );
}
