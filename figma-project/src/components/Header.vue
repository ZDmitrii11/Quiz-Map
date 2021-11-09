<template>
    <div class="header-wrapper">
        <div class="header">
            <div class="logo-nav">
                <div class="u-coda">
                    <span class="u-coda-text">U-Coda</span>

                </div>

                <NavBar/>
            </div>
            <HeaderContent/>
                <HeaderBottom/>

            </div>

        </div>


</template>


<script>
    import NavBar from "./NavBar";
    import HeaderContent from "./HeaderContent";
    import HeaderBottom from "./HeaderBottom";


    export default {
        name: "frame1",
        components: {
            NavBar, HeaderContent, HeaderBottom
        }
    }
</script>

<style scoped>
    .header-wrapper {
        max-width: 1920px;
        height: 1156px;
        margin-left: 0;
        margin-top: 0;
        padding-top: 50.56px;
        background: #E4F5EB;
    }
    .header {
        display: flex;
        flex-direction: column;
        width: 1575.18px;
        height: 900px;
        margin-left: 252.82px;


    }

    .logo-nav {
        display: flex;
        background: transparent;
        width: 100%;
        height: 54.53px;
        justify-content: space-between;
        align-items: center;

    }

    .u-coda {
        width: 84.27px;
        height: 14.87px;
        margin-top: 40.15px;
        cursor: default;
    }

    .u-coda:first-letter {
        color: #45B871;
    }

    .u-coda-text {
        font-family: 'Open Sans', sans-serif;;
        font-style: normal;
        font-weight: bold;
        font-size: 23.7952px;
        line-height: 15px;
        /* identical to box height, or 62% */
    }


</style>