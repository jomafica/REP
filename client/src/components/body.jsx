import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const body = () => {

    const input = document.getElementById("ips");
    const submit = document.getElementById("submit")
    let regex  = new RegExp(/(\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3})/g);
    var lista = [];
    
    function inputs(e) {

        if(regex.test(e.target.value)){
            
            lista = e.target.value.match(regex); 
        } 
        else { 
            return lista = []
        } 
    };

    function submits() {

        var tabledivs = document.getElementById("tablediv");
        if(tabledivs){
            tabledivs.remove();
        }

        if(regex.test(lista.toString())){
            console.log("Submited");

            var lst = new Array;

            if(lista.length > 0) {
                var l = lista.length
                for( var i = 0; i < l; i++) {
                    lst.push(lista[i]);
                }
            } else {
                lst = lista
            };

            var json = {ips: lst};

            //const options = {
            //    method: 'POST',
            //    body: JSON.stringify(json),
            //    headers: {
            //        'Content-Type': 'application/json'
            //    }
            //}
            //
            //// send post request and call function
            //fetch('/query', options)
            //    .then(res => res.json())
            //    .then(res => createtable(res))
            //    .catch(err => console.error(err));

        }
    };

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
                            <textarea type="text" style={{resize:"none"}} className="form-control" id="ips" rows="10" placeholder="x.x.x.x,y.y.y.y" onInput={inputs}></textarea>
                        </Form.Group>
                        <Col className="p-4 text-center">
                            <Button className="rounded" style={{width: "10em"}} id="submit" onClick={submits}>Submit</Button>
                            <Button variant="outline-primary" className="rounded" style={{width: "10em"}} id="reset">Reset</Button>
                        </Col>
                    </Container>
                    <p className="text-center"><small>This line of text is meant to be treated as fine print.</small></p>

                </Row>
            </Row> 
        </Container>
    )
}

export default body
