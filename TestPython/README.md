# PRUEBA CON PYTEST EN PYTHON Python 3.11.1
## Crear el entorno virtual 
```
>python -m venv env
>env\scripts\activate
```
## instalar librerias
```
pip list
python.exe -m pip install --upgrade pip
pip install pytest
```
| Comando                       | Descripción              |
| ----------------------------- | ------------------------ |
| pip list                      | ver librerias instaladas |
| pip install pytest            | libreria para pruebas    |
| python --version              | ver versión de python    |
| pip freeze > requirements.txt | Manejo de dependencias   |

## crear archivo con las dependencias
```
>pip freeze > requirements.txt
```
## **Crear un archivo para probar**
### example.py
```
def suma(a,b):
    return a+b
```
## **Crear un archivo de prueba** 
es recomendable que el archivo de prueba comience con test_ para que **pytest** 
lo reconozca automaticamente
### test_example.py
```
from example import suma
def test_suma():
    assert suma(1,2)==3
    assert suma(-1,1)==0
    assert suma(0,0)==0
    
```
## Ejecutar pytest
Para ejecutar la prueba, abre un terminal y navega hasta el directorio donde está tu archivo de prueba y ejecute: 
```
>pytest
```