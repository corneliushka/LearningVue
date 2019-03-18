new Vue ({
    el : '#app',
    data: {
        message: "Salut les gens",
        link: "https://github.com/corneliushka",
        success: true,
        persons: ['Johnson', 'Lovelace', 'Schwartz', 'Hamilton']
    },

    methods: {
        close: function() {
            this.success = false
        }
    }
})

