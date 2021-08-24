const app = Vue.createApp({
    //template: '<h1>Hello {{firstName}}</h1>',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
       async getUser() {
           const res = await fetch('https://randomuser.me/api')
           const {results} = await res.json()
            this.firstName = results[0].name.firstName
            this.lastName = results[0].name.lastName
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')   