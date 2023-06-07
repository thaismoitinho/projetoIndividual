var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

  instrucaoSql = ''

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
        
`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
    SELECT 
    COUNT(*) AS usuarios,
  SUM(CASE WHEN pontuacao = 0 THEN 1 ELSE 0 END) AS pontoZero,
  SUM(CASE WHEN pontuacao = 1 THEN 1 ELSE 0 END) AS pontoUm,
  SUM(CASE WHEN pontuacao = 2 THEN 1 ELSE 0 END) AS pontoDois,
  SUM(CASE WHEN pontuacao = 3 THEN 1 ELSE 0 END) AS pontoTres,
  SUM(CASE WHEN pontuacao = 4 THEN 1 ELSE 0 END) AS pontoQuatro,
  SUM(CASE WHEN pontuacao = 5 THEN 1 ELSE 0 END) AS pontoCinco
  FROM 
    resposta;
      `;
  } else {
    console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    return
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

  instrucaoSql = ''

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
        SELECT 
  COUNT(*) AS usuarios,
SUM(CASE WHEN pontuacao = 0 THEN 1 ELSE 0 END) AS pontoZero,
SUM(CASE WHEN pontuacao = 1 THEN 1 ELSE 0 END) AS pontoUm,
SUM(CASE WHEN pontuacao = 2 THEN 1 ELSE 0 END) AS pontoDois,
SUM(CASE WHEN pontuacao = 3 THEN 1 ELSE 0 END) AS pontoTres,
SUM(CASE WHEN pontuacao = 4 THEN 1 ELSE 0 END) AS pontoQuatro,
SUM(CASE WHEN pontuacao = 5 THEN 1 ELSE 0 END) AS pontoCinco
FROM 
  resposta;
`;

  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
        SELECT 
        COUNT(*) AS usuarios,
      SUM(CASE WHEN pontuacao = 0 THEN 1 ELSE 0 END) AS pontoZero,
      SUM(CASE WHEN pontuacao = 1 THEN 1 ELSE 0 END) AS pontoUm,
      SUM(CASE WHEN pontuacao = 2 THEN 1 ELSE 0 END) AS pontoDois,
      SUM(CASE WHEN pontuacao = 3 THEN 1 ELSE 0 END) AS pontoTres,
      SUM(CASE WHEN pontuacao = 4 THEN 1 ELSE 0 END) AS pontoQuatro,
      SUM(CASE WHEN pontuacao = 5 THEN 1 ELSE 0 END) AS pontoCinco
      FROM 
        resposta;
`;
  } else {
    console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    return
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal
}
