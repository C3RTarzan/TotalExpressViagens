chrome.runtime.onInstalled.addListener(() => {// adicionamos event listener p/ escutar e rodar a extenção 
  console.log("foi");
}) // Quando a nossa AP rodar  acessamos o local store API e setamos INGLÊS como linguagem padrão