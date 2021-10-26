<template>
    <div class="header-bottom-container">
        <div class="context text-trusted"><span>
            Trusted by 30,000+ satisfied students
        </span></div>
        <div class="context udemy-logo"></div>
        <div class="context fiver"></div>
        <div class="context byjus"></div>
        <div class="context mictosoft"></div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBottom"
    }
</script>

<style scoped>
.header-bottom-container{
    width: 1575px;
    height: 170px;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 0px 99.1468px rgba(0, 0, 0, 0.05);
    align-items: center;
    justify-content: space-around;

}


    .text-trusted{
        width: 336.11px;
        height: 93.2px;
        font-family: 'Open Sans', sans-serif;;
        font-style: normal;
        font-weight: bold;
        font-size: 35.6928px;
        line-height: 50px;
        /* or 139% */
        color: #575859;
        cursor: default;
    }
    .udemy-logo{
        width: 188.02px;
        height: 53.36px;
        background-image: url('../assets/img/udemy-logo.png');
        cursor: pointer;
        background-repeat: no-repeat;
    }
 .fiver{
     width: 258.77px;
     height: 117.98px;
     background-image: url("../assets/img/fiver.png");
     background-repeat: no-repeat;
 }
    .byjus{
        width: 158.37px;
        height: 87.87px;
        background-image: url("../assets/img/byjus.png");
        background-repeat: no-repeat;
    }
    .mictosoft{
        width: 225.63px;
        height: 83.28px;
        background-image: url("../assets/img/microsoft.png");
        background-repeat: no-repeat;
    }

</style>