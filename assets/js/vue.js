var test = test || {};

test.taleo = (function ($) {
  let app;

  let init = function () {
    app = new Vue({
      el: "#app",
      data: {
        sexes: [
          "Homme",
          "Femme",
          "Mixte",
        ],
        paires: null,
        checkedSexes: [],
      },
      created: function () {
        this.fetchData();
      },

      methods: {
        fetchData: function () {
          this.paires = [
            {
              "article": "Air Jordan 1 Low SE",
              "prix": "119,99 €",
              "sexe": "Homme",
              "sport": "Basket",
              "url": "./assets/img/air-jordan-1-low-se.jpg",
              "couleur": "noir, rouge"
            },
            {
              "article": "Mercurial Vapor 14 elite",
              "prix": "249,99 €",
              "sexe": "Homme",
              "sport": "Football",
              "url": "/assets/img/mercurial-vapor-14-elite.jpg",
              "couleur": "blanc, jaune"
            },
            {
              "article": "Nike Zoom Mamba 3",
              "prix": "97,97 €",
              "sexe": "Homme",
              "sport": "Running",
              "url": "/assets/img/nike-zoom-mamba-3.jpg",
              "couleur": "bleu"
            },
            {
              "article": "Nike Downshifter 11",
              "prix": "59,99 €",
              "sexe": "Femme",
              "sport": "Running",
              "url": "/assets/img/nike-downshifter-11.jpg",
              "couleur": "noir, rose"
            },
            {
              "article": "Nike Phantom GT Elite 3D AG-Pro",
              "prix": "269,99 €",
              "sexe": "Femme",
              "sport": "Football",
              "url": "/assets/img/nike-phantom-gt-elite-3d-ag-pro.jpg",
              "couleur": "blanc, rose, bleu, jaune"
            },
            {
              "article": "Nike React Metcon Turbo",
              "prix": "149,99 €",
              "sexe": "Femme",
              "sport": "Running",
              "url": "/assets/img/nike-react-metcon-turbo.jpg",
              "couleur": "rose, bleu"
            },
            {
              "article": "Nike Tiempo Legend 8 Club IC",
              "prix": "49,99 €",
              "sexe": "Mixte",
              "sport": "Football",
              "url": "/assets/img/nike-tiempo-legend-8-club-ic.jpg",
              "couleur": "vert, blanc"
            },
            {
              "article": "PG 5",
              "prix": "119,99 €",
              "sexe": "Mixte",
              "sport": "Basket",
              "url": "/assets/img/pg-5.jpg",
              "couleur": "noir, rouge, blanc"
            },
            {
              "article": "Nike Premier II FG",
              "prix": "99,99 €",
              "sexe": "Mixte",
              "sport": "Football",
              "url": "/assets/img/nike-premier-ii-fg.jpg",
              "couleur": "noir, gris"
            },
            {
              "article": "",
              "prix": "",
              "sexe": "",
              "sport": "",
              "photo": "",
              "couleur": ""
            },
            {
              "article": "",
              "prix": "",
              "sexe": "",
              "sport": "",
               "photo": "",
               "couleur": ""
             }
           
          ];
        },
        filterPaires: function (data) {
          if (this.checkedSexes.length == 0) return true;
          return this.checkedSexes.includes(data.sexe);
        },
      },
    });
  };
  return { init, app };
})();

(function () {
  test.taleo.init();
})();

