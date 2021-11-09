import { Pie , mixins } from "vue-chartjs/dist/vue-chartjs";
// import {Chart} from 'chart.js'
import 'chartjs-plugin-labels'

// Chart.plugins.unregister(Label);
const { reactiveProp } = mixins;

// const { reactiveProp } = mixins

export default {
    extends: Pie,
    mixins: [reactiveProp],
    props: ["data","options"],
    watch:{
      data(newV){
          console.log(newV)
          if (newV.chartData.datasets.data){
              return this.myRedner(this.data)
          }
      },
        methods:{
             findR(){

             },
            myRedner(){
               return  this.renderChart(this.data);
            },
        }
    },

    mounted() {
        this.renderChart(this.data);
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object

    }
};
