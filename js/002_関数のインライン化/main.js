//////////////////////パターンA/////////////////
function rating(aDriver){
    return moreThanFiveLateDriveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDriveries(dvr){
    return dvr.numberOfLateDelivers > 5;
}
//////////////////////////////////////////////////

///////////////////パターンB///////////////////////
function reportLines(aCustomer){
    const lines = [];
    lines.push(["name",aCustomer.name]);
    gatherCustomer(lines, aCustomer);
    return lines;
}

function gatherCustomer(out, aCustomer){
    out.push(["name",aCustomer.name]);
    out.push(["location",aCustomer.location]);
}
//////////////////////////////////////////////////
