# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Cidadão Urbano</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas de 18 a 50 anos que utilizam as vias públicas e que possuam acesso a smartphone.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Receber informações verídicas e imediatas sobre ocorrências locais e contribuir atualizando o aplicativo quando presenciar algum problema.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Órgãos Públicos</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsáveis pela segurança, ocorrências e situações de emergência. Profissionais orientados a atender situações críticas (Polícia Militar, Bombeiros, Defesa Civil, SAMU, etc.).</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Acessar em tempo real as ocorrências registradas pelos cidadãos, obtendo maior agilidade e integração com sistemas já disponíveis.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Motoristas em Geral</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas que trabalham com veículos de transporte (motoristas de aplicativo, entregadores, taxistas, caminhoneiros).</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Evitar congestionamentos, acidentes e áreas de risco, recebendo informações em tempo real para atender clientes de forma mais rápida e eficiente.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

| EU COMO... `QUEM`             | QUERO/PRECISO ... `O QUE`                                            | PARA ... `PORQUE`                                                                 |
|-------------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Cidadão Urbano                | Receber informações, alertas sobre incêndios, alagamentos.           | Manter informado e evitar áreas de risco, garantindo minha segurança.              |
| Policial Militar / Bombeiro   | Acessar de maneira rápida as ocorrências registradas no aplicativo.  | Direcionamento das equipes militares para melhor atender a população, de forma ágil e eficaz. |
| Entregador                    | Saber se há acidentes, congestionamentos e interdições de ruas.      | Evitar atrasos de entrega, trânsito e áreas de risco.                              |
| Cidadão Urbano                | Marcar no site uma ocorrência que presenciei ou verificar se ainda está ocorrendo. | Contribuir com os outros usuários de maneira que os dados sejam verdadeiros, mantendo todos informados. |
| Defesa Civil                  | Receber em tempo real as ocorrências registradas pelos usuários e também obter um planejamento preventivo. | Alertar a população de maneira mais rápida, gerando um mapa de risco útil para prevenção de acidentes. |

## Requisitos do Projeto

### Requisitos Funcionais

| ID    | Descrição                                                                 | Prioridade |
|-------|---------------------------------------------------------------------------|------------|
| RF-01 | O sistema deve permitir que o usuário utilize e-mail e senha para logar.  | Alta       |
| RF-02 | O sistema deve solicitar que o usuário ative a localização para usar o mapa. | Alta    |
| RF-03 | O sistema deve salvar os dados informados pelo usuário e exibi-los no mapa. | Média   |
| RF-04 | O sistema deve exibir dicas de usabilidade em forma de tutoriais pop-up.   | Baixa      |
| RF-05 | O sistema deve permitir que o usuário cadastre novos incidentes com título, descrição e localização. | Alta |
| RF-06 | O sistema deve permitir que o usuário visualize a lista de ocorrências cadastradas. | Média |

### Requisitos Não Funcionais

| ID     | Descrição                                                                 | Prioridade |
|--------|---------------------------------------------------------------------------|------------|
| RNF-01 | O sistema deve garantir que apenas usuários logados acessem o sistema.   | Alta       |
| RNF-02 | O sistema deve ser compatível com todos os navegadores.                  | Média      |
| RNF-03 | O sistema deve oferecer suporte para outros idiomas.                     | Baixa      |
| RNF-04 | O sistema deve carregar páginas e exibir dados em menos de 3 segundos.   | Média      |
| RNF-05 | O sistema deve ser desenvolvido utilizando tecnologias web (HTML, CSS e JavaScript). | Alta |
| RNF-06 | O sistema deve apresentar mensagens de erro claras em caso de falha.     | Média      |

**Prioridade: Alta / Média / Baixa**
