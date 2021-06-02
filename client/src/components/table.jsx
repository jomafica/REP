import React, { useMemo, useState }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function CreateTable(props) {
    
    const [k,setK] = useState()

    useMemo(() => {
        var kk = new Set()
        Object.keys(props.content).forEach(function(key) {
            var value = props.content[key];
            Object.keys(value).forEach(function(key) {
                kk.add(key)
            })
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

    function tableBody(value) {
        if(k){
            var bodySet = new Set()
            props.content.forEach(            
                for (const [ky, vae] of Object.entries(value)) {
                bodySet.add(tbodyTh(ky,vae))
                }
              )

              console.log(bodySet.values())
              return bodySet
        }
      }
    
    function tbodyTh(keyy,ele){
        return <th scope="col" key={keyy}>{ele}</th>
    }

    return (
        //<p>{JSON.stringify(props.content)}</p>
        <Container className="pt-5" id="tablediv">
            <div className="shadow-none pb-3 pt-3 bg-light rounded">
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
                    <tr>
                        {tableBody()}
                    </tr>
               </tbody>
            </Table>
        </Container>    

    );
}
