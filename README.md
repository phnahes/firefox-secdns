# SecDNS

Plugin para Firefox que propoe:

  - Monitorar trafego de requisições DNS
  - Verificar se resposta é invalida 
  - Alertar usuário sobre página acessada

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site] [1]:

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Version
3.0.2

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
 
License
----

MIT


**Free Software, Hell Yeah!**

[Scapy]:http://www.secdev.org/projects/scapy/
[Python]:https://www.python.org/