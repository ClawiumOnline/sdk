const WorkerAgent = require("../agents/WorkerAgent");

class Concurrent{

    async run(){

        const agent1 = new WorkerAgent("Agent-A");
        const agent2 = new WorkerAgent("Agent-B");

        await Promise.all([

            agent1.execute("Task A"),
            agent2.execute("Task B")

        ]);

    }

}

module.exports = Concurrent;
