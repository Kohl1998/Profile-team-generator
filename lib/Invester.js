const Employee = require("./Employee")

class Invester extends Employee {
    constructor(name, id, email, Investment, startup) {
    super(name, id, email)
    this.Investment = Investment
    this.startup = startup
}

getRole(){
    return 'Investor'
}

getInvestment () {
    return this.Investment
}

getStartup () {
    return this.startup 
    }

}

module.exports = Invester