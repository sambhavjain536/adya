App = Ember.Application.create();

App.Router.map(function() {
  this.resource('discography');
  this.resource('downloads', function() {
    this.route('videos');
    this.route('photos');
  });
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

App.DownloadsIndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('downloads.videos');
  }
});

App.DownloadsVideosRoute = Ember.Route.extend({
  model: function() {
    return App.Video.find();
  }
});

App.AlbumController = Ember.ObjectController.extend({
  coverImage: function() {
    return 'images/album-' + this.get('model').get('title').dasherize() + '.png';
  }.property(),

  trackLists: function() {
    var tracks = this.get('model').get('tracks');
    var modulo = tracks.get('length') % 3;
    var divider = (tracks.get('length') - modulo) / 3 + 1

    return [ tracks.slice(0, divider), tracks.slice(divider, divider * 2), tracks.slice(divider * 2, divider * 3) ];
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

App.Video = DS.Model.extend({
  title: DS.attr('string'),
  thumbnail: DS.attr('string'),
  album: DS.belongsTo('App.Album')
});

App.Album.FIXTURES = [
  {
    id: 1,
    title: 'Classic 1',
    tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    id: 2,
    title: 'Classic 2',
    tracks: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
  },
  {
    id: 3,
    title: 'Classic Special',
    tracks: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]

  },
  { id: 4,
    title: 'Best Classic',
    tracks: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91]
  },
  {
    id: 5,
    title: 'Classic 3',
    tracks: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117]
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
    title: 'Menuet Tsjardjeb',
    composer: 'L. Boccherini'
  },
  {
    id: 5,
    title: 'Serenade For Strings Paramankos',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 6,
    title: 'Out Of Africa Carafulia',
    composer: 'W.A. Mozart'
  },
  {
    id: 7,
    title: 'Symphony N° 40 Xophoratis',
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
    composer: 'L. von Beethoven'
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
  },
  {
    id: 21,
    title: 'Toreador Atjenki',
    composer: 'G. Bizet'
  },
  {
    id: 22,
    title: 'Alla Turca Ahriahne',
    composer: 'W.A. Mozart'
  },
  {
    id: 23,
    title: 'Morning Mood Trevobima',
    composer: 'E.H. Grieg'
  },
  {
    id: 24,
    title: 'Orpheus In The Underworld Nagodus',
    composer: 'J. Offenbach'
  },
  {
    id: 25,
    title: 'Amazing Grace Siralynth',
    composer: 'E. Abrath'
  },
  {
    id: 26,
    title: 'Hungarian Dance Netonkla',
    composer: 'J. Brahms'
  },
  {
    id: 27,
    title: 'Barcarolle Ourybova',
    composer: 'J. Offenbach'
  },
  {
    id: 28,
    title: 'The Emperor Muvagora',
    composer: 'J. Strauss - Son'
  },
  {
    id: 29,
    title: 'Dance Of The Hours Souraktoff',
    composer: 'A. Ponchielli'
  },
  {
    id: 30,
    title: 'Air Dorilun',
    composer: 'J.S. Bach'
  },
  {
    id: 31,
    title: 'Aïda Solaekride',
    composer: 'G. Verdi'
  },
  {
    id: 32,
    title: 'Capriccio Italien Fagrozzi',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 33,
    title: 'Going Home Midecras',
    composer: 'A.L. Dvorak',
  },
  {
    id: 34,
    title: 'Serenade Lakisong',
    composer: 'J. Haydn'
  },
  {
    id: 35,
    title: 'Swan Lake Ositares',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 36,
    title: 'Harp Concerto Endasori',
    composer: 'G.F. Händel'
  },
  {
    id: 37,
    title: 'Italian Symphony Krilasko',
    composer: 'F. Mendelssohn, Bartholdy'
  },
  {
    id: 41,
    title: 'Wings Of Summer',
    composer: 'P. Sterman - E. Abrath'
  },
  {
    id: 42,
    title: 'Tritsch Tratsch Phaeromidos',
    composer: 'J. Strauss - Son'
  },
  {
    id: 43,
    title: 'Out Of Africa Carafulia',
    composer: 'W.A. Mozart'
  },
  {
    id: 44,
    title: 'Alla Turca Ahriahne',
    composer: 'W.A. Mozart'
  },
  {
    id: 45,
    title: 'Light Cavalry Achrimides',
    composer: 'F. Von Suppé'
  },
  {
    id: 46,
    title: 'Barcarolle Ourybova',
    composer: 'J.Offenbach'
  },
  {
    id: 47,
    title: 'Toreador Atjenki',
    composer: 'G. Bizet'
  },
  {
    id: 48,
    title: 'Symphony N° 40 Xophoratis',
    composer: 'W.A. Mozart'
  },
  {
    id: 49,
    title: 'La Gazza Ladra Voladiche',
    composer: 'G. Rossini'
  },
  {
    id: 50,
    title: 'Aïda Solaekride',
    composer: 'G. Verdi'
  },
  {
    id: 51,
    title: 'La Primavera Soliveyra',
    composer: 'A. Vivaldi'
  },
  {
    id: 52,
    title: 'Morning Mood Trevobima',
    composer: 'E.H. Grieg'
  },
  {
    id: 53,
    title: 'The Emperor Muvagora',
    composer: 'J. Strauss - Son'
  },
  {
    id: 54,
    title: 'Ode To Joy Imar It Heri',
    composer: 'L. von Beethoven'
  },
  {
    id: 55,
    title: 'Romanza Zeyvolo',
    composer: 'W.A. Mozart'
  },
  {
    id: 56,
    title: 'Orpheus In The Underworld Nagodus',
    composer: 'J. Offenbach'
  },
  {
    id: 57,
    title: 'Dance Of The Hours Souraktoff',
    composer: 'A. Ponchielli'
  },
  {
    id: 58,
    title: 'Walz Of The Flowers Quosibatu',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 59,
    title: 'Eine Kleine Nachtmusik Djagobe',
    composer: 'W.A. Mozart'
  },
  {
    id: 60,
    title: 'Hungarian Dance Netonkla',
    composer: 'J. Brahms'
  },
  {
    id: 61,
    title: 'Halleluyah',
    composer: 'Adya - Classic Pop Mix'
  },
  {
    id: 71,
    title: 'Alhambra',
    composer: 'F. Tarrega Eixea - P. Sterman - E. Abrath'
  },
  {
    id: 72,
    title: 'Homecoming From A Foreign Country Denvobe',
    composer: 'F. Mendelssohn - Bartholdy'
  },
  {
    id: 73,
    title: 'Rhapsody Revangos',
    composer: 'S.V. Rachmaninoff'
  },
  {
    id: 74,
    title: 'Wings Of Summer',
    composer: 'P. Sterman - E. Abrath'
  },
  {
    id: 75,
    title: 'Rosamunde Celmanur',
    composer: 'F. Schubert'
  },
  {
    id: 76,
    title: 'Jeux Interdits',
    composer: 'P. Sterman - E. Abrath'
  },
  {
    id: 77,
    title: 'Pleasure Train Rosifora',
    composer: 'J. Strauss - Son'
  },
  {
    id: 78,
    title: 'Light Cavalry Achrimides',
    composer: 'F. Von Suppé'
  },
  {
    id: 79,
    title: 'Toreador Atjenki',
    composer: 'G. Bizet'
  },
  {
    id: 80,
    title: 'Orpheus In The Underworld Nagodus',
    composer: 'J. Offenbach'
  },
  {
    id: 81,
    title: 'Out Of Africa Carafulia',
    composer: 'W.A. Mozart'
  },
  {
    id: 82,
    title: 'Alla Turca Ahriahne',
    composer: 'W.A. Mozart '
  },
  {
    id: 83,
    title: 'Tritsch Tratsch Phaeromidos',
    composer: 'J. Strauss - Son'
  },
  {
    id: 84,
    title: 'Symphony N° 40 Xophoratis',
    composer: 'W.A. Mozart'
  },
  {
    id: 85,
    title: 'Hungarian Dance N° 5 Netonkla',
    composer: 'J. Brahms'
  },
  {
    id: 86,
    title: 'La Gazza Ladra Voladiche',
    composer: 'G. Rossini'
  },
  {
    id: 87,
    title: 'The Emperor Muvagora',
    composer: 'J. Strauss - Son'
  },
  {
    id: 88,
    title: 'La Primavera Soliveyra',
    composer: 'A. Vivaldi'
  },
  {
    id: 89,
    title: 'Aïda Solaekride',
    composer: 'G. Verdi'
  },
  {
    id: 90,
    title: 'Eine Kleine Nachtmusik Djagobe',
    composer: 'W.A. Mozart'
  },
  {
    id: 91,
    title: 'Liefde Is ...',
    composer: 'Bonus track - Adya'
  },
  {
    id: 101,
    title: 'Funiculi Funiculà',
    composer: 'Luigi Denza'
  },
  {
    id: 102,
    title: 'Libiamo (Ne’ Lieti Calici)',
    composer: 'La Traviata • Giuseppe Verdi'
  },
  {
    id: 103,
    title: 'Largo Al Factotum',
    composer: 'Il Barbiere Di Seviglia • Gioacchino Rossini'
  },
  {
    id: 104,
    title: 'Der Vogelfänger',
    composer: 'Die Zauberflöte • Wolfgang Amadeus Mozart'
  },
  {
    id: 105,
    title: 'Prelude Act 1',
    composer: 'La Traviata • Giuseppe Verdi'
  },
  {
    id: 106,
    title: 'La Donna È Mobile',
    composer: 'Rigoletto • Giuseppe Verdi'
  },
  {
    id: 107,
    title: 'O Mio Babbino Caro',
    composer: 'Gianni Schicchi • Giacomo Puccini'
  },
  {
    id: 108,
    title: 'Ouverture',
    composer: 'William Tell • Gioacchino Rossini'
  },
  {
    id: 109,
    title: 'Va, Pensiero',
    composer: 'Nabucco • Giuseppe Verdi'
  },
  {
    id: 110,
    title: 'Ouverture',
    composer: 'Il Barbiere Di Seviglia • Gioacchino Rossini'
  },
  {
    id: 111,
    title: 'The Pearl Fishers',
    composer: 'Au Fond Du Temple Saint • Georges Bizet'
  },
  {
    id: 112,
    title: 'Non Piu Andrai',
    composer: 'Le Nozze Di Figaro • Wolfgang Amadeus Mozart'
  },
  {
    id: 113,
    title: 'Plaisir D’Amour',
    composer: 'Jean-Paul-Egide Martini'
  },
  {
    id: 114,
    title: 'Di Provenza Il Mar, Il Suol',
    composer: 'La Traviata • Giuseppe Verdi'
  },
  {
    id: 115,
    title: 'Voi Che Sapete',
    composer: 'Le Nozze di Figaro • Wolfgang Amadeus Mozart'
  },
  {
    id: 116,
    title: 'The Bohemian Girl',
    composer: 'I Dreamt I Dwelt In Marble Halls • Michael William Balfe'
  },
  {
    id: 117,
    title: 'Adya Medley',
    composer: 'Stars and Stripes • John Philip de Sousa • Mein Kleiner Gardeoffizier • Robert Stolz/Walter Reisch • Einzugsmarsch (Der Zigeunerbaron Opus 327) • Johann Strauss jr. • Radetzky Marsch • Johann Strauss sr.'
  }
];

