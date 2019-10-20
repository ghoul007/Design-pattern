interface State {
    action(com: Computer): void
}


class Computer {
    state: State;
    action() {
        this.state.action(this);
    }
    setAction(state: State) {
        this.state = state
    }
}

class Start implements State {
    action(com: Computer): void {
        console.log("Start computer")
        com.setAction(this);
    }
}

class Stop implements State {
    action(com: Computer): void {
        console.log("Stop computer")
        com.setAction(this);
    }
}


class Sleep implements State {
    action(com: Computer): void {
        console.log("Sleep computer")
        com.setAction(this);
    }
}


(function(){
    let computer = new Computer();

    computer.state = new Start();
    computer.action();

    computer.state = new Sleep();
    computer.action();

    computer.state = new Stop();
    computer.action();
})() 