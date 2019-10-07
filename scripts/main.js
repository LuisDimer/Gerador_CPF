  //Nove primeiros digitos
  var primeiroDigito = Math.floor(Math.random() * 10);
  var segundoDigito = Math.floor(Math.random() * 10);
  var terceiroDigito = Math.floor(Math.random() * 10);
  var quartoDigito = Math.floor(Math.random() * 10);
  var quintoDigito = Math.floor(Math.random() * 10);
  var sextoDigito = Math.floor(Math.random() * 10);
  var setimoDigito = Math.floor(Math.random() * 10);
  var oitavoDigito = Math.floor(Math.random() * 10);
  var nonoDigito = Math.floor(Math.random() * 10);

  //Primeiro Dígito Verificador
  var primeiroVerificador = ((primeiroDigito * 10) + (segundoDigito * 9) + (terceiroDigito * 8) + (quartoDigito * 7) + (quintoDigito * 6) + (sextoDigito * 5) + (setimoDigito * 4) + (oitavoDigito * 3) + (nonoDigito * 2)) % 11;
  if (primeiroVerificador < 2){
  primeiroVerificador = 0;

  }else {
  primeiroVerificador = 11 - primeiroVerificador;
  }

  //Segundo Dígito Verificador
  var segundoVerificador = ((primeiroDigito * 11) + (segundoDigito * 10) + (terceiroDigito * 9) + (quartoDigito * 8) + (quintoDigito * 7) + (sextoDigito * 6) + (setimoDigito * 5) + (oitavoDigito * 4) + (nonoDigito * 3) + (primeiroVerificador * 2)) % 11;
  if (segundoVerificador < 2){
  segundoVerificador = 0;

  }else {
  segundoVerificador = 11 - segundoVerificador;
  }

  document.write("CPF gerado: " + primeiroDigito, segundoDigito, terceiroDigito + "." + quartoDigito, quintoDigito, sextoDigito + "." + setimoDigito, oitavoDigito, nonoDigito + "-" + primeiroVerificador, segundoVerificador);