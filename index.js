const Orchestrator = require("./engine/Orchestrator");
const Sequential = require("./workflows/Sequential");

const orchestrator = new Orchestrator();

const workflow = new Sequential();

orchestrator.run(workflow);
