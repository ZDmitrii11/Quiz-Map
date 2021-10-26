<template>
    <div class="terial-button">
        <!-- Modal Trigger -->
        <button data-target="modal3" @click="openModal" class="btn modal-trigger my-btn free-terial"><span style="font-size: 14px">Terial Free</span></button>

        <!-- Modal Structure -->
        <div id="modal3" class="modal my-modal" ref="terialModal">
            <div class="modal-content">
                <h4>Quiz</h4>

                <div class="quastions-container" ref="terialQuiz" v-if="questionAnswered < questions.length">
                    <div class="question" v-for="(question,index) in questions" :key="index"
                         v-show="index === questionAnswered">
                        <span class="quiz-span">{{question.question}}</span>
                        <div v-for="(answer) in question.answers" :key="answer.text">
                            <label>
                                <input class="quiz-input" @change="checkInput($event,answer)" :value="answer.text" type="radio"
                                       :name="question.question"/>
                                <span class="quiz-span">{{answer.text}}</span>
                            </label>
                        </div>
                    </div>

                </div>
                <div class="answers-container" ref="answersPDF" v-else>
                        <div class="answers"  v-for="(ques,index) in questions" :key="ques.question[index]">
                            <div class="answer-text" :class="{'green':results[index].isTrue,'red':results[index].isTrue===false}">
                                <h4>{{ques.question}}</h4>
                                <span style="color:whitesmoke;font-size: 24px">Correct Answer Was :
                                    <span style="color:whitesmoke;font-size: 24px">{{correctAnswer[index]}}</span>
                                </span>
                                <span style="color:whitesmoke;font-size: 24px">Your Chose :
                                    <span style="color:whitesmoke;font-size: 24px">{{results[index].text}}
                                    </span>
                                </span>
                            </div>

                    </div>


                </div>
                <div class="modal-footer">

                    <button class="modal-button" v-if="questionAnswered < questions.length" @click="nextQuastion()" :disabled="isActive">
                        Next Question
                    </button>

                    <div v-else>
                        <!-- Modal Trigger -->
                        <button data-target="reset-quiz" @click="resetQuiz" class="btn modal-trigger">Reset</button>
                        <!-- Modal Structure -->
                        <div id="reset-quiz" class="modal" ref="resetQuiz">
                            <div class="modal-content terial-color" >
                                <h4>You sure you want reset Quiz ?</h4>
                            </div>
                            <div class="modal-footer" style="background-color: #E4F5EB" >
                                <button class="modal-close btn terial-color reset-buttons red waves-effect waves-green">No</button>
                                <button class="btn waves-effect terial-color reset-buttons green waves-green" @click="reset()">Yes</button>

                            </div>
                        </div>

                        <!-- Modal Trigger -->
                        <button data-target="save-quiz" @click="saveQuizModal" class="btn modal-trigger">
                            Save Quiz
                        </button>
                        <!-- Modal Structure -->
                        <div id="save-quiz" class="modal" ref="saveQuiz">
                            <div class="modal-content">
                                <h4>You sure you want save Quiz ?</h4>
                            </div>
                            <div class="modal-footer">
                                <button @click="returnToQuiz" class="waves-effect waves-green btn">No</button>
                                <button class="btn" @click="saveQuiz">Yes Save</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import jsPDF from 'jspdf'
    import M from 'materialize-css'
    import html2canvas from 'html2canvas'


    export default {
        name: "FreeTerial",
        data() {
            return {
                currentAnswer: null,
                questionAnswered: 0,
                correctAnswer:[],
                totalCorrect: 0,
                results: [],
                isActive: true,
                questions: [
                    {
                        question: 'You Are Programmer?',
                        answers: [{text: 'yes', isTrue: true},
                            {text: 'no', isTrue: false}],
                    },
                    {
                        question: 'You Are Best JavaScript Programmer?',
                        answers: [{text: 'yes', isTrue: true}
                            , {text: 'no', isTrue: false}],

                    },
                    {
                        question: 'You want to work at Bazar?',
                        answers: [{text: 'yes', isTrue: false}
                            , {text: 'no', isTrue: true}],
                    },
                ]
            }
        },
        watch: {},
        methods: {
            checkInput(e, item) {
                this.currentAnswer = item
                this.isActive = false

            },
            returnToQuiz(){
                M.Modal.init(this.$refs.saveQuiz).close()
            },
            nextQuastion() {
                this.questionAnswered++
                this.isActive = true
                console.log(this.questionAnswered)
                this.results.push(this.currentAnswer)
                console.log(this.results)

            },
            saveQuizModal() {
                M.Modal.init(this.$refs.saveQuiz).open()
            },
            resetQuiz() {
                M.Modal.init(this.$refs.resetQuiz).open()

            },
            reset() {
                this.currentAnswer = null
                this.results = []
                this.questionAnswered = 0
            },
          async  saveQuiz() {
              const container = this.$refs.answersPDF

              html2canvas(container).then(
                  function (canvas) {
                   let imageData = canvas.toDataURL('image/png')
                      let doc = new jsPDF({
                          orientation: 'p',
                          unit: 'pt',
                          format: 'a4'
                      });
                      doc.addImage(imageData , 'JPEG',10,10,580,300)
                      doc.save('testPdf.pdf')

                  },
              this.currentAnswer = null,
              this.results = [],
              this.questionAnswered = 0,
              this.closeModal()
              )





            },

            openModal() {
                M.Modal.init(this.$refs.terialModal).open()
            },
            closeModal() {
                M.Modal.init(this.$refs.terialModal).close()
            },
        },
        computed:{


        },
        created() {
         this.questions.forEach(el=>(el.answers.forEach(el=>{
              if (el.isTrue){
                  this.correctAnswer.push(el.text)
              }
          })))

        },
        mounted() {


            M.Modal.init(this.$refs)


        },
    }
</script>

<style scoped>

    .free-terial {
        width: 136.82px;
        height: 54.53px;
        font-family: 'Open Sans', sans-serif;;
        font-style: normal;
        font-weight: 600;
        font-size: 19.8294px;
        line-height: 15px;
        border: none;
        /* identical to box height, or 75% */
        color: #FFFFFF;
        margin-left: 15px;
        cursor: pointer;
    }

    .my-btn {
        background: #45B871;
        box-shadow: 0px 7.93174px 79.3174px rgba(9, 188, 77, 0.2);
        border-radius: 4.95734px;
    }

    .my-modal {
        height: auto;
    }

    .modal-content > h4 {
        text-align: center;
    }

    .quastions-container > span {
        text-align: center;
    }

    .answers {
        display: flex;
        flex-direction: column;
        border: 1px solid #00b0ff;

    }

    .modal-footer::v-deep {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .answers-container{
        text-align: center;
    }

    .red{
        background-color: orangered;
    }
    .green{
        background-color: lawngreen;
    }
    .answer-text{
        display: flex;
        flex-direction: column;
    }
    .quiz-span{
        font-weight: bold;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;;
    }
    .modal-button{
        width: 150px;
        height: 40px;
        font-size: 16px;
        border:none;
        border-radius: 20px;
    }
    .reset-buttons{
        width: 80px;
    }
    .terial-color{
        background-color:#E4F5EB
    }

</style>