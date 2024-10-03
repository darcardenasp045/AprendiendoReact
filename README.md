
# Aprendiendo React desde 0 - Repositorio Multipaquete

Este es un repositorio diseñado para aprender **React** desde cero, implementando diversos ejercicios y proyectos a lo largo del camino. Cada proyecto está organizado dentro de un entorno **multipaquete (monorepo)**, lo que permite gestionar varios paquetes (proyectos) de manera eficiente dentro de una misma estructura.

## Estructura del repositorio

Todos los proyectos se encuentran dentro de la carpeta `packages`. Cada paquete representa un proyecto independiente en React.

### Estructura de carpetas:
```
/aprendiendoreact
│
├── packages/
│   ├── Clase1-UseState/
│   ├── Clase2-useStateAvanzado/
│   └── etc...
└── package.json
```

## Instrucciones para instalar dependencias

Este repositorio utiliza **npm workspaces** para gestionar las dependencias de todos los paquetes.

### Pasos para instalar las dependencias:

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd aprendiendoreact
   ```

2. **Instala todas las dependencias** del monorepo en un solo paso:
   ```bash
   npm install
   ```

   Esto instalará las dependencias definidas en la raíz y las correspondientes a cada proyecto dentro de `packages`.

### Instalación de dependencias para un paquete específico

Si deseas instalar una dependencia para un paquete específico, utiliza el siguiente comando desde la raíz del repositorio:

```bash
npm install <nombre-dependencia> -w <nombre-del-paquete>
```

Por ejemplo, para instalar una dependencia en el paquete `Clase2-useStateAvanzado`:
```bash
npm install axios -w Clase2-useStateAvanzado
```

## Ejecución de scripts

Los scripts definidos en el archivo `package.json` raíz pueden ejecutarse en cualquier paquete usando el flag `-w` seguido del nombre del paquete.

Por ejemplo, para ejecutar el script de desarrollo en `Clase2-useStateAvanzado`:
```bash
npm run dev -w Clase2-useStateAvanzado
```

---

### Contacto

Este repositorio está en constante desarrollo mientras se aprende React, por lo que los proyectos y ejercicios irán creciendo a medida que se avance en el aprendizaje.
