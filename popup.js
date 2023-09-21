document.addEventListener("DOMContentLoaded", function () {
    const numbersInput = document.querySelector("#numbers");
    const form = document.querySelector('form')
    

    const sendValues = async (numbers) =>{
      const embarque = document.querySelector("#embarque")
      const enviarEmbarque = document.querySelector("#enviarEmbarque")
      
      const number = numbers.split(" ");
      for (const num of number){
        embarque.value = num
        enviarEmbarque.click()
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }

    form.addEventListener('submit', async (e) =>  {
      e.preventDefault();
      
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
      
      const numbers = numbersInput.value;

      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: sendValues,
        args: [numbers]
      })
    })

    // const campo = document.getElementById("username");
    // submitButton.addEventListener("click", function () {
    //     numbersInput.value = "foi"
    //     console.log("oii");
    //   const numbers = numbersInput.value.split("\n"); // Divida os números por quebra de linha
    //   // Lógica para colar e enviar os números, você precisará adaptar isso ao seu caso específico
    //   for (const number of numbers) {
    //     // Simule a ação de colar o número em um campo de entrada e enviar
    //     console.log(`Preenchendo e enviando: ${number}`);
    //   }
    // });
  });
  