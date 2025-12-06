class Carro {
  motor: MotorVolks;
  marca: string;
  modelo: string;
  constructor(marca: string, modelo: string) {
    this.motor = new MotorVolks();
    this.marca = marca;
    this.modelo = modelo;
  }

  getInfo() {
    console.log(`
      motor: ${this.motor.getMotorInfo()}
      marca: ${this.marca}
      modelo: ${this.modelo}
    `);
  }
}
class MotorVolks {
  tipo: string = 'combustao interna';
  cilindrada: string = '1.2';

  getMotorInfo() {
    return `Motor Volks - ${this.tipo} ${this.cilindrada}`;
  }
}

const carro = new Carro('Volks','Up!');
carro.getInfo();