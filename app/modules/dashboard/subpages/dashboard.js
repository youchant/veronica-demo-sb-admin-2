define(function () {
    return {
        'dashboard': {
            name: 'Dashboard',
            layout: 'dashboard',
            inherit: ['_common'],
            widgets: [
                'remind@#head@dashboard',
                'area-chart@#first-col@dashboard',
                'bar-chart@#first-col@dashboard',
                'responsive-timeline@#first-col@dashboard',
                'notifications2@#second-col@dashboard',
                'donut-chart@#second-col@dashboard',
                'chat@#second-col@dashboard',
            ]
        }
    };
})
