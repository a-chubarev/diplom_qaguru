import {faker} from "@faker-js/faker";


export class ProductReply{
    constructor(){
        this.comment = faker.lorem.sentences({min:1, max:5})
        this.name = faker.internet.displayName()
        this.email = faker.internet.email()
        this.website = faker.internet.url()
    }
}

export class AuthorisedUser{
    constructor() {
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}