let MechantDisney = [
    {
        nom : "Capitaine Crochet",
        image : "images/capitaine-crochet.jpeg",
        age : 42,
        pouvoir: ["Narcissique", "Rancunier", "Se bat avec son crochet comme avec une épée"],
        humeur: "Tout le temps énervé, sauf quand il regarde son reflet dans un miroir. Là, il devient le plus calme des hommes.",
        défauts: [
          "Passer ses journées à poursuivre un gamin qui vole",
        ],
        devise: "Et si Peter Pan pense qu'il peut m'échapper, il est gravement sous-estimé… ou alors c'est juste moi qui ne suis jamais au bon endroit au bon moment.",
        male : true,
        premièreApparition : 1904, 
        histoire : [
            {
                Raisons : "Se venger de Peter Pan pour lui avoir coupé la main.",
                plan : "Poursuivre Peter Pan au Pays Imaginaire.",
            }
        ]
    },
    {
        nom : "Mère Gothel",
        image : "images/Mère-Gothel.jpeg",
        age : 79,
        pouvoir: ["Ne veut pas voir le temps passer", "Coiffeuse", "Manipulatrice"],
        humeur: "Super calme… tant qu’on ne parle pas de ses rides, de ses cheveux, ou de Raiponce.",
        défauts: [
          "Se faire passer pour une mère aimante tout en capturant des jeunes filles pour de la magie capillaire.",
        ],
        devise: "Tu veux la jeunesse éternelle ? Viens me voir, mais n’approche pas mes miroirs !",
        male : false,
        premièreApparition : 2010,
        histoire : [
            {
                Raisons : "Rester Jeune.",
                plan : "Utilise la chevelure de Raiponce afin de rester eternellement jeune en la manipulant.",
            }
        ]
    },
    {
        nom: "Shere Khan",
        image : "images/Shere-Khan.jpeg",
        age : 10,
        pouvoir: ["Super force", "Agilité", "Ego plus gros que la jungle."],
        humeur: "Toujours sûr de lui, même quand il est sur le point de perdre face à un petit garçon qui parle aux animaux.",
        défauts: [
            "Il pense que son rugissement peut résoudre tous les problèmes (spoiler : non).",
         ],
        devise: "Je suis Shere Khan, le seul tigre capable de terrifier une jungle entière... sauf si je me fais distraitre par un papillon. Ou un miroir.",
        male : true,
        premièreApparition : 1967,
        histoire : [
            {
                Raisons : "Il a promis de tuer tout humain qui mets les pieds dans la Jungle.",
                plan : "Retourne les loups contre Mowgli.",
            }
        ]
    },
 
    {
        nom : "Ursula",
        image : "images/Ursula.jpg",
        age : 67,
        pouvoir: ["Contrats magiques", "Sociable surtout quand c'est pas des poissons", "Rire maléfique"],
        humeur: "A la fois méchante et un peu trop géniale pour être ignorée.",
        défauts: [
          "N’aime pas la critique, surtout quand elle vient d'un poisson.",
        ],
        devise: "Tu veux échanger ta voix contre des jambes ? Parfait, mais n'oublie pas de signer en bas à droite... et non, je n'ai pas de politique de remboursement !",
        male : false,
        premièreApparition : 1989,
        histoire : [
            {
                Raisons : "Se venger de Triton.",
                plan : "conclure des contrats avec des sirènes afin de faire avancer ses propres ambitions.",
            }
        ]
    },
    {
        nom : "La Méchante Reine",
        image : "images/Méchante-Reine.png",
        age : 31,
        pouvoir: ["Narcissique", "Pomme empoisonnée", "Obsession"],
        humeur: "Toujours un peu stressée, mais un bon coup de miroir et elle se sent prête à tuer pour un peu de reconnaissance.",
        défauts: [
          "Elle passe plus de temps à se regarder dans son miroir qu'à réfléchir aux conséquences de ses actes.",
        ],
        devise: "Je suis la plus belle du royaume… et si tu n'es pas d'accord, un poison à la pomme t’apprendra à ne pas contester mes principes de beauté.",
        male : false,
        premièreApparition : 1937,
        histoire : [
            {
                Raisons : "devenir la plus belle.",
                plan : "faire assassiner Blanche-Neige par un chasseur puis avec une pomme empoisonnée.",
            }
        ]
    },
    {
        nom : "Scar",
        image : "images/Scar.jpeg",
        age : 14,
        pouvoir: ["Narcissique", "Enervé en continu", "Associable"],
        humeur: "Toujours aigri.",
        défauts: [
          "L’idée de famille le stresse tellement qu'il a oublié comment se faire des amis",
        ],
        devise: "Je n’ai pas besoin de tout ce royaume, je veux juste être *légèrement* au-dessus de tout le monde…",
        male : true,
        premièreApparition : 1994,
        histoire : [
            {
                Raisons : "Complexe de supériorité",
                plan : "diriger une armée de hyènes pour prendre le trône en trahisant et tuant Mufasa et Simba",
            }
        ]
    },
    {
        nom : "Jafar",
        image : "images/jafar.png",
        age : 56,
        pouvoir: ["Génie", "Stratège", "Menteur expert (les pouvoirs précédents sont annulés)"],
        humeur: "Déteste tout le monde, sauf son cobra (et encore, ça dépend du jour).",
        défauts: [
          "Son plan A ? Récupérer la lampe d’Aladdin. Son plan B ? …Eh bien, il n’a pas de plan B.",
        ],
        devise: "Je suis Jafar, le génie du mal… mais avec un vrai génie, je serais déjà roi. Aladdin, t'es juste un petit voleur avec un tapis. Sérieusement, qui vole un tapis ?!",
        male : true,
        premièreApparition : 1992,
        histoire : [
            {
                Raisons : "Cupidité.",
                plan : "Obtenir la lampe magique pour renverser le sultan et se marier avec Jasmine.",
            }
        ]
    },
]

