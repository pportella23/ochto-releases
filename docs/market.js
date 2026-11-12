// One price per visitor: R$ 149 when this computer is in Brazil (time zone, else pt-BR), US$ 39 elsewhere.
// Loaded in <head> so the right price shows on first paint; the zone list comes from src/shared/commerce.ts.
(function () {
  var zones = ["America/Araguaina","America/Bahia","America/Belem","America/Boa_Vista","America/Campo_Grande","America/Cuiaba","America/Eirunepe","America/Fortaleza","America/Maceio","America/Manaus","America/Noronha","America/Porto_Acre","America/Porto_Velho","America/Recife","America/Rio_Branco","America/Santarem","America/Sao_Paulo","Brazil/Acre","Brazil/DeNoronha","Brazil/East","Brazil/West"];
  var tz = '';
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch (e) {}
  var br = tz && tz !== 'UTC' && tz !== 'Etc/UTC' ? zones.indexOf(tz) >= 0 : /^pt-br$/i.test(navigator.language || '');
  document.documentElement.setAttribute('data-market', br ? 'brl' : 'usd');
})();
