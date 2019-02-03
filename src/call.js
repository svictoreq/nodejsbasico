module.exports = {
    sync: function(nombre) {
        return `Hola ${nombre}! Bienvenido a Node.js`;
    },
    withCallback: function(nombre, cb) {
        console.log('\x1b[33m%s\x1b[0m', 'Comenzando llamada...')
        setTimeout(()=>{
            console.log(cb(nombre))
        }, 5000);
    },
    withPromise: function(nombre) {
        return new Promise((resolve, reject)=>{
            console.log('\x1b[36m%s\x1b[30m', 'Comenzando llamada...')
            setTimeout(()=>{
                resolve(nombre);
            }, 5000);
        })
    }
}
