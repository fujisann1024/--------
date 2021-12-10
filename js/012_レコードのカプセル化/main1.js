const orgnaization = new Orgnaization({name: "Acme Gooseberries", country: "GB"});

//View
var result
result = `<h1>${getOrgnaization().name}</h1>`;


//Controller
var newName = "NY";
getOrgnaization().name = newName

//function getRowDataOfOrgnaization(){return orgnaization._data;}
function getOrgnaization(){return orgnaization;}

class Orgnaization{
    constructor(data){
        this._data = data;
    }
    get name(){return this._data.name;}
    set name(aString) {return this._data.name = aString;}
}