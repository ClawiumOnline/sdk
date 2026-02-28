const WorkerAgent = require("../agents/WorkerAgent");

class Sequential{

    async run(){

        const agent = new WorkerAgent("Agent-1");

        await agent.execute("Task 1");
        await agent.execute("Task 2");
        await agent.execute("Task 3");

    }

}

module.exports = Sequential;
