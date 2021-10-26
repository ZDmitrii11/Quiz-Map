<template>
    <div class="navigator">
        <div class="nav-links">
            <li class="nav-link"><a href="#">Home</a></li>
            <li class="nav-link">
                <a href="#">
                    All Courses
                    <img class="vector" src="../assets/img/Vector.jpg" alt="vector">

                </a>
            </li>
            <li class="nav-link"><a href="#">Pricing</a></li>
            <li class="nav-link"><a href="#">Blog</a></li>
        </div>

        <div class="nav-buttons">
            <SignIn/>
            <FreeTerial/>
            </div>

    </div>

</template>

<script>
    import FreeTerial from "./FreeTerial";
    import SignIn from "./SignIn";
    export default {
        name: "NavBar",
        components: {
            FreeTerial,SignIn

        },
        data() {
            return {


            }
        },



    }
</script>

<style scoped>
@import "~materialize-css/dist/css/materialize.min.css";

    .navigator {
        display: flex;
        width: 1200px;
        height: 54.53px;
        align-items: center;
        justify-content: center;
        margin-top: 40.15px;

    }

    .nav-links {
        display: flex;
        width: 503.67px;
        height: 14.87px;
        font-family: 'Open Sans', sans-serif;;
        font-style: normal;
        font-weight: bold;
        font-size: 19.8294px;
        line-height: 15px;
        /* identical to box height, or 75% */
        color: #575859;


    }

    .nav-link {
        list-style: none;
        margin-right: 50px;

    }


    .nav-link a {
        font-family: 'Open Sans', sans-serif;;
        font-weight: bold;
        font-size: 19.8294px;
        line-height: 15px;
        /* identical to box height, or 75% */
        color: #575859;
        text-decoration: none;


    }
    .nav-buttons {
        display: flex;
        align-items: center;
        margin-left: 248px;
    }

    .sign-in {
        width: 63.45px;
        height: 14.87px;
        font-family: 'Open Sans', sans-serif;;
        font-style: normal;
        font-weight: 600;
        font-size: 19.8294px;
        line-height: 15px;
        /* identical to box height, or 75% */
        color: #575859;
    }

    .my-btn {
        background: #45B871;
        box-shadow: 0px 7.93174px 79.3174px rgba(9, 188, 77, 0.2);
        border-radius: 4.95734px;

    }





    .vector {
        left: 49.79%;
        right: 49.69%;
        top: 6.57%;
        bottom: 92.85%;
        background: #575859;
    }



</style>