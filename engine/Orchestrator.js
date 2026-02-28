const Logger = require("../observability/Logger");
const Monitor = require("../observability/Monitor");

class Orchestrator{

    async run(workflow){

        Logger.log("Workflow started");

        await workflow.run();

        Monitor.track("Workflow finished");

    }

}

module.exports = Orchestrator;
