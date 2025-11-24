# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

| Caso de Teste                              | CT-1 - Carregamento correto da página de Incidente                |
| :----------------------------------------- | :---------------------------------------------------------------- |
| Requisitos Associados                      | RF-07                                                             |
| Objetivo do Teste                          | Validar carregamento correto da página de incidente               |
| Passos                                     | Abrir página de incidente com id válido e aguardar o carregamento |
| Critérios de êxito                         | Carregamento da página de incidente sem erros                     |
| Responsável pela elaborar do caso de Teste | Eduardo Moreira                                                   |

| Caso de Teste                              | CT-2 - Carregamento incorreto da página de Incidente                       |
| :----------------------------------------- | :------------------------------------------------------------------------- |
| Requisitos Associados                      | RF-07                                                                      |
| Objetivo do Teste                          | Validar carregamento incorreto da página de incidente                      |
| Passos                                     | Abrir página de incidente com um id inválido e aguardar o redirecionamento |
| Critérios de êxito                         | Redirecionamento para HomePage                                             |
| Responsável pela elaborar do caso de Teste | Eduardo Moreira                                                            |

| Caso de Teste                              | CT-3 - Cadastro de novo incidente                                                                                                        |
| :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                      | RF-05                                                                                                                                    |
| Objetivo do Teste                          | Validar cadastro correto de novo incidente                                                                                               |
| Passos                                     | Abrir a tela [map](http://localhost:5173/map), cadastrar um novo incidente, visualizar o incidente na listagem de incidentes cadastrados |
| Critérios de êxito                         | Novo incidente adicionado na listagem de incidentes cadastrados                                                                          |
| Responsável pela elaborar do caso de Teste | Eduardo Moreira                                                                                                                          |

> **Links Úteis**:
>
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
