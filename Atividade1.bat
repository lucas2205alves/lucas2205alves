@echo off
echo ----------------Start-----------
echo ----------------10%-------------
echo ----------------40%-------------
echo ----------------70%-------------
echo ----------------100%------------
echo -----Seja Bem Vindo Usuario %USERNAME%, hora %time%, data %date%
echo -------------------------------

:main
echo            Comandos
echo A. Abrir Google Chrome         
echo B. Calculadora de soma
echo C. Criar uma nova pasta
echo D. Retorna a versao do programa e do Windows
echo E. Apaga a pasta que voce selecionar
set /p escolha= Escolha uma opcao: 
echo ------------------------------
if %escolha% equ A goto escolhaA
if %escolha% equ B goto escolhaB
if %escolha% equ C goto escolhaC
if %escolha% equ D goto escolhaD
if %escolha% equ E goto escolhaE

:escolhaA
start chrome.exe
cls
goto main

:escolhaB
cls
echo Soma
echo.
set /p no1="Numero 1. "
echo       +
set /p no2="Numero 2. "
set /a sum=no1+no2
echo ------------
echo %sum%
echo.
pause
cls
goto main

:escolhaC
echo Uma nova pasta sera criada no diretorio %cd%
md NovaPasta
echo Pasta criada
pause
cls
goto main

:escolhaD

echo.
echo A Versao do programa e a 2.0.2.2
VER
pause
cls
goto main

:escolhaE
echo Digite a origem da pasta, como por exemplo, C:\Users\1111010011\Desktop\NovaPasta
set /p pasta= Pasta Selecionada: 
rd %pasta%
pause
cls
goto main
