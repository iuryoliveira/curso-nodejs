1 - Instalar docker-toolbox - https://docs.docker.com/toolbox/toolbox_install_windows/

2 - Criar uma máquina virtual
$ docker-machine create default

3 - Rodar a máquina virtual
$ docker-machine start default

4 - Baixar container do mongo
$ docker pull mongo

Caso haja problemas ao iniciar a máquina virutal: 
$ docker-machine env --shell=powershell | Invoke-Expression

5 - Iniciar o mongo
$ docker run --name mongodb -p 27017:27017 -d mongo //para rodar e configurar a primeira vez
$ docker start mongodb //para rodar o container em demais vezes

6 - Verificar se o mongodb está rodando
$ docker-machine ip default //descobrir ip da máquina virtual
Acessar ipDaMaquinaVirutal:27017


