# Detective de la Propiedad Intelectual — ARCHIVO PI

Juego educativo individual desarrollado con HTML, CSS y JavaScript puro.

## Cómo ejecutarlo
1. Descarga y descomprime `Detective_Propiedad_Intelectual.zip`.
2. Abre la carpeta.
3. Haz doble clic en `index.html`.
4. El juego se abrirá en tu navegador. No necesita instalación ni servidor.

También puedes abrir la carpeta en Visual Studio Code y usar la extensión Live Server, aunque no es obligatorio.

## Archivos
- `index.html`: estructura y pantallas del juego.
- `styles.css`: diseño visual adaptable a computador y celular.
- `game.js`: expedientes, respuestas, puntuación, retroalimentación y resultados.

## Cómo agregar o modificar preguntas
En `game.js`, edita el arreglo `cases`. Cada caso contiene:
- `title`: título del expediente.
- `category`: categoría de propiedad intelectual.
- `name`: nombre de la evidencia.
- `symbol`: símbolo visual.
- `question`: pregunta.
- `scenario`: descripción del caso.
- `answers`: cuatro respuestas.
- `correct`: índice de la respuesta correcta (empieza en 0).
- `explanation`: explicación que se muestra después de responder.

## Contenido educativo
Incluye ejemplos introductorios sobre:
- Derechos de autor.
- Marcas.
- Patentes.
- Diseños industriales.
- Secretos empresariales.

El contenido es educativo y general. No constituye asesoría jurídica. Para Colombia, se puede consultar información oficial en la Dirección Nacional de Derecho de Autor (DNDA) y la Superintendencia de Industria y Comercio (SIC).

## Personalización
Puedes cambiar textos, colores y tipografías desde `styles.css`. Las fuentes externas se cargan desde Google Fonts; si no hay conexión, se usarán fuentes alternativas del sistema.
