Desenvolvimento de Sistema Biométrico Escalável com
Microsserviços e Computação em Nuvem

Visão Geral do Projeto
Este projeto tem como objetivo pesquisar, projetar e desenvolver uma solução
biométrica facial baseada em arquitetura de microsserviços, voltada para
detecção facial, verificação de vivacidade (liveness) e
reconhecimento/autenticação facial, utilizando técnicas do estado da arte
acadêmico e industrial.
A solução será concebida para operar em cenários críticos e ambientes
embarcados, com validação em ambiente relevante, considerando restrições
reais de hardware, latência, confiabilidade e robustez e operação em nuvem.
Atualmente, a plataforma já dispõe de microsserviços de autenticação e ABIS em
operação. Este projeto amplia a solução existente, incorporando um pipeline
biométrico facial completo, capaz de operar de forma integrada a esses serviços
já consolidados.

Contexto de Aplicação e Desafios do Cenário
O caso de uso central do projeto é um sistema embarcado acoplado a uma
chopeira automatizada, no qual a biometria facial será utilizada como
mecanismo de autenticação do usuário para liberação do serviço (servida de
chope).
Este cenário apresenta elevado grau de complexidade, incluindo, mas não se
limitando a:
• Variações intensas de iluminação natural (ex.: sol direto, sombra,
transições bruscas);
• Iluminação artificial dinâmica ou irregular;
• Uso de acessórios faciais, como:
• Óculos de sol;
• Bonés, chapéus ou viseiras;
• Barba, maquiagem ou protetor solar;
• Oclusões parciais do rosto;
• Ruído visual e movimento no ambiente;
• Limitações computacionais típicas de dispositivos embarcados.


Dessa forma, o projeto exige pesquisa aprofundada, experimentação e otimização
contínua para garantir confiabilidade biométrica, segurança contra ataques de
apresentação e experiência fluida ao usuário, mesmo em condições adversas.

Objetivo Geral
Pesquisar, projetar e desenvolver uma plataforma biométrica facial modular,
baseada em microsserviços, capaz de executar um pipeline completo de
detecção facial, verificação de vivacidade e reconhecimento facial, com foco
em ambientes embarcados e cenários críticos que também opere em nuvem,
validada em ambiente relevante e integrada aos microsserviços de autenticação já
existentes.

Objetivos Específicos
• Definir e projetar uma arquitetura biométrica baseada em
microsserviços, com contratos de interface, políticas de funcionamento e
requisitos não funcionais formalmente estabelecidos;
• Pesquisar e avaliar algoritmos e abordagens do estado da arte para:
o Detecção e rastreamento facial;
o Verificação de vivacidade (anti-spoofing);
o Reconhecimento e autenticação facial;
• Implementar microsserviços independentes para cada etapa do pipeline
biométrico facial, respeitando contratos de comunicação bem definidos;
• Definir e implementar políticas biométricas configuráveis, incluindo:
o Limiar de decisão;
o Critérios de aceitação/rejeição;
o Estratégias de fallback e retentativa;
• Otimizar os componentes do pipeline para execução em dispositivos
embarcados, considerando desempenho, latência, consumo de recursos e
estabilidade;
• Desenvolver mecanismos de orquestração biométrica, responsáveis por
coordenar o fluxo entre os microsserviços e garantir a aplicação correta
das políticas definidas;
• Avaliar o desempenho da solução em condições adversas de uso real,
incluindo variações de iluminação, oclusões faciais e ruído visual;
• Validar a solução por meio de pilotos em cenários críticos, avaliando
robustez, confiabilidade, segurança e viabilidade técnica.

O Que Será Construído no Projeto
Será desenvolvida uma plataforma biométrica facial modular, organizada em
microsserviços, responsável por executar um pipeline completo de:
1. Detecção facial;
2. Verificação de vivacidade (liveness);
3. Reconhecimento/autenticação facial;
A solução será capaz de operar tanto em ambientes embarcados (edge) quanto em
infraestrutura em nuvem, integrando-se aos microsserviços de autenticação já
existentes na plataforma.

Principais Componentes a Serem Desenvolvidos
Microsserviço de Detecção Facial
Responsável pela detecção e rastreamento de faces em fluxo de vídeo ou imagens,
operando de forma robusta em condições adversas de iluminação e oclusão,
expondo suas funcionalidades por meio de documentações bem definidos.

Microsserviço de Verificação de Vivacidade (Liveness)
Executa mecanismos de detecção de ataques de apresentação (ex.: fotos, vídeos,
máscaras), aplicando políticas de vivacidade configuráveis, adequadas ao
contexto embarcado e ao nível de risco do cenário.

Microsserviço de Reconhecimento Facial
Responsável pela extração de características biométricas faciais e pela
comparação com bases de referência, realizando autenticação facial de acordo com políticas de decisão e integração com os serviços de autenticação
existentes.

Microsserviço de Orquestração Biométrica
Gerencia o fluxo do pipeline facial, coordenando chamadas entre os
microsserviços.

Microsserviço de Auditoria e Telemetria
Responsável pelo registro de eventos, métricas, decisões biométricas e
indicadores de desempenho, assegurando rastreabilidade, monitoramento e
suporte à análise técnica e regulatória.,

Entregáveis do Projeto
Além do desenvolvimento do software, o projeto entregará:
• Documentação completa da arquitetura de microsserviços biométricos;
• Relatórios técnicos de pesquisa em:
o Detecção facial;
o Verificação de vivacidade;
o Reconhecimento facial;
• Relatórios de testes de desempenho e robustez em ambientes
embarcados;
• Resultados de pilotos executados em cenários críticos reais;
• Uma solução biométrica facial validada em ambiente relevante, atingindo
TRL 5–6.


