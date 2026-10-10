window.KIT = (() => {
const LINKS = [
  ["VIP", "https://pay.kiwify.com.br/EPan8F8?coupon=CLICKMASSA"],
  ["Red Carpet", "https://pay.kiwify.com.br/cOMCvA9?coupon=CLICKMASSA"],
  ["Diamond", "https://pay.kiwify.com.br/XNxcede?coupon=CLICKMASSA"]
];

const P = {rodrigo:"Rodrigo", mykael:"Mykael", guenaga:"Guenaga", matheus:"Matheus", andrex:"André X", mario:"Mário", robson:"Robson"};

// [fase, data, título, descrição, dono, apoio, prioridade(0=máxima), novo?]
const T = [
 ["antes","25/09","Kickoff do squad Fórum","Metas, orçamento, ritual semanal (seg 9h) e plano validado.","rodrigo","mykael, guenaga",0],
 ["antes","29/09","Alinhar tudo com a organização do Fórum","Local do estande, slot do pitch, montagem, credenciais, Match de Negócios e uso do mailing.","mykael","",0],
 ["antes","30/09","Orçamento fechado e fornecedores cotados","Montadora, TV vertical, tablets, brindes, impressos, água rotulada, roteadores 4G.","mykael","rodrigo",0],
 ["antes","30/09","Fechar tema do pitch com André Luz","Pitch 100% ClickMassa com QR final para o Raio-X.","rodrigo","guenaga",0],
 ["antes","30/09","Oferta exclusiva Fórum aprovada","Condição para a base e para quem der sinal no evento. Validade até 13/11.","guenaga","",0],
 ["antes","30/09","Cupom de desconto do ingresso","Fechado: CLICKMASSA, 55% nos ingressos VIP, Red Carpet e Diamond.","mykael","guenaga",0],
 ["antes","01/10","Roteiro do Raio-X de Vendas","7 perguntas, pontuação quente/morno/nutrição e roteamento para as 3 marcas.","guenaga","rodrigo, robson",0],
 ["antes","02/10","Conceito criativo e key visual","\"Quantas vendas sua empresa perde no WhatsApp?\" + testeira de mensagens e canais.","matheus","rodrigo",0],
 ["antes","02/10","Segmentar a base de 5 mil clientes","RN e Nordeste, decisores, clientes-case, produtores de eventos, agências.","guenaga","rodrigo",0],
 ["antes","02/10","Oferta Tikat para produtores","Condição para eventos fechados até 31/12 + demo de 3 min.","robson","",1],
 ["antes","02/10","Condição do Ingresso Prestige","10 primeiros por dia que chegarem com a mensagem do disparo e fizerem o Raio-X.","rodrigo","robson",0],
 ["antes","06/10","Validar premiações e regulamento","Prestige por ordem de chegada e convite dourado por compra.","mykael","rodrigo",0],
 ["antes","07/10","Projeto do estande 3×3 aprovado","Planta, testeira, painel QR, TV da IA, mesa de brindes, recarga, mesa do closer.","mykael","matheus",0],
 ["antes","08/10","Tirantes Tikat e porta-celulares","Tirantes para a equipe e porta-celulares para quem fizer o Raio-X.","mykael","matheus, robson",0],
 ["antes","09/10","Envelopes pretos e convites dourados","Convite do Click Digital para quem der sinal financeiro na ClickMassa.","matheus","mykael",0],
 ["antes","09/10","Fluxo Raio-X rodando no ClickMassa","QR → WhatsApp → diagnóstico → tags → pipeline \"Fórum 2026\".","guenaga","rodrigo",0],
 ["antes","09/10","Escala da equipe do evento","Turnos 9h–15h e 15h–21h.","mykael","guenaga",0],
 ["antes","13/10","Confirmar cupom na virada de lote","Checar com a organização se CLICKMASSA vale no lote novo e se os links mudam.","mykael","",0,1],
 ["antes","13/10","Enviar kit de marca à organização","Logo em vetor para site, redes do Fórum, releases e mailing de imprensa.","matheus","mario",0,1],
 ["antes","13/10","Aprovar templates do disparo 1 na Meta","Variações A, B e C como Marketing, com o header do cupom.","guenaga","rodrigo",0,1],
 ["antes","14/10","Disparo 1 para a base: cupom 55%","Antecipado do plano original (20/10). Base RN e região, dividida entre as variações A, B e C.","rodrigo","guenaga",0,1],
 ["antes","14/10","Localização do estande divulgada","Mapa do pavilhão com o estande marcado.","matheus","rodrigo",1],
 ["antes","14/10","IA de atendimento humanizado treinada","Atende como um cliente real seria atendido, falando da ClickMassa.","guenaga","",0],
 ["antes","14/10","Peças do estande e impressos","Painel, testeira, regulamento do Prestige, placas.","matheus","",0],
 ["antes","14/10","Testeira com mensagens e canais","Total de mensagens + canais. Pedir o número atualizado ao produto.","matheus","rodrigo, guenaga",0],
 ["antes","14/10","Landing page do Fórum","Raio-X, oferta Fórum e premiações. SEO local para Natal.","mario","matheus",1],
 ["antes","14/10","Prestige e convite dourado na Tikat","Ingressos do Click Digital emitidos pela Tikat, com check-in no tablet.","robson","",1],
 ["antes","16/10","Lista dos 28 convidados e envio dos convites","Red Carpet 7 e VIP 21, com lista de espera.","guenaga","rodrigo",0,1],
 ["antes","16/10","Distribuir os 17 acessos da equipe","5 staff + 9 VIP + 3 Red Carpet; 2 Diamond para a diretoria.","mykael","guenaga",0,1],
 ["antes","16/10","Pitch deck v1 e demo roteirizada","15 min com QR final para o Raio-X.","rodrigo","matheus, guenaga",0],
 ["antes","16/10","Script e treinamento dos social sellers","Gatilhos para ClickMassa, Partner e Tikat.","guenaga","robson",0],
 ["antes","16/10","Crachás NFC personalizados","Ao aproximar o celular, abre conversa no WhatsApp da ClickMassa.","matheus","mykael, guenaga",0],
 ["antes","16/10","Públicos do Fórum montados","Semelhantes aos seguidores do Fórum, geo Natal, base de 5 mil, visitantes do site.","andrex","",0],
 ["antes","16/10","Release e pautas","\"VectaX leva IA de vendas no WhatsApp ao Fórum\".","mario","rodrigo",1],
 ["antes","17/10","Roteiro do vídeo de 30s para o telão","Cota Ouro. Confirmar formato e prazo de entrega com a organização.","rodrigo","matheus",0,1],
 ["antes","20/10","Teasers nas redes (3x por semana)","Bastidores, IA ao vivo, crachá NFC e localização do estande.","rodrigo","matheus",1],
 ["antes","21/10","Peças para os totens de LED","Cota Ouro. Pedir resolução e duração à organização.","matheus","",1,1],
 ["antes","21/10","Totem Click + Fórum em frente ao estande","Cota Ouro. Incluir no projeto da montadora.","mykael","matheus",1,1],
 ["antes","22/10","Reforço para quem não clicou no disparo 1","Mesmo cupom, lembrete de data e estande.","rodrigo","",1,1],
 ["antes","22/10","Campanha \"Estaremos no Fórum\" no ar","Objetivo: conversa no WhatsApp.","andrex","matheus",0],
 ["antes","23/10","Templates Meta submetidos","Todas as mensagens das réguas, com margem para reprovação.","guenaga","rodrigo",0],
 ["antes","27/10","Disparo para a base Click Digital","Ingresso Prestige no estande. Reforço em 04/11.","rodrigo","robson",0],
 ["antes","28/10","Reforço com a localização do estande","Para toda a base que clicou ou comprou.","rodrigo","guenaga",0],
 ["antes","28/10","Emitir todas as cortesias","Prazo final; realocar quem não respondeu.","mykael","",0,1],
 ["antes","28/10","Roteiro dos disparos ao público do Fórum","80% utilidade, 20% oferta, máx. 4 por dia. Depende do mailing e do opt-in.","rodrigo","",0],
 ["antes","29/10","Réguas pós-evento configuradas","Uma cadência por marca, a partir da tag do Raio-X.","guenaga","rodrigo",0],
 ["antes","30/10","Preparar entrevista do podcast","Cota Ouro. 3 mensagens-chave para o porta-voz.","mario","rodrigo",1,1],
 ["antes","30/10","Lista de produtores de eventos do RN","Convite para demo no estande.","robson","",1],
 ["antes","30/10","Entrevistas agendadas","Veículos que vão cobrir o Fórum.","mario","",2],
 ["antes","03/11","Ensaio geral do pitch","Duas rodadas cronometradas, demo e QR testados.","rodrigo","guenaga",0],
 ["antes","03/11","Teste ponta a ponta","QR, fluxo, tags, pipeline, IA, crachás, 4G, tablets.","guenaga","rodrigo, robson",0],
 ["antes","03/11","Retargeting de véspera","Lembrete com a localização do estande.","andrex","",1],
 ["antes","04/11","Montagem e checklist","Brindes por dia, cabos, extensões, água, impressos.","mykael","matheus",0],
 ["antes","04/11","Briefing final da equipe","Metas, escala, scripts e \"nenhum lead fora do ClickMassa\".","guenaga","mykael",0],
 ["antes","04/11","\"É amanhã\" para clientes que compraram","Mensagem com estande e brinde de cliente.","rodrigo","",0,1],
 ["durante","05/11","Raio-X de Vendas no estande","Meta: 750 contatos por dia. Brinde: porta-celular.","guenaga","mykael",0],
 ["durante","05/11","Desafie a IA ao vivo","Interessados seguem para a demo com o closer.","guenaga","",0],
 ["durante","05/11","Recepção dos clientes da base","Brinde exclusivo e conversa de upsell em IA e VoIP.","guenaga","rodrigo",0],
 ["durante","05/11","Sinal financeiro = envelope preto","Convite dourado do Click Digital para quem fechar.","guenaga","mykael",0],
 ["durante","05/11","Rodada dos social sellers","Dia 1 inteiro em todos os expositores.","guenaga","",0],
 ["durante","05/11","Pitch de 15 minutos · André Luz","QR final → Raio-X. Anunciar a próxima premiação.","rodrigo","guenaga, matheus",0],
 ["durante","05/11","Vídeo de 30s no telão principal","Cota Ouro. Conferir horários de exibição.","rodrigo","",1,1],
 ["durante","05/11","Entrevista no podcast do evento","Cota Ouro.","mario","rodrigo",1,1],
 ["durante","05/11","Disparos para a base que comprou","Dia 1 de manhã e dia 2 para quem ainda não passou.","rodrigo","",0,1],
 ["durante","05/11","Fechamento diário às 21h","Leads por marca, quentes repassados, ajustes.","guenaga","mykael, rodrigo",0],
 ["durante","05/11","Entrega do Ingresso Prestige","Emitido pela Tikat na hora.","robson","rodrigo",1],
 ["durante","05/11","\"Seu evento à venda em 5 min\"","Demo Tikat para produtores.","robson","",1],
 ["durante","05/11","Cobertura em tempo real","Stories de hora em hora.","rodrigo","matheus",1],
 ["durante","05/11","Geo-tráfego ao vivo","Anúncios no raio do pavilhão.","andrex","",1],
 ["depois","07/11","Obrigado para a base","Uma versão para quem foi e outra para quem não foi.","rodrigo","",0,1],
 ["depois","07/11","Obrigado aos convidados especiais","Mensagem 1:1 e convite para conversa.","guenaga","",0,1],
 ["depois","09/11","SDR liga para todos os quentes","Contato humano até segunda.","guenaga","",0],
 ["depois","10/11","Resumo das palestras ao público","Só se a organização permitir o mailing.","rodrigo","",1],
 ["depois","11/11","Agradecimento e indicações","Fotos do evento e pedido de indicação.","rodrigo","guenaga",2],
 ["depois","13/11","Oferta Fórum expira","Urgência para leads com demo e base que engajou.","guenaga","",0],
 ["depois","13/11","Debrief e ROI parcial","Custo por lead, pipeline e vendas por marca.","rodrigo","mykael, guenaga",0],
 ["depois","13/11","Release de resultados + artigo SEO","\"O que aprendemos no Fórum\".","mario","",2],
 ["depois","14/11","Propostas para produtores","Follow-up das demos Tikat.","robson","",1],
 ["depois","18/11","Abertura de vendas do Click Digital","R$ 197 e R$ 497, compre 1 e leve 2.","rodrigo","robson",1],
 ["depois","20/11","Agências e consultores → Partner","Leads com perfil de revenda.","guenaga","",2],
 ["depois","06/12","Cadência de 30 dias","D+1, D+3, D+5, D+7, D+14 e D+30.","guenaga","rodrigo",0],
 ["depois","06/12","Remarketing de 30 dias","Visitantes da LP, leads e público do evento.","andrex","",1],
 ["depois","06/12","Relatório final de ROI","Resultado por marca e aprendizados para 2027.","rodrigo","mykael",0]
];

const AUD = {base:"Base ClickMassa", conv:"Convidados especiais", leads:"Leads do evento", forum:"Público do Fórum", cd:"Base Click Digital", auto:"Fluxo automático", prod:"Produtores (Tikat)"};
const MK="Marketing", SV="Resposta na janela (grátis)", UM="1:1 pelo consultor", TX="Texto pronto", UT="Utilidade";

// [fase, público, quando, categoria, título, texto, botões, nota, mídia]
const M = [
 ["antes","base","14/10 · 10h",MK,"Disparo 1 · Variação A (pertencimento)",`Oi, {{nome}}! 💙
Quem faz parte da comunidade ClickMassa tem condição especial no *Fórum Negócios Experience 2026*: *55% de desconto* no ingresso.
📅 5 e 6 de novembro
📍 Centro de Convenções de Natal
🎟️ Cupom: *CLICKMASSA*
E vamos estar lá com estande próprio. Bora?`,["Quero meu ingresso","Não quero receber"],"Divida a base em 3 partes, uma por variação. A que tiver mais cliques vira o reforço.","a01-cupom-55-dark-1080x1080"],
 ["antes","base","14/10 · 10h",MK,"Disparo 1 · Variação B (valor do evento)",`{{nome}}, são 2 dias, +30 especialistas e +7 mil empresários no mesmo lugar. 🚀
O *Fórum Negócios Experience* chega à 11ª edição nos dias 5 e 6/11, em Natal. Como cliente ClickMassa, você entra com *55% OFF* usando o cupom *CLICKMASSA*.
Os ingressos são vendidos por lote, então quanto antes, melhor.`,["Quero meu ingresso","Não quero receber"],"","a02-cupom-55-light-1080x1080"],
 ["antes","base","14/10 · 10h",MK,"Disparo 1 · Variação C (encontro no estande)",`{{nome}}, queremos te ver pessoalmente! 🤝
Nos dias 5 e 6/11 a ClickMassa estará no *Fórum Negócios Experience*, em Natal, como patrocinadora. Para nossos clientes, separamos *55% de desconto* no ingresso com o cupom *CLICKMASSA*.
No estande, você conversa ao vivo com a nossa IA e retira um brinde exclusivo de cliente.`,["Quero meu ingresso","Não quero receber"],"","a05-estamos-no-forum-feed-1080x1350"],
 ["antes","base","Ao clicar em \"Quero meu ingresso\"",SV,"Resposta com os links do cupom",`Perfeito, {{nome}}! Escolha sua experiência. O cupom já está aplicado nos links:
🎟️ VIP: https://pay.kiwify.com.br/EPan8F8?coupon=CLICKMASSA
🔴 Red Carpet: https://pay.kiwify.com.br/cOMCvA9?coupon=CLICKMASSA
💎 Diamond: https://pay.kiwify.com.br/XNxcede?coupon=CLICKMASSA
Se o desconto não aparecer, digite CLICKMASSA no campo de cupom. Depois me avisa aqui que eu te mando a localização do nosso estande 😉`,[],"Aplicar a tag forum-cupom. Texto livre dentro da janela de 24h, sem custo de template.",""],
 ["antes","base","Quando o cliente avisar que comprou",SV,"Confirmação de compra",`Que bom, {{nome}}! 🎉 Anotado aqui.
Na semana do evento te mando a localização do estande e o horário do pitch do André Luz. Passa lá para pegar seu brinde de cliente.`,[],"Aplicar a tag forum-comprou.",""],
 ["antes","base","Ao clicar em \"Não quero receber\"",SV,"Confirmação de opt-out",`Tudo certo, {{nome}}. Você não vai mais receber nossas mensagens sobre eventos. Se precisar de algo da sua conta, é só chamar por aqui.`,[],"Remover da lista de marketing na hora.",""],
 ["antes","base","22/10 · 10h",MK,"Reforço · quem não clicou",`{{nome}}, passando para lembrar: seu cupom *CLICKMASSA* com *55% OFF* no Fórum Negócios Experience continua valendo. 🎟️
Faltam 2 semanas para os dias *5 e 6/11*, no Centro de Convenções de Natal. Vamos estar lá com estande e brinde exclusivo para clientes.`,["Quero meu ingresso","Não quero receber"],"Só para quem não clicou no disparo 1. Use a variação com mais cliques.","a04-cupom-55-feed-1080x1350"],
 ["antes","base","28/10 · 10h",MK,"Localização do estande",`{{nome}}, faltam 8 dias para o Fórum Negócios! 🚀
Nosso estande fica em *{{local}}*.
Passe lá para:
✅ Conversar com a nossa IA ao vivo
✅ Retirar seu brinde de cliente
✅ Conhecer a condição exclusiva do evento
Seu cupom *CLICKMASSA* ainda está valendo.`,["Já tenho ingresso","Quero meu ingresso","Não quero receber"],"Para toda a base RN e região que não pediu opt-out.","a17-localizacao-estande-1080x1080"],
 ["antes","base","04/11 · 18h",MK,"É amanhã · clientes que compraram",`{{nome}}, é *amanhã*! ⏰
O Fórum Negócios começa às 9h e o estande da ClickMassa fica em *{{local}}*.
Mostre esta mensagem no estande e retire seu brinde exclusivo de cliente. Nos vemos lá?`,["Vou amanhã","Vou na sexta"],"Só para a tag forum-comprou.","d04-estamos-aqui-1080x1080"],
 ["antes","conv","Até 16/10",UM,"Convite VIP · cliente top",`{{nome}}, tudo bem? Aqui é {{remetente}}, da ClickMassa.
Este ano somos patrocinadores do *Fórum Negócios Experience* (5 e 6/11, Centro de Convenções de Natal). Reservamos alguns ingressos VIP, como cortesia, para clientes que fazem parte da nossa história, e um deles é seu. 🎟️
Para emitir, só preciso do seu nome completo e e-mail. Posso confirmar?`,[],"10 clientes com potencial de upsell em IA e VoIP.","a08-convite-vip-1080x1080"],
 ["antes","conv","Até 16/10",UM,"Convite VIP · lead em negociação",`{{nome}}, aqui é {{remetente}}, da ClickMassa. Quero te fazer um convite: você vai ao *Fórum Negócios Experience* como nosso convidado, com ingresso VIP por nossa conta.
No nosso estande, você vê a ClickMassa funcionando ao vivo, com a IA atendendo como gente, e a gente aproveita para fechar os detalhes da sua operação pessoalmente. Topa?`,[],"7 leads quentes com proposta aberta.","a08-convite-vip-1080x1080"],
 ["antes","conv","Até 16/10",UM,"Convite Red Carpet · parceiro",`{{nome}}, a parceria com vocês é das que mais valorizamos aqui. Por isso, quero te convidar para o *Fórum Negócios Experience*, nos dias 5 e 6/11, com ingresso *Red Carpet* por nossa conta. 🔴
Vai ser uma ótima oportunidade de estarmos juntos com +7 mil empresários. Me confirma nome completo e e-mail?`,[],"3 parceiros White Label de maior potencial.","a09-convite-red-carpet-1080x1080"],
 ["antes","conv","Até 16/10",UM,"Convite Red Carpet · cliente-case",`{{nome}}, a história de vocês com a ClickMassa é das que mais nos orgulham. Seria uma honra ter você no Fórum Negócios como nosso convidado Red Carpet. 🔴
E, se topar, adoraríamos gravar um depoimento rapidinho no nosso estande. Posso contar com você?`,[],"2 clientes-case.","a09-convite-red-carpet-1080x1080"],
 ["antes","conv","48h sem resposta",UM,"Lembrete do convite",`{{nome}}, passando para confirmar seu ingresso cortesia do Fórum. Seguro ele para você até amanhã. Posso emitir? 🙂`,[],"Sem resposta depois disso, o ingresso vai para a lista de espera.",""],
 ["antes","conv","Após receber os dados",UM,"Cortesia confirmada",`Pronto, {{nome}}! Seu ingresso {{categoria}} para o Fórum Negócios Experience está garantido. 🎉
Assim que for emitido, te envio por aqui. Nos dias 5 e 6/11, passa no estande da ClickMassa para a gente se ver.`,[],"",""],
 ["antes","leads","03/11 · 12h",MK,"Retargeting · quem interagiu com os anúncios",`Oi, {{nome}}! Você demonstrou interesse na ClickMassa. 👀
Quinta e sexta estaremos no *Fórum Negócios*, estande *{{local}}*.
Lá você conversa com uma IA que atende seus clientes no WhatsApp como uma pessoa atenderia. Vale a visita.`,["Quero agendar um horário","Não quero receber"],"Leads da campanha \"Estaremos no Fórum\".","a15-desafie-a-ia-feed-1080x1350"],
 ["antes","cd","27/10 · 10h",MK,"Base Click Digital · chance de Ingresso Prestige",`Oi, {{nome}}! Aqui é o time do *Click Digital* ✨
Nos dias *5 e 6 de novembro* estaremos no *Fórum Negócios Experience*, no estande da ClickMassa (*{{local}}*).
E tem presente: os *10 primeiros de cada dia* que chegarem ao estande mostrando esta mensagem ganham um *Ingresso Prestige* para a 3ª edição do Click Digital, com jantar exclusivo com os palestrantes. 🥂
Guarde esta mensagem!`,["Quero participar","Onde fica o estande?","Não quero receber"],"\"Quero participar\" marca a tag Prestige.",""],
 ["antes","cd","04/11 · 18h",MK,"Base Click Digital · é amanhã",`{{nome}}, é *amanhã*! ⏰
O Fórum Negócios começa às 9h e o estande da ClickMassa fica em *{{local}}*.
Lembre: os *10 primeiros de cada dia* com esta mensagem levam o *Ingresso Prestige* do Click Digital.
Nos vemos lá?`,["Vou amanhã","Vou na sexta","Não quero receber"],"Só para quem recebeu a mensagem de 27/10.",""],
 ["antes","auto","Crachá NFC",TX,"Mensagem que abre ao encostar no crachá",`Oi! Te conheci no Fórum Negócios e quero saber mais sobre a ClickMassa.`,[],"Vai no link wa.me gravado no NFC e cai no fluxo do Raio-X.",""],

 ["durante","base","05/11 · 08h30",MK,"Dia 1 · clientes que compraram",`Bom dia, {{nome}}! ☀️ Hoje começa o Fórum Negócios e a ClickMassa já está no estande *{{local}}*.
Passe lá: tem brinde exclusivo para clientes e a nossa IA atendendo ao vivo.`,["Estou indo","Vou amanhã"],"Tag forum-comprou.","d01-e-hoje-story-1080x1920"],
 ["durante","base","06/11 · 10h",MK,"Dia 2 · clientes que ainda não passaram",`{{nome}}, hoje é o último dia do Fórum Negócios! 🔥
Se ainda não passou no estande da ClickMassa (*{{local}}*), dá tempo: seu brinde de cliente está separado e temos uma condição exclusiva para clientes em IA e VoIP, válida até 13/11.`,["Estou indo","Quero saber da condição"],"Tag forum-comprou, sem check-in no estande no dia 1.","d04-estamos-aqui-1080x1080"],
 ["durante","base","05/11 · 30 min antes do pitch",MK,"Chamada para o pitch do André Luz",`Às *{{hora}}*, no palco *{{palco}}*: *André Luz* mostra quanto dinheiro as empresas perdem no WhatsApp e como parar de perder.
São 15 minutos. Vale a pena.`,[],"Para a base que comprou e para o público do Fórum.","a13-pitch-andre-luz-feed-1080x1350"],
 ["durante","forum","05/11 · 08h30",MK,"Dia 1 · bom dia + programação",`Bom dia, {{nome}}! ☀️ Começa hoje o *Fórum Negócios Experience*.
📅 Programação de hoje: {{link}}
Enquanto circula, passe no estande da *ClickMassa* (*{{local}}*) e converse com uma IA que atende como gente.`,["Ver programação"],"Depende do mailing e do opt-in. A Meta tende a classificar como Marketing, porque a ClickMassa não é a organizadora.",""],
 ["durante","forum","05/11 · 11h",MK,"Dia 1 · palestra-chave em 10 min",`⏱️ Em 10 minutos, *{{palestrante}}* sobe ao palco *{{palco}}*.
Dica: anote uma ação para aplicar na segunda-feira.`,[],"Mensagem 100% útil, sem oferta.",""],
 ["durante","forum","05/11 · 17h",MK,"Dia 1 · IA ao vivo no estande",`{{nome}}, já conversou com a nossa IA? 🤖
Ela atende seus clientes no WhatsApp como um vendedor atenderia. Teste no estande da ClickMassa (*{{local}}*) ou aqui mesmo.`,["Quero testar agora","Não quero receber"],"","d02-ia-ao-vivo-story-1080x1920"],
 ["durante","forum","05/11 · 19h30",MK,"Dia 1 · Raio-X de Vendas",`Últimas horas do dia 1! 🌙
Em 60 segundos, descubra *quantas vendas sua empresa perde no WhatsApp*. Responda algumas perguntas e receba seu diagnóstico.`,["Fazer o Raio-X","Não quero receber"],"","a14-raio-x-de-vendas-1080x1080"],
 ["durante","forum","06/11 · 08h30",MK,"Dia 2 · destaques",`Bom dia! Hoje é o *último dia* do Fórum Negócios. 🔥
Destaques de hoje: {{destaques}}
Programação completa: {{link}}`,["Ver programação"],"",""],
 ["durante","forum","06/11 · 16h",MK,"Dia 2 · sinal = envelope preto",`{{nome}}, última chance! ⚡
Quem fechar a *ClickMassa* hoje no Fórum, com o sinal, leva o *envelope preto* com um *convite dourado* para o Click Digital 3ª edição.
Estamos no estande *{{local}}* até as 21h.`,["Falar com um consultor","Não quero receber"],"\"Falar com um consultor\" vai direto para o closer.","d03-ultimas-horas-story-1080x1920"],
 ["durante","forum","06/11 · 20h",MK,"Dia 2 · obrigado",`Obrigado por viver o Fórum Negócios com a gente! 💙
Se não deu tempo de passar no estande, faça o *Raio-X de Vendas* por aqui e receba seu diagnóstico.`,["Fazer o Raio-X","Não quero receber"],"","p01-obrigado-1080x1080"],
 ["durante","auto","Ao concluir o Raio-X",SV,"Resultado do Raio-X",`Pronto, {{nome}}! 📊
Sua empresa tem *{{n}} pontos de perda* de vendas no WhatsApp:
{{pontos}}
🎁 Mostre esta tela no estande (*{{local}}*) e retire seu *porta-celular*.
Quer ver como resolver isso na sua operação?`,["Quero ver a solução","Agora não"],"Enviado pelo fluxo, dentro da conversa aberta.",""],
 ["durante","auto","Ao cumprir a condição",SV,"Confirmação do Ingresso Prestige",`Parabéns, {{nome}}! 🥂
Você garantiu um *Ingresso Prestige* para a 3ª edição do Click Digital, com jantar exclusivo com os palestrantes.
Seu ingresso foi emitido pela *Tikat* e chega por aqui em instantes.`,[],"Robson emite no tablet Tikat.",""],

 ["depois","base","07/11 · 10h",MK,"Obrigado · clientes que foram",`{{nome}}, obrigado por passar no nosso estande no Fórum! 💙
Foi muito bom te ver pessoalmente. A condição exclusiva que levamos para clientes, em IA e VoIP, vale até 13/11. Quer que seu consultor te mostre?`,["Quero ver a condição","Agora não"],"Clientes com check-in no estande.","p01-obrigado-1080x1080"],
 ["depois","base","07/11 · 10h",MK,"Obrigado · clientes que não foram",`{{nome}}, sentimos sua falta no Fórum Negócios! 😉
A boa notícia: a condição exclusiva que levamos para clientes, em IA e VoIP, ainda vale até 13/11. Quer conhecer?`,["Quero conhecer","Agora não","Não quero receber"],"Base RN e região sem check-in.","p02-obrigado-feed-1080x1350"],
 ["depois","conv","07/11",UM,"Obrigado ao convidado especial",`{{nome}}, obrigado por ter vindo como nosso convidado ao Fórum! Espero que tenha aproveitado. 🙌
Posso reservar 20 minutos esta semana para te mostrar o que conversamos aplicado à sua operação?`,[],"Enviado por quem fez o convite.",""],
 ["depois","base","11/11 · 10h",MK,"Agradecimento e indicação",`{{nome}}, obrigado por fazer parte do Fórum com a gente! 💙
Conhece outro empresário que perde vendas no WhatsApp? Indique aqui e ganhe {{beneficio}}.`,["Quero indicar","Não quero receber"],"Definir o benefício da indicação.","p04-indique-1080x1080"],
 ["depois","base","13/11 · 10h",MK,"Condição de clientes expira hoje",`{{nome}}, a *condição exclusiva do Fórum* para clientes ClickMassa termina *hoje*. ⏳
Se fizer sentido para sua empresa, é a melhor hora de ativar IA e VoIP na sua conta.`,["Quero aproveitar","Não quero receber"],"Só para quem clicou em alguma mensagem do Fórum.","p03-oferta-expira-hoje-1080x1080"],
 ["depois","leads","07/11 · 10h (D+1)",MK,"Case do segmento",`{{nome}}, foi ótimo te conhecer no Fórum Negócios! 🙌
Separei um caso de uma empresa de *{{segmento}}* que organizou o atendimento no WhatsApp com a ClickMassa. Quer ver?`,["Quero ver o case","Não quero receber"],"Leads quentes e mornos.",""],
 ["depois","leads","09/11 · 10h (D+3)",MK,"Convite para demo",`Oi, {{nome}}! Aqui é {{consultor}}, da ClickMassa.
Com base no seu Raio-X, preparei uma demonstração de 20 minutos focada na sua operação. Qual horário fica melhor esta semana?`,["Agendar demo","Prefiro outro dia","Não quero receber"],"Enviado pelo SDR responsável.",""],
 ["depois","leads","11/11 · 10h (D+5)",MK,"Prova social",`{{nome}}, sabia que *{{clientes}} empresas* já atendem pela ClickMassa? 📈
No Fórum, mostramos na testeira: *{{mensagens}} mensagens* já passaram pela nossa plataforma, em WhatsApp, Instagram, Facebook, VoIP e Webchat.`,["Quero conversar","Não quero receber"],"Confirmar os números com o produto.",""],
 ["depois","leads","13/11 · 10h (D+7)",MK,"Oferta do Fórum expira hoje",`{{nome}}, a *condição especial do Fórum Negócios* termina *hoje*. ⏳
Se fizer sentido para sua empresa, é a melhor hora para começar.`,["Quero aproveitar","Não quero receber"],"","p03-oferta-expira-hoje-1080x1080"],
 ["depois","leads","20/11 e 06/12",MK,"Reativação (D+14 e D+30)",`Oi, {{nome}}! Passando para saber: como está o atendimento no WhatsApp da sua empresa?
Se quiser, refazemos seu Raio-X de Vendas para comparar com o do Fórum.`,["Refazer o Raio-X","Não quero receber"],"Para quem ainda não virou cliente.",""],
 ["depois","leads","Após o sinal",UT,"Boas-vindas de quem fechou no evento",`Bem-vindo à ClickMassa, {{nome}}! 🎉
Seu convite dourado do Click Digital já é seu. Agora vamos à implantação: {{consultor}} vai te chamar para agendar o início.`,["Agendar implantação"],"Utilidade: é sobre uma compra já feita.",""],
 ["depois","forum","10/11 · 10h",MK,"Resumo das palestras",`{{nome}}, o Fórum acabou, mas o aprendizado fica. 📚
Preparamos *3 insights das palestras + 1 aplicação prática* para sua empresa. Quer receber?`,["Quero o resumo","Não quero receber"],"Só se a organização permitir o mailing depois do evento.",""],
 ["depois","cd","18/11 · 10h",MK,"Abertura de vendas do Click Digital",`A *3ª edição do Click Digital* está com vendas abertas! ✨
Para quem passou no nosso estande no Fórum:
🎟️ Ingressos a partir de *R$ 197* (50% off)
👥 *Compre 1, leve 2*
Garanta o seu: {{link}}`,["Comprar agora","Não quero receber"],"Link da página de vendas na Tikat.",""],
 ["depois","prod","14/11 · 10h",UM,"Follow-up para produtores",`Oi, {{nome}}! Aqui é o Robson, da *Tikat*.
Foi bom falar com você no Fórum sobre o *{{evento}}*. Preparei uma proposta para colocar seus ingressos à venda com check-in integrado. Posso te enviar?`,["Pode enviar","Não quero receber"],"Robson envia individualmente.",""]
];

// id → [título, uso, fase, formato]
const MEDIA = {
 "a01-cupom-55-dark-1080x1080":["Cupom 55% · escuro","Header do disparo 1 · WhatsApp","antes","1:1"],
 "a02-cupom-55-light-1080x1080":["Cupom 55% · claro","Variação do header · WhatsApp","antes","1:1"],
 "a03-cupom-55-story-1080x1920":["Cupom 55% · story","Close Friends ou status do WhatsApp. Não publicar aberto.","antes","9:16"],
 "a04-cupom-55-feed-1080x1350":["Você é cliente, você tem 55%","Close Friends · feed 4:5","antes","4:5"],
 "a05-estamos-no-forum-feed-1080x1350":["A ClickMassa vai estar no Fórum","Feed aberto · patrocinador Ouro","antes","4:5"],
 "a06-estamos-no-forum-story-1080x1920":["Estaremos no Fórum · story","Stories abertos","antes","9:16"],
 "a07-quantas-vendas-feed-1080x1350":["Quantas vendas sua empresa perde?","Conceito da campanha · feed e anúncio","antes","4:5"],
 "a08-convite-vip-1080x1080":["Convite VIP","Enviado junto com o convite 1:1","antes","1:1"],
 "a09-convite-red-carpet-1080x1080":["Convite Red Carpet","Parceiros e clientes-case","antes","1:1"],
 "a10-contagem-10-dias-story-1080x1920":["Faltam 10 dias","Story · 26/10","antes","9:16"],
 "a11-contagem-05-dias-story-1080x1920":["Faltam 5 dias","Story · 31/10","antes","9:16"],
 "a12-contagem-01-dia-story-1080x1920":["É amanhã","Story · 04/11","antes","9:16"],
 "a13-pitch-andre-luz-feed-1080x1350":["Pitch do André Luz","Preencher dia, hora e palco","antes","4:5"],
 "a14-raio-x-de-vendas-1080x1080":["Raio-X de Vendas","Feed e header do disparo do Raio-X","antes","1:1"],
 "a15-desafie-a-ia-feed-1080x1350":["Desafie a IA","Feed e anúncio","antes","4:5"],
 "a16-envelope-preto-feed-1080x1350":["Envelope preto","Feed · ativação do evento","antes","4:5"],
 "a17-localizacao-estande-1080x1080":["Localização do estande","Preencher {{local}} quando a organização confirmar","antes","1:1"],
 "d01-e-hoje-story-1080x1920":["É hoje","Story · 05/11 manhã","durante","9:16"],
 "d02-ia-ao-vivo-story-1080x1920":["IA atendendo ao vivo","Story · durante o evento","durante","9:16"],
 "d03-ultimas-horas-story-1080x1920":["Últimas horas · envelope preto","Story · 06/11 tarde","durante","9:16"],
 "d04-estamos-aqui-1080x1080":["Te esperamos no estande","Header dos disparos do evento","durante","1:1"],
 "p01-obrigado-1080x1080":["Obrigado","Header do pós-evento","depois","1:1"],
 "p02-obrigado-feed-1080x1350":["Foram 2 dias","Feed · preencher {{contatos}}","depois","4:5"],
 "p03-oferta-expira-hoje-1080x1080":["A condição termina hoje","Header · 13/11","depois","1:1"],
 "p04-indique-1080x1080":["Indique e ganhe","Header · 11/11 · preencher {{beneficio}}","depois","1:1"]
};

const COTA = [
 ["staff","5 ingressos VIP em giro","Rotacionados pela equipe para assistir às palestras."],
 ["star","Patrocinador cota Ouro","Nome em destaque no site do evento."],
 ["news","Releases e mailings de imprensa","Nome incluso no material enviado à imprensa."],
 ["social","Logo nas redes do Fórum","Logomarca em destaque nos perfis do evento."],
 ["ticket","2 Diamond + 30 VIP + 10 Red Carpet","Diretoria, convidados, equipe e parceiros."],
 ["coupon","55% de desconto para a base","Cupom CLICKMASSA para disparar aos clientes."],
 ["led","Totens de LED","Ativação de marca espalhada pelo evento."],
 ["video","Vídeo de 30s no telão","Institucional no telão principal."],
 ["booth","Estande de 9m²","Personalizável, na Área de Exposição."],
 ["totem","Totem Click + Fórum","Espaço em frente ao estande para totem próprio."],
 ["mic","Entrevista no podcast","Participação no podcast do evento."]
];


// Palestrantes confirmados no site do Fórum (21 de +30). Dia e horário saem com a grade oficial.
const TALKS = [
 ["ricardo-amorim","Ricardo Amorim","Economista, citado pela Forbes como o mais influente do Brasil"],
 ["luis-justo","Luís Justo","CEO do Rock in Rio (Rock World)"],
 ["fabiane-maimone","Fabiane Maimone","Autora best-seller e fundadora da Coragem Company"],
 ["antonio-napole","Antônio Napole","Estrategista de +1.000 empresas e fundador da TAB"],
 ["jean-valerio","Jean Valério","CEO do Fórum Negócios, presidente do LIDE RN e autor de O Mapa da Expansão"],
 ["alcione-albanesi","Alcione Albanesi","Fundadora da FLC Lâmpadas e dos Amigos do Bem"],
 ["camila-farani","Camila Farani","Investidora (Shark Tank), uma das mais influentes da América Latina"],
 ["christiane-klem","Christiane Klem","Especialista em liderança, coautora de Propósito em Cada Passo"],
 ["eduardo-shinyashiki","Eduardo Shinyashiki","Presidente do Instituto Eduardo Shinyashiki, autor best-seller"],
 ["heloisa-capelas","Heloísa Capelas","Lidera o Processo Hoffman no Brasil, autora de O Mapa da Felicidade"],
 ["erick-loureiro","Erick Loureiro","Fundador do Grupo ELOS, +48 mil pessoas preparadas"],
 ["arthur-frota","Arthur Frota","Fundador da Tallos (vendida à RD Station) e criador da AFPAR"],
 ["giovanni-begossi","Giovanni Begossi","Bicampeão brasileiro de oratória, palestrante TEDx"],
 ["richard-albanesi","Richard Albanesi","Fundador e CEO da THE LED, vice-presidente da POPAI Brasil"],
 ["joao-adolfo","João Adolfo","Especialista em YouTube, criador do método SMY"],
 ["leonardo-castelo","Leonardo Castelo","Presidente da 300 Franchising, Empreendedor do Ano pela EY"],
 ["rosely-boschini","Rosely Boschini","CEO da Editora Gente, mentora de autores best-sellers"],
 ["vinicius-gama","Vinícius Gama","Diretor comercial do Grupo Favorito"],
 ["vivian-sesto","Vivian Sesto","Sócia da XP Inc., Head de Ações Comerciais da XP Empresas"],
 ["luis-fonseca","Luis Fonseca","Sócio e CEO da Catenate Solutions, conselheiro certificado"],
 ["piero-franceschi","Piero Franceschi","CEO da StartSe, +20 anos em marketing e inovação"]
];
const SETORES = ["Comercial","Marketing","CS / Suporte","Produto / Tech","Financeiro / Adm","Diretoria","Tikat","Click Digital","Outro"];

return {LINKS,P,T,AUD,M,MEDIA,COTA,SV,TALKS,SETORES};
})();
