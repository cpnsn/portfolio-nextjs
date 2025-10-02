export const apprenticeshipData = [
  {
    id: 1,
    title: "OpenClassrooms",
    content: (
      <div className="text-sm mt-4 mb-8 lg:w-[80%]">
        <p>
          J’ai suivi cette formation en alternance à raison d’un jour de
          formation par semaine pendant deux ans.
        </p>
        <p className="mt-4">
          Au programme : <br></br> • choisir une solution technique adaptée à un
          client et travailler en mode Agile, <br></br> • créer des sites webs
          avec HTML et CSS, <br></br> • créer des applications web dynamiques
          avec JavaScript et React, <br></br> • communiquer avec le back-end de
          l’application grâce à une API, <br></br> • mettre en œuvre des test
          unitaires et d’intégration et débugger le code, <br></br> • résoudre
          des problèmes techniques avec un langage de programmation et des
          algorithmes, <br></br> • refactoriser du code pour qu’il soit plus
          moderne et optimisé.
        </p>
      </div>
    ),
    linkProjects: "/portfolio/#openclassrooms",
    linkDiploma: "/images/diplome_OPC_Celine_Poinson.pdf",
    btnText: "Ici Formation",
  },
  {
    id: 2,
    title: "Ici Formation",
    content: (
      <div className="text-sm mt-4 mb-8 lg:w-[80%]">
        <p>
          Implémentation de nouvelles fonctionnalités, résolutions de bugs,
          refontes graphiques, découverte de la méthode agile, implémentation de
          tests unitaires et E2E... autant de tâches sur lesquelles j’ai eu
          l’occasion de travailler chez Ici Formation pendant mes deux années en
          alternance.
        </p>
        <p className="mt-4">
          Voici la liste non exhaustive des technologies et outils avec lesquels
          j’ai travaillé : JavaScript, React, PHP, Symfony, Tailwind, Bootstrap,
          Playwright, Jest, Docker, Webpack, Bitbucket, Vulcan, etc. Je vous
          laisse le soin de parcourir les projets pour plus d’informations.
        </p>
      </div>
    ),
    linkProjects: "/portfolio/#iciformation",
    linkDiploma: null,
    btnText: "OpenClassrooms",
  },
];
