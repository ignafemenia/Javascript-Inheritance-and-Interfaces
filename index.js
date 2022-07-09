/*Importación de clases*/
import {Cliente} from './Cliente.js'
//import {CuentaCorriente} from './CuentaCorriente.js';
//import {CuentaAhorro} from './CuentaAhorro.js';
import {Cuenta} from './Cuenta.js'

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new Cuenta('Corriente', cliente, '1', '001');
const cuentaDeMaria = new Cuenta('Corriente', cliente2,'2','002');

let saldo = cuentaDeLeonardo.verSaldo(); 

const CuentaAhorroLeonardo = new Cuenta('Ahorro', cliente, '9985', '001', 0);
console.log(CuentaAhorroLeonardo);



saldo = cuentaDeLeonardo.depositoEnCuenta(150);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
console.log(CuentaCorriente.cantidadCuentas);

console.log(CuentaCorriente.cantidadCuentas);



