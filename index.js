const questions = [
  {
    Question1: "Que signifie le sigle HTML ?",
    propositions: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTransfer Machine Language",
      "HyperText Markdown Language"
    ],
    bonneReponse: "HyperText Markup Language"
  },
  {
    Question2: "Quelle est la fonction principale du CSS ?",
    propositions: [
      "Ajouter de l’interactivité",
      "Créer une base de données",
      "Appliquer du style à une page web",
      "Protéger un site web"
    ],
    bonneReponse: "Appliquer du style à une page web"
  },
   {
    Question3: "Qu’est-ce qu’un navigateur web ?",
    propositions: [
      "Un moteur de recherche",
      "Un logiciel pour naviguer sur Internet",
      "Un antivirus",
      "Un langage de programmation"
    ],
    bonneReponse: "Un logiciel pour naviguer sur Internet"
  },
  {
    Question4: "Quel est l’objectif principal de la cybersécurité ?",
    propositions: [
      "Créer des virus",
      "Espionner les utilisateurs",
      "Protéger les systèmes informatiques",
      "Améliorer la vitesse des connexions"
    ],
    bonneReponse: "Protéger les systèmes informatiques"
  },
  {
    Question5: "JavaScript est un langage :",
    propositions: [
      "De style",
      "De programmation",
      "De requête",
      "De base de données"
    ],
    bonneReponse: "De programmation"
  },
  {
    Question6: "Quel protocole sécurise les sites web ?",
    propositions: [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    bonneReponse: "HTTPS"
  },
  {
    Question7: "Un mot de passe fort doit contenir :",
    propositions: [
      "Seulement des chiffres",
      "Au moins 8 caractères avec chiffres, lettres et symboles",
      "Votre nom complet",
      "Une seule lettre"
    ],
    bonneReponse: "Au moins 8 caractères avec chiffres, lettres et symboles"
  },
  {
    Question8: "Quelle entreprise est connue pour Android ?",
    propositions: [
      "Microsoft",
      "Apple",
      "Google",
      "Samsung"
    ],
    bonneReponse: "Google"
  },
  {
    Question9: "Le cloud computing permet :",
    propositions: [
      "De voler des données",
      "De stocker et accéder aux données en ligne",
      "De coder en Python",
      "D'imprimer à distance"
    ],
    bonneReponse: "De stocker et accéder aux données en ligne"
  },
  {
    Question10: "Un cookie sur le web est :",
    propositions: [
      "Un virus",
      "Un fichier texte stocké par un site",
      "Une base de données",
      "Un moteur de recherche"
    ],
    bonneReponse: "Un fichier texte stocké par un site"
  },
  {
    Question11: "L'innovation technologique désigne :",
    propositions: [
      "La création d’un nouveau logiciel uniquement",
      "Toute amélioration ou nouveauté dans la technologie",
      "Un piratage informatique",
      "La mise à jour d’un mot de passe"
    ],
    bonneReponse: "Toute amélioration ou nouveauté dans la technologie"
  },
  {
    Question12: "Quel langage est utilisé pour interagir avec des bases de données ?",
    propositions: [
      "SQL",
      "CSS",
      "HTML",
      "PHP"
    ],
    bonneReponse: "SQL"
  },
  {
    Question13: "Que permet une API ?",
    propositions: [
      "De créer des images",
      "De faire communiquer deux systèmes",
      "De hacker des comptes",
      "De supprimer un site web"
    ],
    bonneReponse: "De faire communiquer deux systèmes"
  },
  {
    Question14: "Qu'est-ce qu'un pare-feu (firewall) ?",
    propositions: [
      "Un logiciel pour envoyer des mails",
      "Une protection contre les intrusions réseau",
      "Un outil de design web",
      "Un type de navigateur"
    ],
    bonneReponse: "Une protection contre les intrusions réseau"
  },
  {
    Question15: "Un site responsive est :",
    propositions: [
      "Rapide à charger",
      "Compatible avec tous les appareils (PC, mobile, tablette)",
      "Un site avec des vidéos",
      "Un site sécurisé"
    ],
    bonneReponse: "Compatible avec tous les appareils (PC, mobile, tablette)"
  },
  {
    Question16: "Quel langage est principalement utilisé côté serveur ?",
    propositions: [
      "JavaScript",
      "CSS",
      "PHP",
      "HTML"
    ],
    bonneReponse: "PHP"
  },
  {
    Question17: "Quel outil contrôle les versions de code ?",
    propositions: [
      "GIT",
      "Slack",
      "VS Code",
      "Linux"
    ],
    bonneReponse: "GIT"
  },
  {
    Question18: "Le phishing est une technique :",
    propositions: [
      "De sécurisation de données",
      "De manipulation de l'utilisateur pour voler des infos",
      "Pour coder un site web",
      "Pour sauvegarder des fichiers"
    ],
    bonneReponse: "De manipulation de l'utilisateur pour voler des infos"
  },
  {
    Question19: "Un fichier JavaScript a comme extension :",
    propositions: [
      ".html",
      ".css",
      ".js",
      ".php"
    ],
    bonneReponse: ".js"
  },
  {
    Question20: "La 5G est :",
    propositions: [
      "Un langage de programmation",
      "Une norme de cybersécurité",
      "La 5e génération de réseau mobile",
      "Un robot intelligent"
    ],
    bonneReponse: "La 5e génération de réseau mobile"
  }
];


