// Closure é quando uma função "lembra" seu escopo léxico, o escopo em que ela foi declarada, mesmo quando a função é executada fora desse escopo.

// Closure permite a função acessar e manipular variavéis externas à função (se declaradas no escopo de origem da função)

// TODA A FUNÇÃO JAVASCRIPT SABE EXATAMENTE NÃO SÓ O QUE TEM DENTRO DELA MAS TAMBÉM O QUE TEM NO ESCOPO EM QUE ELA FOI CRIADA.

// OU SEJA, QUANDO EXPORTARMOS UMA FUNÇÃO PARA OUTRO ARQUIVO E DEFINIR UM NOVO VALOR A UMA VARIAVEL QUE ESSA FUNÇÃO USA COMO REFERENCIA, A FUNÇÃO AINDA USARÁ A VARIAVEL ANTIGA, POIS É A ANTIGA QUE ESTÁ NO SEU ESCOPO LÉXICO.

// CLOSURE É UM CONCEITO SIMPLES QUE JÁ USAMOS SEM NEM PERCEBER. ENTRANTO, É IMPORTANTE ESTUDAR ESSE CONCEITO PARA QUANDO FOR EXTRAR UMA FUNÇÃO DE UM ARQUIVO PARA OUTRO USANDO module.exports.