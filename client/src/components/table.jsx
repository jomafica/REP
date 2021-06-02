import React, { useMemo, useState }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function CreateTable(props) {
    
    const [k,setK] = useState()
-
    useMemo(() => {
        var kk = new Set()
        var vv = new Map()
        Object.keys(props.content).forEach(function(key) {
            var value = props.content[key];
            Object.keys(value).forEach(function(key) {
                Object.values(value).forEach(function(val) {
                    vv[key] = val
                })
                kk.add(key)
            })
            tableBody(vv)
        });
        setK(kk)
    }, [props.content])


    function tableHeader(){
        if(k){
            var headerSet = new Set()
            for(const entry of k.values()){
                headerSet.add(theadTd(entry))
            }
            return headerSet 
        }
    }

    function theadTd(elem){
        return <th scope="col" key={elem}>{elem}</th>
    }

    function tableBody(val){
        if(val){
            var bodySet = new Set()
            for(const entry of val.values()){
                bodySet.add(theadTh(entry))
            }
            return <tr>{bodySet}</tr>
        }
    }

    function theadTh(elem){
        return <th scope="col" key={elem}>{elem}</th>
    }

    return (
        //<p>{JSON.stringify(props.content)}</p>
        <Container className="pt-5" id="tablediv">
            <div className="shadow-none pb-2 pt-2 bg-light rounded">
                <Row className="p-3">
                    <div className="shadow-none pb-2 pt-2 bg-light rounded">
                        <Button  variant="outline-primary" className="rounded" style={{width: "10em"}}>Reset search</Button>
                    </div>
                </Row>
            </div>
            <Table responsive="sm" className="table">
               <thead>
                    <tr>
                        {tableHeader()}
                    </tr>
               </thead>
               <tbody>
                        {tableBody()}
               </tbody>
            </Table>
        </Container>    

    );
}
