<template>
    <div id="chart">
        <pie-chart id="pie-chart" style="width: 750px;height: 800px"  :chart-data="chartData" :options="options" ></pie-chart>

    </div>
</template>

<script>
    import axios from 'axios'
    import PieChart from "../PieChart.js";
    export default {
        name: "chartContainer",
        components: {
            PieChart
        },

        data() {
            return {
                dayHours:null,
                chartData:null,
                options: {
                    animateScale:true,
                    responsive: true,
                    tooltips: {
                        enabled: true,
                    },
                    plugins: {
                        labels: {
                            render: 'label',
                        }
                    },
                    title: {
                        display: false,
                        text: 'Night',
                        fontSize: 20,
                        maintainAspectRatio: true
                    },

                }

            };
        },
        watch:{
            dayHours(newV){
                  if (newV === 12.43){
                      let copy = {...this.chartData}
                      copy.datasets[0].backgroundColor = ['#FFCC00','#FFCC00','#FFCC00','#FFCC00','#FFCC00',
                          '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00','#003366','#003366','#003366',
                          '#003366','#003366','#003366','#003366','#003366',
                          '#003366','#003366','#003366','#003366',
                          '#003366','#003366','#003366','#003366','#003366',
                          '#003366']
                      this.chartData = copy

                  }
            },
        },
        computed:{

        },
        methods: {
            getTime(){
              this.dayHours = parseFloat(`${new Date().getHours()}.${new Date().getMinutes()}0`)
                console.log(this.dayHours)
            },
        },

        mounted() {

            setInterval(this.getTime,2000)
            this.chartData = {
                labels:['00.00','1.00','2.00','3.00','5.00','6.00','7.00','8.00'
                    ,'9.00','10.00','11.00','12.00',
                    '13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00'],
                hoverBackgroundColor: "red",
                hoverBorderWidth: 40,

                datasets: [
                    {
                        backgroundColor: ['#003366','#003366','#003366','#003366',
                            '#003366','#003366','#FFCC00','#FFCC00',
                            '#FFCC00','#FFCC00','#FFCC00','#FFCC00','#FFCC00','#FFCC00',
                        '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00','#003366','#003366','#003366',
                            '#003366','#003366','#003366','#003366','#003366',
                            '#003366'],
                        data: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
                hoverOffset:5,
            }]
            }

            axios.get('https://api.sunrise-sunset.org/json?lat=47.02427&lng=-28.834854').then(res=>{
               console.log(res.data.results)

            })


            // setInterval(()=>{
            //     this.rotatePie()
            // },1000)

        },


        beforeDestroy() {
            clearInterval(this.interval)
        }

    };
</script>

<style scoped>
    #chart{
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: center;

    }

</style>