App.Video.FIXTURES = [
  {
    id: 1,
    title: 'Radio Spot',
    thumbnail: 'images/video-classic-1-radio.jpg',
    album: 1
  },
  {
    id: 2,
    title: 'TV Spot',
    thumbnail: 'images/video-classic-1-tv.jpg',
    album: 1
  },
  {
    id: 3,
    title: 'TV Clip (LIVE)',
    thumbnail: 'images/video-classic-1-live.jpg',
    album: 1
  },
  {
    id: 11,
    title: 'Radio Spot',
    thumbnail: 'images/video-classic-2-radio.jpg',
    album: 2
  },
  {
    id: 12,
    title: 'TV Spot',
    thumbnail: 'images/video-classic-2-tv.jpg',
    album: 2
  },
  {
    id: 13,
    title: 'TV Clip (LIVE)',
    thumbnail: 'images/video-classic-2-live.jpg',
    album: 2
  },
  {
    id: 21,
    title: 'Radio Spot',
    thumbnail: 'images/video-classic-special-radio.jpg',
    album: 3
  },
  {
    id: 22,
    title: 'Single Spot',
    thumbnail: 'images/video-classic-special-single.jpg',
    album: 3
  },
  {
    id: 23,
    title: 'TV Clip (LIVE)',
    thumbnail: 'images/video-classic-special-live.jpg',
    album: 3
  },
];
