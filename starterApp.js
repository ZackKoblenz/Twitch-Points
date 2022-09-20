let points = 0;
let subPoints = 10;
let bitPoints = 3;
let donoPoints = 3;

const totalDonos = new inputCreator("dono", 0);
const totalBits = new inputCreator("bits", 0);
const totalSubs = new inputCreator("subs", 0);

function points(input, donoPoints, bitsPoints, subPoints){
    if(input.type == "dono"){
       return input.amount * donoPoints
    }
    else if(input.type == bits){
        return ((input.amount / 100) * bitsPoints).floor
    }
    else if(inpit.type == sub){
        return input.amount * subPoints
    }
}

function inputCreator(type, amount){
    this.type = type;
    this.amount = amount;
}



function inputUpdater(total, newAmount){
    return total[amount] = newAmount;
}
