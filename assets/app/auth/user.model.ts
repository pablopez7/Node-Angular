export class User {
    constructor(
        public email: string,
        public password: string,
        public firtsName?: string,
        public lastName?: string
    ) {}
}