let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

function getDefaultOwner(){return defaultOwner;}
function setDefaultOwner(args){defaultOwner = args;}

spaceship.owner = getDefaultOwner();
setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});