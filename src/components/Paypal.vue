<template>
  <section id="cart_items">
    <div class="conatiner text-center">
      <div class="mx-auto w-20px" id="paypal-button-container" ></div>
    </div>
  </section>
  <!--/#cart_items-->
</template>

<script>
export default {
  name: "Paypal",
  methods: {
    setLoaded: function() {
      var amounts=localStorage.getItem("amount");
       this.loaded = true;
      window.paypal.Buttons({
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        
        purchase_units: [{
          amount: {
            currency:"USD",
            value:amounts,
          }
        }]
      });
    },
    onApprove: function(data, actions) {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function(data) {
          alert('Transaction completed by ' +data.status);
          localStorage.removeItem('myCart');
          window.location.href="/";
      
    });
  },
  onError: function () {
    // For example, redirect to a specific error page
    window.location.href = "/your-error-page-here";
  }
  }).render('#paypal-button-container');

  }
    
  },
  mounted() {
    const script=document.createElement('script');
    script.src="https://www.paypal.com/sdk/js?client-id=Ae8Xc8yo2fYkSjkxO_LIDYVf4n_n2rTbplsF-CqCqyomuH93obp5F-J7V075bcRiiP6uOP_MRujJkb4_&components=buttons";
    script.addEventListener('load',this.setLoaded);
    document.body.appendChild(script);
    
  },
}
</script>

<style>
.form-check {
  color: rgb(145, 141, 141);
}
</style>