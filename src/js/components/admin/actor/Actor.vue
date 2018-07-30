<template>
    <div>
        <main_header></main_header>
        <main class="py-4">
            <div class="container mt30">
                <div class="card-header">
                    <h1>List Actors</h1>
                    <div>
                        <button class="btn btn-primary" @click="add()">Add</button>
                    </div>
                </div>

                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Avatar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(actor, index) in actors">
                        <th scope="row">{{index+1}}</th>
                        <td>{{ actor.name }}</td>
                        <td>
                            <img :src="getUrl(actor.avatar)" class="avatar-img">
                        </td>
                        <td>
                       <span class="mr5 crpt" @click="edit(actor)">
                            <i class="fa fa-pencil-square-o"></i>
                        </span>
                            <span class="crpt" @click="remove(actor)">
                            <i class="fa fa-trash"></i>
                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="container-fluid bg-light py-3" v-if="isShowAdd">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="card card-body">
                            <h3 class="text-center mb-4">Add</h3>
                            <fieldset>
                                <form method="POST" enctype="multipart/form-data" v-on:submit.prevent="doAdd">
                                    <div class="form-group has-error">
                                        <label class="control-label">Name</label>
                                        <input class="form-control input-lg" type="text" v-model="actor.name">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Avatar</label>
                                        <input class="form-control input-lg" ref="image" type="file" @change="selectFile">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Nation</label>
                                        <input class="form-control input-lg" type="text" v-model="actor.nation">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Height</label>
                                        <input class="form-control input-lg" type="text" v-model="actor.height">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Year</label>
                                        <input class="form-control input-lg" type="text" v-model="actor.born_date">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">History</label>
                                        <input class="form-control input-lg" type="text" v-model="actor.history">
                                    </div>
                                    <button class="btn btn-lg btn-primary btn-block">Add</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-light py-3" v-if="isShowEdit">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="card card-body">
                            <h3 class="text-center mb-4">Edit</h3>
                            <fieldset>
                                <div class="form-group has-error">
                                    <label class="control-label">Name</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.name">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Image</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.avatar">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Nation</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.nation">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Length</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.height">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Resolution</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.history">
                                </div>
                                <button class="btn btn-lg btn-primary btn-block" @click="doEdit()">Edit</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>

<script>
  import Header from '../layouts/Header';

  export default {
    components: {
      main_header: Header
    },

    data() {
      return {
        actors: null,
        isShowAdd: false,
        isShowEdit: false,
        actor: {
          name: null,
          avatar: null,
          nation: null,
          height: null,
          history: null,
          born_date: null,
        },
        activeEdit: null
      }
    },

    created() {
      this.getFilms();
    },

    methods: {
      getFilms() {
        Request.get('/api/actors').then((response) => {
          this.actors = response.data;
        });
      },

      selectFile() {
        this.actor.avatar = this.$refs.image.files[0];
      },

      add() {
        this.isShowAdd = true;
      },

      doAdd() {
        let formData = new FormData();
        formData.append('avatar', this.actor.avatar);
        formData.append('name', this.actor.name);
        formData.append('nation', this.actor.nation);
        formData.append('height', this.actor.height);
        formData.append('history', this.actor.history);
        formData.append('born_date', this.actor.born_date);

        Request.post('/api/actors', formData).then((response) => {
          this.isShowAdd = false;
          this.initData();
        });
      },

      edit(film) {
        this.activeEdit = film;
        this.isShowEdit = true;
      },

      doEdit() {
        Request.put('/api/films/' + this.activeEdit.id, this.activeEdit).then((response) => {
          this.isShowEdit = false;
          this.activeEdit = null;
          this.initData();
        });
      },

      remove(trailer) {
        Request.delete('/api/trailers/' + trailer.id).then((response) => {
          this.initData();
        });
      },

      getUrl(link)
      {
        return '/storage/img/avatar/' + link;
      }
    }
  }

</script>
<style>
    .card-header {
        display: flex;
        justify-content: space-between;
    }
    .mr5 {
        margin-right: 5px;
    }
    .avatar-img {
        height: 60px;
        width: 60px;
    }
</style>