var units = []
var enemyunits = []

function getResults(type) {
    data = httpGet('http://noc.redii.pw:3001/db')
    
    checkUnits(type)
}

function httpGet(url) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", url, false) // true/false for a-/synchronous request
    xmlHttp.send(null)
    //console.log(xmlHttp.responseText)
    return JSON.parse(xmlHttp.responseText)
}

function checkUnits(type) {
    switch(type) {
        case 0:
            var radios = document.getElementsByName('class-select')
            for(i = 0; i < document.getElementById('form1').length - 1; i++) {
                if(radios[i].checked) {
                    switch(radios[i].id) {
                        case 'element':
                            units.push(data.classes.element.units_vanilla)
                            break
                        case 'forsaken':
                            units.push(data.classes.forsaken.units_vanilla)
                            break
                        case 'grove':
                            units.push(data.classes.grove.units_vanilla)
                            break
                        case 'mech':
                            units.push(data.classes.mech.units_vanilla)
                            break
                    }
                }
            }
            console.log("Current Class selected: " + units)
            break

        case 1:
            for(i = 0; i < document.getElementsByName('checkb').length; i++) {
                if(document.getElementsByName('checkb')[i].checked == true) {
                    units.push(document.getElementsByName('checkb')[i].id)
                }
            }
            console.log("Current MM Units selected: " + units)
            break

        case 2:
            for(i = 0; i < document.getElementsByName('checkb2').length; i++) {
                if(document.getElementsByName('checkb2')[i].checked == true) {
                    enemyunits.push(document.getElementsByName('checkb2')[i].id.slice(0, -1))
                }
            }
            console.log("Current Enemy Units selected: " + enemyunits)
            break
    }
}

function test() {
    console.log(units)
}




/* FOR LATER .... */

function getStrongUnits(rounds){

}

function giveStrongMercs(units) { // units array damit auch bei nur einer gegner einheit ein resultat gegeben werden kann
    //for(i = 0; i < )
}

function highlightMercs() {
    
}

function getWeakness(unit) {
    
}