// On récupère les éléments HTML nécessaires pour le quiz
const sectionQuestion = document.getElementById("sectionQuestion");
const questionElement = document.getElementById("Question");
const propositionsElement = document.getElementById("Propositions");
const feedbackElement = document.getElementById("feedback");
const boutonSuivant = document.getElementById("Suivant");

let currentQuestion = 0;
let scoreFinal = 0;
let answered = false;


// On cache la section du quiz au début
const formulaire = document.getElementById("formulaire");
const section = document.getElementById("section1");
let score = 0;
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(formulaire);
  const nom = formData.get("nom");
  const mail = formData.get("email");
  localStorage.setItem("nomkey", nom);
  localStorage.setItem("emailkey", mail);
  formulaire.style.display = "none";

  });


// Fonction pour afficher une question
function afficherQuestion(index) {
    answered = false;
    feedbackElement.textContent = "";
    boutonSuivant.style.display = "none";
    const questionObj = questions[index];
    // Récupérer la clé de la question (ex: "Question1")
    const questionKey = Object.keys(questionObj).find(key => key.startsWith("Question"));
    questionElement.textContent = questionObj[questionKey];

    // Afficher les propositions
    propositionsElement.innerHTML = "";
    questionObj.propositions.forEach((proposition, i) => {
        const btn = document.createElement("button");
        btn.textContent = proposition;
        btn.className = "proposition-btn";
        btn.style.margin = "8px";
        btn.onclick = function() {
            if (answered) return;
            answered = true;
            if (proposition === questionObj.bonneReponse) {
                scoreFinal++;
                feedbackElement.textContent = "Bonne réponse !";
                feedbackElement.style.color = "green";
            } else {
                feedbackElement.textContent = "Mauvaise réponse !";
                feedbackElement.style.color = "red";
            }
            boutonSuivant.style.display = "inline-block";
        };
        propositionsElement.appendChild(btn);
    });
}

// Fonction pour afficher le score final
function afficherScoreFinal() {
    sectionQuestion.innerHTML = `
        <h2>Quiz terminé !</h2>
        <p>Votre score final est : <strong>${scoreFinal} / ${questions.length}</strong></p>
        <button onclick="window.location.reload()">Recommencer</button>
    `;
}

// Gestion du bouton "Question Suivante"
boutonSuivant.addEventListener("click", function() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        afficherQuestion(currentQuestion);
    } else {
        afficherScoreFinal();
    }
});

// Affichage du quiz après le formulaire
formulaire.addEventListener("submit", function () {
    sectionQuestion.style.display = "block";
    afficherQuestion(currentQuestion);
});