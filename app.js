var app = new Vue({
  el: '#app',
  data: {
    firstName: "Océane",
    lastName: "Cornevin",
    photo: "O_Cornevin.jpg",
    twitter: "O_Cornevin",
    github: "Umi130",
    mail: "o.cornevin@gmail.com",
    experiences: [{
      dateBegin: "Mars 2017",
      dateEnd: "Aujourd'hui",
      name: "ZED",
      title: "Chargée de développement documentaire",
      description: "Enquête, recherche et écriture de dossiers documentaire proposés aux chaînes françaises et internationales (ARTE, RMC, NHK, France Télévisions)"
    }, {
      dateBegin: "Octobre 2017",
      dateEnd: false,
      name: "CNN - The Paris Bureau",
      title: "Assistante de rédaction",
      description: "Proposition d’idées de reportage, enquête et vérification de la véracité d’informations pour le compte des journalistes de CNN, suggestions d’intervenants puis organisation des interviews."
    }, {
      dateBegin: "2012",
      dateEnd: "2013",
      name: "Le Dauphiné Libéré",
      title: "Stagiaire et correspondant de presse",
      description: false
    }],
    formations: [{
      dateBegin: "2012",
      dateEnd: "2014",
      name: "Master Journalisme",
      university: "Sciences Po Grenoble"
    }, {
      dateBegin: "2009",
      dateEnd: "2012",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Grenoble"
    }],
    languages: ["Anglais"],
    skills: ["Node", "VueJS", "D3js", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})