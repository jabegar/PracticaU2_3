# 1.- La documentación y los ficheros de una carpeta
### a) Busca en nodejs.org/api el nivel de estabilidad del módulo querystring y del constructor new Buffer(). ¿Qué significa cada nivel y qué alternativa propone la documentación?
Querystring tiene nivel de **estabilidad 2**. Que significa que es **estable**.
new Buffer() tiene nivel de **estabilidad 0**. Que significa que es una **opción deprecada**. La alternativa que ofrece es **Buffer.from(array)**
### b) En la firma fs.readdir(path[, options], callback), ¿qué parámetros son obligatorios y cuáles opcionales? ¿Cómo lo sabes?
El path y el callback son obligatorios y el options es opcional. Se sabe porque en la declaración el parámetro options aparce entre corchetes.
### c) Crea extensiones.js, que reciba la ruta de una carpeta por la terminal (si no se indica, usa la carpeta del propio script) y muestre con console.table cuántos ficheros hay de cada extensión. Los ficheros sin extensión se cuentan como "(sin extensión)". Usa fs.readdirSync y path.extname.
# 2.- Temporizador de cocina
### Crea temporizador.js, que se ejecute así: node temporizador.js 10 Sacar la pizza
### a) Lee los segundos y el mensaje de process.argv. El mensaje puede tener varias palabras; si no se indica, será "¡Tiempo!".
### b) Si los segundos no son un número entero mayor que 0, muestra el uso con console.error y termina con process.exit(1).
### c) Con setInterval, muestra cada segundo "Quedan X s". Al llegar a 0, para el intervalo, muestra el mensaje y la duración total medida con console.time / console.timeEnd.
### d) Con setTimeout, muestra "¡Ya vas por la mitad!" cuando haya pasado la mitad del tiempo.
### e) ¿Por qué el programa termina solo después de clearInterval? ¿Qué pasaría si no lo llamaras?
El programa termina solo porque cuando acaba el intervalo no hay más líneas de código que ejecutar. Si no se llama a clearInterval el intervalo continua indefinidamente y el programa no acaba nunca