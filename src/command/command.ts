interface Command {
    execute(): void
}

interface Receive {
    action(): void;
}

interface Invoke {
    runCommand(command?: Command): void;
}



class CommandReceive implements Receive {
    action() {
        console.log('Receive task action');
    }
}

class LaunchCommand implements Command {

    constructor(private receive: Receive) { }
    execute() {
        console.log('Launch!!!');
        this.receive.action();
    }
}

class StopCommand implements Command {
    constructor(private receive: Receive) {
    }

    execute() {
        console.log('Stop')
        this.receive.action();
    }
}


class Invoker implements Invoke {

    constructor(private commands: Command[] = []) { }

    addCommand(command: Command) {
        this.commands.push(command);
    }

    runCommand(command?: Command) {
        if (command) {
            this.commands.push(command);
        }

        const commandOnFire = this.commands.shift();
        commandOnFire.execute();
    }
}


(function () {

    const receive = new CommandReceive();
    const launch = new LaunchCommand(receive);
    const stop = new StopCommand(receive);

    const invoker = new Invoker();
    invoker.addCommand(launch);
    // invoker.runCommand();

    invoker.addCommand(stop);
    invoker.runCommand();
    invoker.runCommand();

})()