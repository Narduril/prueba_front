# React JS: micro aplicación compra dispositivos móviles

Pequeña prueba de una "tienda" con listado de productos y info. ampliada de un producto

### Pre-requisitos

Para poder lanzar este proyecto se necesita:

* node v16.17.1 (mínima)
* npm v8.19.2 (mínima)
* yarn v1.22.19 (mínima)
* ReactJS v18.2.0 (mínima)

Revisar el fichero package.json para el resto de dependencias

### Instalación y ejecución del proyect

1. Crear repositorio local `git init`

2. Clonar el repositorio remoto `git clone https://github.com/Narduril/prueba_front.git`

3. Ejecutar el script `yarn install` para instalar todas las dependencias

4. Ejecturar el script `yarn start` para lanzar el proyecto en el navegador

## Scripts disponibles

En este proyecto podemos ejecutar:

### `yarn install`

Al ejecutarlo se realizará la instalación de todas las dependencias incluidas en package.json.

### `yarn add [dependency]`

Ejecutando este comando con el nombre de la dependencia para hacer la instalación de la misma.\
Ejemplo: `yarn add axios`

### `yarn start`

Lanzamos la aplicación en el navegador en modo desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `yarn test`

Lanzamos el test runner en watch mode (vemos los cambios en directo).
Para más información [running tests](https://create-react-app.dev/docs/running-tests/).

### `yarn build`

Compilamos el proyecto para dejarlo listo para producción

### `yarn lint`

Analizamos el código para encontrar errores, bugs, fallos en los styles, etc.

### `yarn lint:fix`

Corrección de errores en el código

### `yarn prettify`

Corrección de errores en la estrucutura del código (para que se vea mejor)

## Estructura del proyecto

Para este proyecto he seguido la siguiente estructura básica

```text
|--public
|--src
    |
    |--application
    |
    |--common
    |
    |--pages
```

* **application**: el nucleo de la aplicación, basicamente parte de peticiones, el store, etc.
* **common**: componentes reutilizables, styles de la aplicación, custom hooks y funciones útiles, como un chequeador de strings o una función para configurar el setTimeout
* **pages**: aquí dentro entran los componentes que conforman cada vista

#### Application folder

Es el núcleo de la aplicación y presenta la siguiente estructura

```text
|--application
    |
    |--api
    |
    |--assets
    |
    |--components
    |
    |--configuration
    |
    |--store
    |
    |--styles
    |
    |--Application.component.tsx
```

* **api**: aquí tenemos el core de peticiones y un fichero config.ts con la configuración de los endpoints
* **assets**: directorio para imágenes, fuente, etc.
* **components**: componentes globales de la aplicación
* **configuration**: todas las configuraciones para los componentes de librería, configuración de rutas, almacenamiento de variables globales, etc.
* **store**: aquí tenemos toda la configuración del store, con los reducers, las sagas, etc. Cada state tiene sus propia estrucutra de dispatchers, sagas y reducers
* **styles**: almacenamos los styles globales de la aplicacción y los breakpoints

#### Common folder

Aquí almacenamos componentes, hooks, etc. reutilizables para toda la aplicación. Su estructura es:

```text
|--common
    |
    |--components
    |
    |--hooks
    |
    |--utils
```

* **components**: componentes reutilizables en distintas partes de la aplicación. Ejemplo: el buscador se podría usar en varios lugares
* **hooks**: custom hooks relacionados con los componentes reutilizables. Ejemplo: el custom hook debounce
* **utils**: funciones utilizables para chequear strings, setTimeout simple, etc.

### Pages folder

```text
|--pages
    |
    |--product-details
    |
    |--products-list
```

En páginas almacenaremos lo que viene siendo el componente de cada una de las vistas. Vemos su estructura con un ejemplo:

```text
|--clubs
    |
    |--components
    |
    |--ProductDetails.component.tsx
    |
    |--ProductDetails.styled.ts
    |
    |--index.ts
```

* **components**: se crean los componentes que sean exclusivos de esta vista y que no se vayan a reutilizar
* **ProductDetails.component.tsx**: el componente de la vista
* **ProductDetails.styled.ts**: los styled components de la vista

Siempre se pretende que todos los archivos que se llamen estén cerca de donde se usan, sobre todo dentro de los directorios de componentes. Si un componente se va a cargar solo en una vista, se deja cerca del componente de la vista y no en el directorio common. Lo mismo con los hooks por ejemplo.
