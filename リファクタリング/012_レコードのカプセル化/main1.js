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
        this._name = data.name;
        this._country = data.country;
    }
    get name(){return this._name;}
    set name(aString) {return this._name = aString;}
    get country(){return this.country;}
    set country(aCountryCode){this._country = aCountryCode;}
}