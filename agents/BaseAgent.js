class BaseAgent {

    constructor(name){
        this.name = name;
    }

    async execute(task){

        console.log(this.name + " executing:", task);

        return {
            agent: this.name,
            result: "done"
        }

    }

}

module.exports = BaseAgent;
