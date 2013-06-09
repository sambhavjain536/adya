App = Ember.Application.create();

App.Router.map(function() {
  this.resource('discography');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.DiscographyRoute = Ember.Route.extend({
  model: function() {
    return App.Album.find();
  }
});

App.AlbumController = Ember.ObjectController.extend({
  coverImage: function() {
    return 'images/album-' + this.get('model').get('title').dasherize() + '.png';
  }.property(),

  trackLists: function() {
    var tracks = this.get('model').get('tracks');

    return [ tracks.slice(0, 6), tracks.slice(6, 12), tracks.slice(12, 18) ];
  }.property()
});

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});

App.Album = DS.Model.extend({
  title: DS.attr('string'),
  tracks: DS.hasMany('App.Track')
});

App.Track = DS.Model.extend({
  title: DS.attr('string'),
  composer: DS.attr('string')
});

App.Album.FIXTURES = [
  {
    id: 1,
    title: 'Classic 1',
    tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    id: 2,
    title: 'Classic 2'
  },
  {
    id: 3,
    title: 'Classic Special'
  },
  { id: 4,
    title: 'Best Classic'
  },
  {
    id: 5,
    title: 'Classic 3'
  }
];

App.Track.FIXTURES = [
  {
    id: 1,
    title: 'Light Cavalry Achrimides',
    composer: 'F. Von Suppé'
  },
  {
    id: 2,
    title: 'Tritsch Tratsch Phaeromidos',
    composer: 'J. Strauss-Son'
  },
  {
    id: 3,
    title: 'La Gazza Ladra Voladiche',
    composer: 'G. Rossini'
  },
  {
    id: 4,
    title: 'Menuet for Stringquintet Tsjardjeb',
    composer: 'L. Boccherini'
  },
  {
    id: 5,
    title: 'Serenade for Strings Paramankos',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 6,
    title: 'Out of Africa Carafulia',
    composer: 'W.A. Mozart'
  },
  {
    id: 7,
    title: 'Symphony Nr 40 Xophoratis',
    composer: 'W.A. Mozart'
  },
  {
    id: 8,
    title: 'La Primavera Soliveyra',
    composer: 'A. Vivaldi'
  },
  {
    id: 9,
    title: 'Romanza Zeyvolo',
    composer: 'W.A. Mozart'
  },
  {
    id: 10,
    title: 'Ode to Joy Imar It Heri',
    composer: 'L. Von Beethoven'
  },
  {
    id: 11,
    title: 'Eine Kleine Nachtmusik Djagobe',
    composer: 'W.A. Mozart'
  },
  {
    id: 12,
    title: 'Elvira Madigan Djazome',
    composer: 'W.A. Mozart'
  },
  {
    id: 13,
    title: 'The Marriage of Figaro Feztawi',
    composer: 'W.A. Mozart'
  },
  {
    id: 14,
    title: 'Habanera Frachotexar',
    composer: 'G. Bizet'
  },
  {
    id: 15,
    title: 'Walz of the Flowers Quosibatu',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 16,
    title: 'Ruslan and Ludmilla Fabileju',
    composer: 'M.I. Glinka'
  },
  {
    id: 17,
    title: 'Il Trovatore Quodis Es Vitar',
    composer: 'G. Verdi'
  }
];
