
let usuarios=[
    {
        nombre:"maxi",
        monto:"120000",
        cuotas:6,
        tasa:120
    },
    {
        nombre:"debora",
        monto:"900000",
        cuotas:120,
        tasa:80
    },
    {
        nombre:"belu",
        monto:"500000",
        cuotas:3,
        tasa:140
    }

]

console.log(usuarios);

function usuario(nombre, monto, cuotas, tasa){
this.nombre=nombre;
this.monto=monto;
this.cuotas=cuotas;
this.tasa=tasa;
}



