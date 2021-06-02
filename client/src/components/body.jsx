import React, { useState, useEffect}  from 'react'
import ReactDOM from 'react-dom';
import CreateTable  from './table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


export default function Body() {
    const [input, setInput] = useState(''); // validar on submit apenas. 
    const [status, setStatus] = useState(false);
    const [ips, setIps] = useState({ips : []});
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
            if (regex.test(input)) {
                setStatus(true);
            } else {
                setStatus(false);
            }
    }, [input]);

    useEffect(() => {

        if(status){
            setIps({ips: input.toString().match(regex)});
        } 

    }, [status,input]);

    function handleSubmit() {

        if(ips.ips){

            //var tabledivs = document.getElementById("tablediv");
            //    if(tabledivs){
            //        tabledivs.remove();
            //    }

            const options = {
                method: 'POST',
                body: JSON.stringify(ips),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            // send post request and call function
            fetch('http://localhost:3001/query', options)
                .then(res => res.json())
                .then(res => setAnswer(res))
                .catch(err => console.error(err));
        }
    }

    useEffect(() => {

        if(answer){
            ReactDOM.render(
                <CreateTable content={answer}/>,
              document.getElementById("table"),
            )
        } 
    }, [answer]);


    function clearTable() {
            setAnswer('')
      }

    return (
        <Container className="p-3">

            <Row className="text-center pb-4">
        
                <h1 className="display-1 al pb-3">Logo here</h1>
                <p className="text-center"><small>Analyze suspicious IPs to detect types of malware and reputation</small></p>

            </Row>

            <Row className="justify-content-center">
                <Row className="shadow p-3 mb-5 bg-body rounded-3" style={{maxWidth: "50em"}}>
                    <Container className="text-left">
                        <Row className="shadow-none p-3 bg-light rounded">
                            <Col className="display-6">
                                <u style={{textDecorationColor: "#0d6efd"}}>Search</u> 
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-4">
                        <Form.Group>
                            <textarea type="text" style={{resize:"none"}} className="form-control" rows="10" placeholder="x.x.x.x,x.x.y.y" value={input} onInput={e => setInput([e.target.value])}></textarea>
                        </Form.Group>
                        <Row className="p-4 text-center justify-content-md-center">
                            <Col></Col>
                            <Col><Button className="rounded" style={{width: "10em"}} id="submit" onClick={handleSubmit}>Submit</Button></Col>
                            <Col><Button variant="outline-primary" className="rounded" style={{width: "10em"}} onClick={clearTable}>Reset</Button></Col>
                            <Col></Col>
                        </Row>
                        <Row className="text-center justify-content-md-center">
                            <p><small>This line of text is meant to be treated as fine print.</small></p>
                        </Row>
                    </Container>
                </Row>
            </Row>
            <Container id="table" />
        </Container>
    );
}

const regex  = RegExp(/(\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3})/g);
