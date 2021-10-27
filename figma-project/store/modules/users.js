import axios from "axios";

export default {
    state:{
        users:null,
        variable:'Hello'
    },
    mutations:{
     async USERS(state,payload){
           state.users = payload

        }
    },
    actions: {
     async GET_USERS({commit}) {
         await   axios.get('http://localhost:3030/api/users').then(
                res => {
                    commit('USERS', res.data)
                    console.log('res', res.data)
                }
            )
        }
    },


    getters:{
        getUsers:state=>state.users,

    },

}