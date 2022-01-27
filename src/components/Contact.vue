<template>
  <div id="contact-page" class="container">
    <div class="bg">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="title text-center">Contact <strong>Us</strong></h2>
          <div id="gmap" class="contact-map"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="contact-form">
            <h2 class="title text-center">Get In Touch</h2>
            <div class="status alert alert-success" style="display: none"></div>
            <form
              id="main-contact-form"
              class="contact-form row"
              name="contact-form"
              method="post"
              @submit.prevent="postContact"
            >
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  required="required"
                  placeholder="Name"
                  v-model="namecontact"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  required="required"
                  placeholder="Email"
                  v-model="emailcontact"
                />
              </div>
              <div class="form-group col-md-12">
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  required="required"
                  placeholder="Phone"
                  v-model="phonecontact"
                />
              </div>
              <div class="form-group col-md-12">
                <textarea
                  name="message"
                  id="message"
                  required="required"
                  class="form-control"
                  rows="8"
                  placeholder="Your Message Here"
                  v-model="messagecontact"
                ></textarea>
              </div>
              <div class="form-group col-md-12">
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-primary pull-right"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="contact-info">
            <h2 class="title text-center">Contact Info</h2>
            <address>
              <p>E-Commerce</p>
              <p>93, Ave New Indore, MP</p>
              <p>MP , India</p>
              <p>Mobile: +91 99271 23472</p>
              <p>Email: info@e-commerce.com</p>
            </address>
            <div class="social-networks">
              <h2 class="title text-center">Social Networking</h2>
              <ul>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/#contact-page-->
</template>

<script>
import {userContact} from '../common/Service';
export default {
  name: "Contact",
  data()
  {
    return {
         namecontact:null,
         emailcontact:null,
         phonecontact:null,
         messagecontact:null,

    };
  },
  methods:{
    postContact()
    {
      let formdata = {name:this.namecontact, email : this.emailcontact, phone : this.phonecontact, message : this.messagecontact};
      userContact(formdata)
      .then(res => {
        if(res){
          alert("Thanks for your interest. one of our executive will contact you soon.");
          //  location.reload();
          console.log(res.data);
        }
        else{
          console.log(res.data.err);
        }
      })
    }
  }
};
</script>

<style>
</style>