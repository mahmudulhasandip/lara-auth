<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Api Dashboard</div>

                <div class="card-body">
                    You are logged in using api.

                    <button @click="logout" class="btn btn-primary">Logout</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "home-component",
  methods: {
    logout() {
      new Promise((res, rej) => {
        axios
          .post("/api/auth/logout")
          .then(response => {
            res(response.data);
            console.log(response.data);
            this.$router.push({ path: "/api/login" });
          })
          .catch(err => {
            rej("Wrong email or password");
          });
      });
    }
  }
};
</script>