function createCard(){

    MechantDisney.forEach(element => {
        let newCard = document.createElement("section");
    newCard.classList.add("Card", "grand-format");

    let principalDiv = document.createElement("div");
    principalDiv.classList.add("principal");

    let cardPicture = document.createElement("img");
    cardPicture.src = element.image ;

    let cardName = document.createElement("h1");
    cardName.innerHTML = element.nom;

    principalDiv.appendChild(cardPicture);
    principalDiv.appendChild(cardName);

    let infoDiv = document.createElement("div");
    infoDiv.classList.add("informations");

    let cardAge = document.createElement("h2");
    cardAge.innerHTML = "Age : ";
    let cardAgeNumber = document.createElement("span");
    cardAgeNumber.innerHTML = element.age;

    let cardPower = document.createElement("h2");
    cardPower.innerHTML = "Pouvoir";

    let cardPowerList = document.createElement("ul");

    for(let i = 0; i < element.pouvoir.length; i++)
    {
        let pouvoir = document.createElement("li");
        pouvoir.innerHTML = element.pouvoir[i];

        cardPowerList.appendChild(pouvoir);
    }

    let cardHumor = document.createElement("h2");
    cardHumor.innerHTML = "Humeur : ";
    let cardHumorText = document.createElement("span");
    cardHumorText.innerHTML = element.humeur;

    let cardFlaw = document.createElement("h2");
    cardFlaw.innerHTML = "Défauts : ";
    let cardFlawtext = document.createElement("span");
    cardFlawtext.innerHTML = element.défauts;

    let cardDevise = document.createElement("h2");
    cardDevise.innerHTML = "Devise : ";
    let cardDeviseText = document.createElement("span");
    cardDeviseText.innerHTML = element.devise;


    let cardFirstAppearance = document.createElement("h2");
    cardFirstAppearance.innerHTML = "Première apparition : ";
    let cardFirstAppearanceText = document.createElement("span");
    cardFirstAppearanceText.innerHTML = element.premièreApparition;


    let cardHistory = document.createElement("h2");
    cardHistory.innerHTML = "Histoire : ";

    let cardHistoryList = document.createElement("ul")

    for(let x=0; x < element.histoire.length; x++)
    {
        let cardReasonLi = document.createElement("li");
        let cardReasonLiTitle = document.createElement("h2");
        cardReasonLiTitle.innerHTML = "Raisons";


        let cardReasonText = document.createElement("span");
        cardReasonText.innerHTML = element.histoire[x].Raisons;
         
        cardReasonLi.appendChild(cardReasonLiTitle);
         cardReasonLi.appendChild(cardReasonText);
        cardHistoryList.appendChild(cardReasonLi);

        let cardPlanLi = document.createElement("li");
        let cardPlanLiTitle = document.createElement("h2");
        cardPlanLiTitle.innerHTML = "Plan";


        let cardPlanText = document.createElement("span");
        cardPlanText.innerHTML = element.histoire[x].plan;

         
        cardPlanLi.appendChild(cardPlanLiTitle);
        cardPlanLi.appendChild(cardPlanText);
        cardHistoryList.appendChild(cardPlanLi);

    }

        if (element.male==true) {
            newCard.style.backgroundColor = "#FFFA66";
            cardName.style.color ="#459BDE" ;
        }
        else {
            newCard.style.backgroundColor = "#459BDE";
            cardName.style.color ="#FFFA66";
        }


    cardAge.appendChild(cardAgeNumber)
    cardHumor.appendChild(cardHumorText)
    cardFlaw.appendChild(cardFlawtext)
    cardDevise.appendChild(cardDeviseText)
    cardFirstAppearance.appendChild(cardFirstAppearanceText)


    infoDiv.appendChild(cardAge)
    infoDiv.appendChild(cardPower)
    infoDiv.appendChild(cardPowerList)
    infoDiv.appendChild(cardHumor)
    infoDiv.appendChild(cardFlaw)
    infoDiv.appendChild(cardDevise)
    infoDiv.appendChild(cardFirstAppearance)
    infoDiv.appendChild(cardHistory)
    infoDiv.appendChild(cardHistoryList)

    newCard.appendChild(principalDiv);
    newCard.appendChild(infoDiv);

    newCard.addEventListener("click", changerVue);


    let page = document.getElementById("pageprincipale");
    page.appendChild(newCard);
    });  

}


createCard();


document.querySelector("#changerVue").addEventListener("click", changerVue);




let affichageCarrouselActif = true

function changerVue(_event){


    
    if(affichageCarrouselActif){
        console.log(_event.target);
        //la carte devient petite
        let card = document.querySelectorAll(".Card");
        console.log(card);
        card.forEach(x=> {
            x.classList.remove("grand-format")
            x.classList.add("petit-format")
        })

        
        document.querySelector("main").classList.add("mosaique")
        document.querySelector("main").classList.remove("carrousel");
        affichageCarrouselActif = false
    }
    else{
        let card = document.querySelectorAll(".card");
        console.log(_event.target);
        //la carte devient petite
        card.forEach(x=> {
            x.classList.add("grand-format")
            x.classList.remove("petit-format")
        })
        document.querySelector("main").classList.remove("mosaique")
        document.querySelector("main").classList.add("carrousel");
        affichageCarrouselActif = true

    }
}


