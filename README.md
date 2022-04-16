# Horario

## Uso

Clonar el repositorio

```
git clone https://github.com/andreewD/andreewD.github.io.git
```

Instalar las dependencias

```
yarn install
```

Editar el archivo [courses.json](./src/data/courses.json) siguiendo las siguientes interfaces

```
interface Day{
    day:string
    courses:Array<Course>
}

interface Course{
    name:string
    type:string
    zoomLink:string
    clasroomLink:string
    from:number
    to:number
}
```
