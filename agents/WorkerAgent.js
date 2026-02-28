const BaseAgent = require("./BaseAgent");

class WorkerAgent extends BaseAgent{

    async execute(task){

        console.log("Worker:", this.name);

        return super.execute(task);

    }

}

module.exports = WorkerAgent;
