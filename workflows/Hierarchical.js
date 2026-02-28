const WorkerAgent = require("../agents/WorkerAgent");
const ControllerAgent = require("../agents/ControllerAgent");

class Hierarchical{

    async run(){

        const controller = new ControllerAgent();

        const tasks = controller.control([

            "Task 1",
            "Task 2"

        ]);

        const agent = new WorkerAgent("Main-Agent");

        for(const t of tasks){

            await agent.execute(t);

        }

    }

}

module.exports = Hierarchical;
