# SecDNS

Plugin para Firefox que propoe:

  - Monitorar trafego de requisições DNS
  - Verificar se resposta é invalida 
  - Alertar usuário sobre página acessada

### Versao
1.0.0

### Tecnologias

SecDNS conta com suporte de um recursos externos, sendo:

* [Python] - Analizador de trafego e pacotes DNS
* [Scapy] - Biblioteca Python para manipulação completa de pacotes de rede

### Diagrama
![Diagrama](https://raw.githubusercontent.com/phnahes/firefox-secdns/master/doc/Plugin.jpg)

### Instalação

```sh
# apt-get install python python-dev python-scapy
```

```sh
$ git clone https://github.com/phnahes/firefox-secdns.git firefox-secdns
$ cd firefox-secdns
$ sudo ./install.sh
```

### Todo's

 - Adicionar controle para linhas unicas no arquivo de black-list
 - Melhorar codigo do plugin
 - Gerar pacotes e versionamento
 
License
----

MIT


**Free Software, Hell Yeah!**

[Scapy]:http://www.secdev.org/projects/scapy/
[Python]:https://www.python.org/
