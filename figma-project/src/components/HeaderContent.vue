<template>
    <div class="header-content">

        <!--        Section 1 Header Content-->
        <div class="content-section1">


            <div class="text-content1">
           <span class="text1">
               Anytime,anywhere
               Develop your skill
               <br>
               by Online
           </span>
            </div>


            <div class="text-content2">
                 <span class="text2">
                     Online education is a form of education where students use their
               home computers through the internet. For many nontraditional students,
                     <br>
               among them all those who want to continue
                 </span>
            </div>


            <div class="header-content-buttons">
                <div class="button-courses">
                    <button class="btn all-courses">
                        <span class="courses-text">
                        All Courses
                    </span>
                    </button>
                </div>
                <div class="video">
                    <div class="video-img"><img src="../assets/img/playvideo.jpg" alt="video"></div>
                    <div class="video-text"><span>Play Video</span></div>
                </div>
            </div>
        </div>

        <!--        Section 2 Header Content-->

        <div class="content-section2">


            <div class="mask1">
                <div class="mask2">
                    <div class="img-container">
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>
<script>

    export default {
        name: "HeaderContent",
        components: {}
    }
</script>

<style scoped>

    .header-content {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

    }

    /*Section 1 Header Content*/

    .content-section1 {
        width: 626.61px;
        height: 492.76px;
        display: flex;
        flex-direction: column;
        margin-top: 145px;


    }

    .img-container {
        width: 588.95px;
        height: 588.95px;
    }


    .content-section1 {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

    }

    .text-content1 {
        width: 612.73px;
        height: 245.88px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 63.4539px;
        line-height: 83px;
        /* or 131% */
        color: #242323;

    }

    .text-content1 {
        width: 612.73px;
        height: 245.88px;
        margin-bottom: 31.73px;
    }

    .text1 {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 63.4539px;
        line-height: 83px;
        /* or 131% */
        color: #242323;
        word-wrap: break-word;
        cursor: default;
    }

    .text-content2 {
        width: 626.61px;
        height: 93.2px;
        margin-bottom: 50px;


    }

    .text2 {

        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        color: #6C6C6A;
        overflow-wrap: break-word;
        cursor: default;


    }

    .btn {
        background: #45B871;
        box-shadow: 0px 7.93174px 79.3174px rgba(9, 188, 77, 0.2);
        border-radius: 4.95734px;
    }


    .header-content-buttons {
        width: 100%;
        height: 140px;
        display: flex;
        align-items: center;
        margin-bottom: 0px;


    }

    .all-courses {
        width: 202.26px;
        height: 72.38px;
        border: none;
        margin-right: 29.74px;
        cursor: pointer;
    }

    .courses-text {
        width: 106.09px;
        height: 31.73px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 19.8294px;
        line-height: 32px;
        /* identical to box height, or 160% */
        color: #FFFFFF;
    }

    .video {
        display: flex;
        cursor: pointer;
    }

    .video-img {
        display: flex;
        width: 66.43px;
        height: 66.43px;
        background: #FFFFFF;
        box-shadow: 0px 7.93174px 39.6587px rgba(69, 184, 113, 0.2);
        border-radius: 60.4795px;
        justify-content: center;
        align-items: center;


    }

    .video-img > img {
        margin-left: 6px;
        width: 26.96px;
        height: 24.28px;
        background: #4C68FF;
        border-radius: 0.793174px;
        /* transform: rotate(89.64deg); onclick ?*/
    }

    .video-text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 14.87px;
    }

    .video-text > span {
        width: 99.15px;
        height: 17.85px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 19.8294px;
        line-height: 15px;
        /* or 75% */

        color: #242323;
    }

    /*Section 2 Header Content*/

    .content-section2 {
        width: 851.4px;
        height: 645px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-top: 20px;


    }

    .img-container {

        width: 599.05px;
        height: 620.11px;
        border-radius: 50%;
        background-image: url("../assets/img/girl-image.jpg");
        background-repeat: no-repeat;
        border: 5px solid #BEEBF8;
        margin-top: 8px;
    }

    .mask1 {
        width: 650px;
        height: 650px;
        border-radius: 50%;
        border: 5px solid #BEEBF8;
        display: flex;
        justify-content: center;


    }


    .img-text-comment {
        width: 298.43px;
        height: 97.16px;
    }

    .img-text-review {
        width: 288px;
        height: 137px;
    }


</style>