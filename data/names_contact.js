const names =
    [
        'Jenny Cherry', 'Garance Epperson', 'Nadia Patten', 'Jennifer Krantz',
        'Christin Steinberg', 'Joy Stclair', 'Madison Gentile', 'Duane Cedillo',
        'Philippe Meyerson', 'Lynn Chandler', 'Chris Heavener', 'Matthew Heath',
        'Nadia Patten', 'Byron Workman', 'Lydie Brass', 'Dulcie Moller',
        'Sara Alston', 'Lily Barnhill', 'Yaya Laws', 'Irma Bolden',
    ]

module.exports.nameSort = function () {
    var number = names.length;

    return names[Math.floor(Math.random() * number)]
}
