<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login With Api <a class="float-right btn btn-success" href="/">Main Page</a></div>

                    <div class="card-body">
                        <form @submit.prevent="authenticate" method="" action="">
                            <div class="form-group row">
                                <label for="phone" class="col-sm-4 col-form-label text-md-right">Phone</label>

                                <div class="col-md-6">
                                    <input id="phone" type="text" class="form-control" name="phone" value="" required autofocus v-model="form.phone">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required v-model="form.password">

                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "login-component",
  data() {
    return {
      form: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    authenticate() {
      const credentials = this.$data.form;

      new Promise((res, rej) => {
        axios
          .post("/api/auth/login", credentials)
          .then(response => {
            res(response.data);
            console.log(response.data);
            axios.defaults.headers.common["Authorization"] = `Bearer ${
              response.data.access_token
            }`;
            this.$router.push({ path: "/api/home" });
          })
          .catch(err => {
            rej("Wrong email or password");
          });
      });
    }
  }
};
</script>

