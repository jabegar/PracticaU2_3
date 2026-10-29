# 1.- La documentación y los ficheros de una carpeta
### a) Busca en nodejs.org/api el nivel de estabilidad del módulo querystring y del constructor new Buffer(). ¿Qué significa cada nivel y qué alternativa propone la documentación?
Querystring tiene nivel de **estabilidad 2**. Que significa que es **estable**.
new Buffer() tiene nivel de **estabilidad 0**. Que significa que es una **opción deprecada**. La alternativa que ofrece es **Buffer.from(array)**
### b) En la firma fs.readdir(path[, options], callback), ¿qué parámetros son obligatorios y cuáles opcionales? ¿Cómo lo sabes?
El path y el callback son obligatorios y el options es opcional. Se sabe porque en la declaración el parámetro options aparce entre corchetes.
### c) Crea extensiones.js, que reciba la ruta de una carpeta por la terminal (si no se indica, usa la carpeta del propio script) y muestre con console.table cuántos ficheros hay de cada extensión. Los ficheros sin extensión se cuentan como "(sin extensión)". Usa fs.readdirSync y path.extname.
