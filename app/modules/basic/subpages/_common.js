define(function () {
    return {
        '_common': {
            widgets: [{
                name: 'navigation',
                options: {
                    host: '#wrapper',
                    _source: 'basic',
                    _place: 1
                }
            }]
        },
        'blank': {
            name: 'Blank',
            inherit: ['_common']
        }
    };
})
