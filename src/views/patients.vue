<template>
  <div class="patients">
    <div class="block">
      <div class="big_title">Patients</div>
      <table class="info">
        <tr class="header">
          <th>Full-name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Appointment time</th>
          <th>Doctor</th>
          <th>Reason</th>
          <th></th>
        </tr>
        <tr class="user_details" v-for="(pat, index) in patients" :key='index'>
          <td class="user_photo"><img class="img" src="../assets/img/ac_1.png" alt="">{{pat.newName}}</td>
          <td>{{pat.newEmail}}</td>
          <td>{{pat.newDate}}</td>
          <td>{{pat.newTime}}</td>
          <td>{{pat.newDoc}}</td>
          <td>{{pat.newReas}}</td>
          <td><button @click='change(index)' class="btn"><img src="../assets/img/edit.svg" alt=""></button><button @click="del(index)" class="btn"><img src="../assets/img/del.svg" alt=""></button></td>
        </tr>
      </table>
      <!-- <pre>{{$v}}</pre> -->
    </div>
    <button class="patt_btn" @click="inputShow = !inputShow" id="myBtn"><img src="../assets/img/btn_1.svg" alt=""></button>

    <div  class="inputs" :class="{'active': inputShow}">
      <div class="contain">
        <h4 class="head">Yangi bemor ro’yhatdan o’tkazish</h4>
        <div class="invalid-feedback" v-if="!$v.name.required && $v.name.$dirty">Name is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        <input type="text" v-model="name" @input="$v.name.$touch()" placeholder="Full Name" :class="{'is-valid':!$v.name.$error,'is-invalid':$v.name.$error}">
        <input type="text" v-model="pic" placeholder="Pic URL">
        <div class="invalid-feedback" v-if="!$v.email.required && $v.email.$dirty">Email is required</div>
        <input type="email" v-model="email" @input="$v.email.$touch()" placeholder="Email" :class="{'is-valid':$v.email.$error}">
        <input type="date" v-model="date" placeholder="Date">
        <input type="time" v-model="time" placeholder="Time">
        <input type="text" v-model="doctor" placeholder="Doctor's name">
        <input type="text" v-model="reason" placeholder="Reason">
        <div class="btns">
          <button @click="cancel" id='red'>Cancel</button>
          <button @click="add" id='green' v-show="!isActive">Add</button>
          <button @click="saveChange(chanIndex)" id='green' v-show="isActive">Change</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
export default {
  data(){
    return{
      patients:[],
      name:'',
      email:'',
      date: '',
      time:'',
      pic:'',
      doctor:'',
      reason:'',
      chanIndex:0,
      inputShow: false,
      isActive: false,
    }
  },
  validations:{
    name:{
      required,
      minLength: minLength(3)
    },
    email:{
      required,
      minLength:minLength(3)
    }
  },
  methods:{
    add(){
      var patient = {
        newName: this.name,
        newEmail: this.email,
        newDate: this.date,
        newTime: this.time,
        newPic: this.pic,
        newDoc: this.doctor,
        newReas: this.reason
      }
      this.patients.push(patient)
      this.name = ''
      this.email = ''
      this.date = ''
      this.time = ''
      this.pic = ''
      this.doctor = ''
      this.reason = ''
      this.inputShow = false
    },
    del(index){
      this.patients.splice(index,1)
    },
    cancel(){
      this.name = ''
      this.email = ''
      this.date = ''
      this.time = ''
      this.pic = ''
      this.doctor = ''
      this.reason = ''
      this.inputShow = false
    },
    change(index){
      this.isActive = true
      this.inputShow = true
      this.name = this.patients[index].newName
      this.email = this.patients[index].newEmail
      this.date = this.patients[index].newDate
      this.time = this.patients[index].newTime
      this.pic = this.patients[index].newPic
      this.doctor = this.patients[index].newDoc
      this.reason = this.patients[index].newReas
      this.chanIndex = index
    },
    saveChange(chanIndex){
      this.patients[chanIndex].newName = this.name
      this.patients[chanIndex].newEmail = this.email
      this.patients[chanIndex].newDate = this.date
      this.patients[chanIndex].newTime = this.time
      this.patients[chanIndex].newPic = this.pic
      this.patients[chanIndex].newDoc = this.doctor
      this.patients[chanIndex].newReas = this.reason
      this.isActive = false
      this.inputShow = false
      this.name = ''
      this.email = ''
      this.date = ''
      this.time = ''
      this.pic = ''
      this.doctor = ''
      this.reason = ''
      this.inputShow = false
      this.$v.$reset()
    }

  }
}
</script>

<style>

</style>