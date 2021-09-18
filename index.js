const getGraph = () => {
    let url = 'http://localhost:3000/graph'
    //console.log(url);
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET',url);
    xmlHttp.responseType = 'json';
    xmlHttp.send();
    xmlHttp.onload = () => {
        if(xmlHttp.status != 200){
            console.log('error');
        }
        else{
            let responseGraph = xmlHttp.response();
            //console.log(xmlHttp.response);
        }
    }
}
//adjList is a json of nodes?
const sendGraph = (adjList) => {
    let url = 'http://localhost:3000/graph'
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST',url);
    xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xmlHttp.send(adjList);
}   
document.getElementById("graphbutton").addEventListener("click",getGraph);
