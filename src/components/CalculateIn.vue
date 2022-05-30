<template>
  <div class="calculate">
    <h1 class="hed">Калькулятор</h1>
    <div class="calculate_contener">
      <div class="calculate_top">
        <input v-model="operand1" name="operand1" v-bind:disabled="display2" placeholder="Введите 1 число" class="bottom" type="text"> 
        <input v-model ="operand2" name="operand2" v-bind:disabled="display" placeholder="Введите 2 число" type="text"> 
        <span name="result"> {{ result }} </span>
        <strong v-show="show"> {{ error }} </strong>
      </div>
      <div class="calculate_bottom">
        <button @click="step" name="step"  class="calculate_btn">Возвести в степень</button>
        <button @click="sum" name="sum" class="calculate_btn">+</button>
        <button @click="minus" name="minus" class="calculate_btn">-</button>
        <button @click="um" name="um" class="calculate_btn">*</button>
        <button @click="del" name="del" v-bind:disabled="isButtonDisabled" class="calculate_btn">/</button>
        <button @click="clear" name="clear" class="calculate_btn">Очистить</button>
      </div>
    </div>
    <div class="calculate_inter">
      <input class="inter_inp" v-model="show2" type="checkbox" id="checkbox">
      <label name="keyboard" for="checkbox">Отабразить экранную клавивтуру</label>
      <div name="inter" class="inter_form" v-if="show2">
        <div>
         <button name="buttonkeyboard" class="btnn"
            @click="get"
            v-for="mas in masts" 
            :key = "mas"
            :value="mas"> 
            {{ mas }}
          </button>
          <button name="remove" class="remove" @click="remove">Remove</button>
        </div>
        <div>
          <input type="checkbox" v-model="display" id="checkbox2">
          <label for="checkbox2">Операнд 1</label>
          <input type="checkbox" v-model="display2" id="checkbox3">
          <label for="checkbox3">Операнд 2</label>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: "CalculateIn",
    data () {
     return {
       isButtonDisabled: false,
       error: '',
       masts: [1,2,3,4,5,6,7,8,9,0,'.'],
       value: [],
       value2: [],
       show: false,
       show2: true,
       result: '',
       operand1: '',
       operand2: '',
       display: false,
       display2: false
      }
    },
    methods: {
      sum (){
        this.result = Number(this.operand1) + Number(this.operand2);
        this.show = false;
        this.isButtonDisabled = false;
      },
      minus (){
        this.result = Number(this.operand1) - Number(this.operand2);
        this.show = false;
        this.isButtonDisabled = false;
      },
      um (){
        this.result = Number(this.operand1) * Number(this.operand2);
        this.show = false;
        this.isButtonDisabled = false;
      },
      del (){
          if (Number(this.operand2) === 0) {
          this.show = true;
          this.error = 'Делить на 0 нельзя!'
          this.isButtonDisabled = true;
          this.result = 0;
        } else if (Number(this.operand2) !== 0){
           this.isButtonDisabled = false;
           this.result = Number(this.operand1) / Number(this.operand2);
        }
      },
      step (){
          this.result = Math.pow(Number(this.operand1), Number(this.operand2));
          this.show = false;
          this.isButtonDisabled = false;
        },
        get (e){
          if (this.display === true && this.display2 === false){
              this.show = false;
              this.value.push(e.target.value);
              this.operand1 = this.value.join('')
          } else if (this.display2 === true && this.display === false) {
               this.show = false;
              this.value2.push(e.target.value);
              this.operand2 = this.value2.join('')
          } 
          else if(this.display === true && this.display2 === true) {
            this.error = "Выберете операнд";
            this.show = true;
          } else if (this.display === false && this.display2 === false) {
            this.error = "Выберете операнд";
            this.show = true;
          }
        },
        remove (){
          if (this.display === true){
            this.value.splice(-1, 1);
            this.operand1 = this.value.join('')
          } else if (this.display2 === true && this.display === false) {
            this.value2.splice(-1, 1);
            this.operand2 = this.value2.join('')
          }
        },
        clear (){
          this.result = "";
        }
     }
   }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculate {
      min-width: 300px;
      min-height: 300px;
      background-color: rgb(247, 247, 242);
      box-shadow: 1px 1px 1px black;
}
.calculate_contener {
      margin:  0 auto;
      width: 400px;
      height: 250px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
}
.calculate_btn:not(:last-child) {
  margin-right: 10px;
}
.calculate_btn {
  border: 1px solid;
  padding: 10px;
  color: rgb(47, 48, 49);
}
.calculate_top {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
}
span {
    width: 50px;
    display: block;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    align-self: center;
}
.hed {
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  color: black;
  padding-top: 20px; 
  text-align: center;   
}
input {
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: none;
}
.inter_form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.inter_inp {
  margin-bottom: 10px;
  margin-left: 20px;
}
.calculate_inter {
  max-width: 400px;
  margin: 0 auto;
}
.btnn:not(:last-child) {
  margin-right: 5px;
}
</style>
