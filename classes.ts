export {}
class Vehicle {
    constructor(public color: string) {}
    protected honk(): void {
        console.log('honk honk')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vrooooom');
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk()
    }
}

const car = new Car(4, 'green');
car.startDrivingProcess();