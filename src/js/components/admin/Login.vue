<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <a class="navbar-brand" href="">
                    Laravel
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header"></div>

                            <div class="card-body">
                                <form method="POST" v-on:submit.prevent="doLogin">

                                    <div class="form-group row">
                                        <label for="email" class="col-sm-4 col-form-label text-md-right">Email</label>

                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control" v-model="email" required autofocus>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control" v-model="password" required>
                                        </div>
                                    </div>


                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Login
                                            </button>

                                            <a class="btn btn-link">
                                                Forgot password
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>

<script>
    export default {
      data() {
        return {
          email: null,
          password: null
        }
      },

      beforeCreate() {
        console.log(123);
        if (this.$cookie.get('token')) {
          this.$router.push('/trailer');
        }
      },

      methods: {
        doLogin() {
          this.$cookie.set('token', '');
          let params = {
            email: this.email,
            password: this.password
          };
          Request.post('api/login', params)
            .then((response) => {
              this.saveCookie(response.data);
              this.$router.push('/trailer');
            });
        },

        saveCookie(data) {
          this.$cookie.set('token', data.access_token);
        },
      }
    }
</script>