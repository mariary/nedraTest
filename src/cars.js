export class Api {

    getCars() {

        this.sleep(1000)

        return [
            new Car('Toyota', 'c40', 2019, 'petrol', 'cabrio', 5000),
            new Car('Toyota', 'c40', 2019, 'petrol', 'cabrio', 5000),
            new Car('Toyota', 'c40', 2019, 'petrol', 'cabrio', 5000),
            new Car('Toyota', 'c40', 2019, 'petrol', 'cabrio', 5000),
            new Car('Toyota', 'c40', 2019, 'petrol', 'cabrio', 5000),
            new Car('Toyota', 'c40', 2019, 'petrol', 'cabrio', 5000),
            new Car('Toyota', 'c40', 2019, 'petrol', 'cabrio', 5000),
        ]

    }

    sleep(milliseconds) {
        const date = Date.now()
        let currentDate = null
        do {
            currentDate = Date.now()
        } while (currentDate - date < milliseconds)
    }
}

class Car {
    constructor(
        brand,
        model,
        year,
        fuel,
        bodyType,
        price) {
        this.brand = brand
        this.model = model
        this.year = year
        this.fuel = fuel
        this.bodyType = bodyType
        this.price = price
    }
}


