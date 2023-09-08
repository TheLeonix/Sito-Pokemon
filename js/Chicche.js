const Arraycount=()=>
{
  let Lunghezza = pokedex.length+1
  document.querySelector("#NumPKM").innerHTML = Lunghezza;
  document.querySelector("#StampaNum").innerHTML = Lunghezza;
}

let Tipi=["Normale", "Fuoco", "Acqua", "Elettro", "Erba", "Ghiaccio", "Lotta", "Veleno", "Terra", "Volante", "Psico", "Coleottero", "Roccia", "Spettro", "Acciaio", "Drago", "Buio", "Folletto","???","Ombra"]

//L'aggiornamento della data ci impiegherà circa 1 minuto, purtropo non è immediato ma funziona!
const generateRandomNumberBasedOnDate=(date)=>
{
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const rng = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    return Math.floor(rng(seed) * pokedex.length);
  }
  const generateRandomNumberBasedOnDateTipe=(date)=>
{
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const rng = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    return Math.floor(rng(seed) * 20);
  }
  const currentDate = new Date();
  const randomNum = generateRandomNumberBasedOnDate(currentDate);
  const randomNum2 = generateRandomNumberBasedOnDateTipe(currentDate);
  const CreaPKM=()=>
  {

    document.querySelector("#PKMRNG").innerHTML = pokedex[randomNum].nome;
    document.querySelector("#StampaPoke").innerHTML = pokedex[randomNum].nome;

  }
  const CreaTipo=()=>
  {

    document.querySelector("#TipoRNG").innerHTML = Tipi[randomNum2];
    document.querySelector("#StampaTipo").innerHTML = Tipi[randomNum2];

  }
  
  console.log(randomNum);

  const Carica=()=>
  {
    Arraycount()
    CreaPKM()
    CreaTipo()
    StampaPKMV(randomNum)
  }
  const CaricaRand=()=>
  {
    Arraycount()
    CreaPKM()
    CreaTipo()
    const randomInt = Math.floor(Math.random() * (pokedex.length - 0 + 1)) + 0;
    localStorage.setItem('Current',randomInt)
    StampaPKMV(randomInt)
    document.querySelector("#uno").value="<--"+pokedex[randomInt-1].nome
    document.querySelector("#due").innerHTML=pokedex[randomInt].nome
    document.querySelector("#tre").value=pokedex[randomInt+1].nome+"-->"
    document.querySelector("#PrimoBar").value="<--"+pokedex[randomInt-1].nome
    document.querySelector("#SecondoBar").innerHTML=pokedex[randomInt].nome
    document.querySelector("#TerzoBar").value=pokedex[randomInt+1].nome+"-->"
  }
  const CaricaSearch=()=>
  {
    Arraycount()
    CreaPKM()
    CreaTipo()
  }
  const searchInput = document.querySelector('#searchInput');
  const suggestionsContainer = document.querySelector('#suggestions');
  const searchInputM = document.querySelector('#searchInputM');
  const suggestionsContainerM = document.querySelector('#suggestionsM');
  let suggestions=[]
  
  for(i=0;i<pokedex.length;i++)
  {
    suggestions.push(pokedex[i].nome)
  }
  for(i=0;i<Tipi.length;i++)
  {
    suggestions.push(Tipi[i])
  }
  
  const maxSuggestions = 8; // Imposta il numero massimo di suggerimenti da mostrare

  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      suggestionsContainer.style.display = 'none';
  });
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(searchTerm)
        );
    
        if (filteredSuggestions.length > 0) {
            suggestionsContainer.innerHTML = '';
            for (let i = 0; i < Math.min(maxSuggestions, filteredSuggestions.length); i++) {
                const suggestion = filteredSuggestions[i];
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    suggestionsContainer.innerHTML = '';
                    let Parola=document.querySelector("#searchInput").value
                    for(j=0;j<pokedex.length;j++)
                    {
                        console.log("Entrato")
                        if(Parola.toLowerCase()===pokedex[j].nome.toLowerCase())
                        {
                          localStorage.setItem('Current',j-1)
                          window.location.href='StampaPKM.html'
                        }
                    }
                });
                suggestionsContainer.appendChild(suggestionItem);
            }
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });
    searchInputM.addEventListener('input', () => {
      const searchTerm = searchInputM.value.toLowerCase();
      const filteredSuggestions = suggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(searchTerm)
      );
  
      if (filteredSuggestions.length > 0) {
          suggestionsContainerM.innerHTML = '';
          for (let i = 0; i < Math.min(maxSuggestions, filteredSuggestions.length); i++) {
              const suggestion = filteredSuggestions[i];
              const suggestionItem = document.createElement('div');
              suggestionItem.classList.add('suggestion-item');
              suggestionItem.textContent = suggestion;
              suggestionItem.addEventListener('click', () => {
                  searchInputM.value = suggestion;
                  suggestionsContainerM.innerHTML = '';
              });
              suggestionsContainerM.appendChild(suggestionItem);
          }
          suggestionsContainerM.style.display = 'block';
      } else {
          suggestionsContainerM.style.display = 'none';
      }
  });
  })

  document.addEventListener('click', (event) => {
      if (!suggestionsContainer.contains(event.target) && event.target !== searchInput) {
          suggestionsContainer.style.display = 'none';
      }
      if (!suggestionsContainerM.contains(event.target) && event.target !== searchInput) {
        suggestionsContainerM.style.display = 'none';
    }
  });

//Test
const sideMenu = document.getElementById("sideMenu");
const SideBarOpen=()=>
{
  sideMenu.style.left = "0";
}
const SideBarClose=()=>
{
  sideMenu.style.left = "-250px";
}
document.querySelector("#searchInput").addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
     const FastSearch=()=> {
      console.log("Entrato")
      let Parola=document.querySelector("#searchInput").value
      for(i=0;i<pokedex.length;i++)
      {
          if(Parola.toLowerCase()===pokedex[i].nome.toLowerCase())
          {
            localStorage.setItem('Current',i-1)
            window.location.href='StampaPKM.html'
          }
      }
    }
    FastSearch()
  }
});

document.querySelector("#SearchByName").addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
    RicercaN();
  }
});
document.querySelector("#SearchByNameM").addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
    RicercaNM();
  }
});
//Test