# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

| Caso de Teste                             | CT-1 - Carregamento correto da página de Incidente                |
| :---------------------------------------- | :---------------------------------------------------------------- |
| Requisitos Associados                     | RF-07                                                             |
| Objetivo do Teste                         | Validar carregamento correto da página de incidente               |
| Passos                                    | Abrir página de incidente com id válido e aguardar o carregamento |
| Critérios de êxito                        | Carregamento da página de incidente sem erros                     |
| Responsável pela elaborar o caso de Teste | Eduardo Moreira                                                   |

| Caso de Teste                             | CT-2 - Carregamento incorreto da página de Incidente                       |
| :---------------------------------------- | :------------------------------------------------------------------------- |
| Requisitos Associados                     | RF-07                                                                      |
| Objetivo do Teste                         | Validar carregamento incorreto da página de incidente                      |
| Passos                                    | Abrir página de incidente com um id inválido e aguardar o redirecionamento |
| Critérios de êxito                        | Redirecionamento para HomePage                                             |
| Responsável pela elaborar o caso de Teste | Eduardo Moreira                                                            |

| Caso de Teste                             | CT-3 - Cadastro de novo incidente                                                                                                        |
| :---------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                     | RF-05                                                                                                                                    |
| Objetivo do Teste                         | Validar cadastro correto de novo incidente                                                                                               |
| Passos                                    | Abrir a tela [map](http://localhost:5173/map), cadastrar um novo incidente, visualizar o incidente na listagem de incidentes cadastrados |
| Critérios de êxito                        | Novo incidente adicionado na listagem de incidentes cadastrados                                                                          |
| Responsável pela elaborar o caso de Teste | Eduardo Moreira                                                                                                                          |
