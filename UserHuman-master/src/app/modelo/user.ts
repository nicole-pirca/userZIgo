export class User {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public fechaNacimiento: string,
        public cuenta: boolean,
        public numHijos: number,
        public saldo: number,
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,

    ) {
        
    }
}