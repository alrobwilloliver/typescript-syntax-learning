interface Reportable {
    summary(): string;
};

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
