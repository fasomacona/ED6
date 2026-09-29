# Tema 6: Métodos de Búsqueda

Material didáctico para **GitHub Pages** del **Tema 6** de **Estructura de Datos (AED-1026)** — TecNM.

## Contenido

| Página | Descripción |
|--------|-------------|
| [index.html](index.html) | Portada y navegación |
| [secuencial.html](secuencial.html) | 6.1 Búsqueda secuencial |
| [binaria.html](binaria.html) | 6.2 Búsqueda binaria |
| [hash.html](hash.html) | 6.3 Búsqueda por funciones hash |
| [comparativa.html](comparativa.html) | Tablas de complejidad y criterios |
| [practica.html](practica.html) | Guía de la práctica |
| [notebooks/practica_tema6.ipynb](notebooks/practica_tema6.ipynb) | Jupyter Notebook |

## Ver localmente

```bash
python -m http.server 8000
```

## GitHub Pages

```bash
git init
git add .
git commit -m "Tema 6: Métodos de Búsqueda"
git remote add origin https://github.com/TU_USUARIO/estructura-datos-tema6.git
git push -u origin main
```

**Settings → Pages → Source:** `main` / root

## Notebook

1. Búsqueda secuencial y binaria  
2. Tabla hash con encadenamiento  
3. Medición de tiempos  
4. Método propio de búsqueda  
5. Comparativa y conclusiones  

```bash
pip install jupyter pandas
jupyter notebook notebooks/practica_tema6.ipynb
```

## Competencia

> Conoce, comprende y aplica los algoritmos de búsqueda para el uso adecuado en el desarrollo de aplicaciones que permita solucionar problemas del entorno.

## Licencia

Material educativo basado en el programa AED-1026 del TecNM (mayo 2016).
