import React  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


import Table from "./table"

class body extends React.Component {

    constructor() {
        super();

        this.regex  = RegExp(/(\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3})/g);
        this.state = { 
            inputIp: [],
            enabled: false
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({inputIp: e.target.value.match(this.regex)},
        () => {
            if (this.regex.test(this.state.inputIp)) {
                this.setState({enabled: true});
            } else {
                this.setState({enabled: false});
            }
          }
        ); 
    }

    handleSubmit() {
        var tabledivs = document.getElementById("tablediv");
        if(tabledivs){
            tabledivs.remove();
        }
    
        if(this.state.enabled){
    
            var json = {ips: this.state.inputIp};
    
            const options = {
                method: 'POST',
                body: JSON.stringify(json),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            // send post request and call function
            fetch('http://localhost:3001/query', options)
                .then(res => res.json())
                .then(res => console.log(res)/*createtable(res)*/) // <Table />
                .catch(err => console.error(err));
    
        }
    
    }

    render() {
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
                                <textarea type="text" style={{resize:"none"}} className="form-control" id="ips" rows="10" placeholder="x.x.x.x,y.y.y.y" onInput={this.handleInput}></textarea>
                            </Form.Group>
                            <Col className="p-4 text-center">
                                <Button className="rounded" style={{width: "10em"}} id="submit" onClick={this.handleSubmit}>Submit</Button>
                                <Button variant="outline-primary" className="rounded" style={{width: "10em"}} id="reset">Reset</Button>
                            </Col>
                        </Container>
                        <p className="text-center"><small>This line of text is meant to be treated as fine print.</small></p>

                    </Row>
                </Row>
            </Container>
        );
    }
}

export default body


