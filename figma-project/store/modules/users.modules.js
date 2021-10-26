// import axios from "axios";
import axios from "axios";

export default {
    state:{
    users:null,
    },
    mutations:{
      USERS(state,payload){
            state.users = payload
          console.log('payload',payload)

        }
    },
    actions: {
       async GET_USERS({commit}) {
           const a = 123;
          await axios.get('http://localhost:3030/api/users').then(
              res=>{
                  // let users = res.data
                  // commit('USERS',users)
                  // console.log(this.users)

                  console.log({ a })
                  console.log('users',this.users)
                  commit('USERS',res.data)
              }
          )

        }
    },

    getters:{
        getUsers:state=>state.users,


    },

}