let input = [
    {packageId: "item001", type: "S", width: 5, height: 8, length: 2, weight: 5}, 
    {packageId: "item002", type: "L", temperature: 25, weight: 6}, 
    {packageId: "item003", type: "L", temperature: 19, weight: 6}, 
    {packageId: "item004", type: "S", width: 1, height: 15, length: 2, weight: 1}, 
    {packageId: "item005", type: "S", width: 1, height: 1, length: 10, weight: 2}, 
    {packageId: "item006", type: "L", temperature: 25, weight: 10}
]

let doorSize = 7 * 5
let maxWeight = 20
let cargoWidth = 10
let cargoHeight = 10
let cargoLength = 10
let minTemperature = 20
let maxTemperature = 30
let totalWeight = 0

function checkDoor(width, height , length){
    let result = true
    if(width * height > doorSize){
        result = false
    }
    if(result === false){
        if(width * length < doorSize){
            result = true
        }
    }
    if(result === false){
        if(height * length < doorSize){
            result === true
        }
    }
    return result
}

function checkVolume(width, height , length){
    let flag = true
    if(width > cargoWidth){
        flag = false
    }
    if(height > cargoHeight){
        flag = false
    }
    if(length > cargoLength){
        flag = false
    }
    return flag
}

function checkWeight(weight){
    if(weight + totalWeight < maxWeight){
        return true
    } else {
        return false
    }
}

function checkTemperature(temperature){
    if(temperature < minTemperature || temperature > maxTemperature){
        return false
    } else {
        return true
    }
}

function cargo(payload) {
    
    
    // console.log(doorSize)
    let resultCheckDoor
    let resultCheckVolume
    let resultCheckWeight
    let resultCheckTemperature
    let resultCargo = []
    for(let i = 0; i < payload.length; i++){
        // console.log(payload[i].packageId)
        if(payload[i].type === "S"){
            resultCheckDoor = checkDoor(payload[i].width, payload[i].height, payload[i].length)
            resultCheckVolume = checkVolume(payload[i].width, payload[i].height, payload[i].length)
            resultCheckWeight = checkWeight(payload[i].weight)
            // console.log(`${payload[i].packageId}: Door = ${resultCheckDoor}, Volume = ${resultCheckVolume}, Weight = ${resultCheckWeight}`)
            if(resultCheckDoor === true && resultCheckVolume === true && resultCheckWeight === true){
                resultCargo.push(payload[i].packageId)
                totalWeight = totalWeight + payload[i].weight
                console.log(`${payload[i].packageId}: PASS`)
            } else {
                console.log(`${payload[i].packageId}: REJECT`)
            }
        } else if(payload[i].type === "L"){
            resultCheckWeight = checkWeight(payload[i].weight)
            resultCheckTemperature = checkTemperature(payload[i].temperature)
            if(resultCheckWeight === true && resultCheckTemperature === true){
                resultCargo.push(payload[i].packageId)
                totalWeight = totalWeight + payload[i].weight
                console.log(`${payload[i].packageId}: PASS`)
            } else {
                console.log(`${payload[i].packageId}: REJECT`)
            }
        }
    }
    console.log(`Item in Cargo: ${resultCargo}`)
}

cargo(input)
