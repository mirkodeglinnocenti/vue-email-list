

const { createApp } = Vue




  createApp({
    data() {
      return {
        allEmail : [],
      }
    },
    methods: {
        setEmail () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                const email = res.data.response;
                // const { response: email } = res.data è uguale a riga 18
                
                this.allEmail.push(email)
                console.log(this.allEmail)

            });
        },
        getEmail () {
            for (let i = 0; i < 10; i++) {
                this.setEmail();
            }
        }
    }
  }).mount('#app')