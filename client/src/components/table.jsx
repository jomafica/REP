import React, { useMemo, useState }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function CreateTable(props) {

    
    //const map = useMemo(() => {
    //    const newMap = new Map() 
    //    const currentmap = new Map(Object.entries(props.content))
    //    for (let k of currentmap.keys()) {
    //        var keyMap = new Map(Object.entries(currentmap.get(k)))
    //        for( let [key, value] of keyMap){
    //            newMap.set(key,value)
    //        }      
    //    }
    //    return newMap
    //}, [props.content])
    
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
            for(const entry of k.values()){
                console.log(entry)
                return <th scope="col" key={entry}>{entry}</th>
                
            } 
        }
    }
    
    console.log(k)

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
                    <tr>
                        {tableHeader()}
                    </tr>
               </thead>
               <tbody>
                    <tr>
                        {/*map.values(coise => <th scope="col" key={coise.domain}>{coise.domain}</th>)*/}
                    </tr>
               </tbody>
            </Table>
        </Container>    

    );
}
