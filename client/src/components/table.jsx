import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function CreateTable(props) {
    console.log(props.content)
    return (
        //<p>{JSON.stringify(props.content)}</p>
        <Container className="pt-5" id="tablediv">
            <div className="shadow-none pb-3 pt-3 bg-light rounded">
                <Row className="p-3">
                    <div className="shadow-none pb-3 pt-3 bg-light rounded">
                        <Button className="btn-outline-primary rounded" style={{width: "10em"}}>Reset search</Button>
                    </div>
                </Row>
            </div>
            <Table className="table">
               <thead>
                   <th scope="col">{props.content}</th>
               </thead>
               <tbody>
                   {/*linhas */}
               </tbody>
            </Table>
        </Container>    

    );
}
