<template>
    <div>
        <main_header></main_header>
        <main class="py-4">
            <div class="container mt30">
                <div class="card-header">
                    <h1>List Films</h1>
                    <div>
                        <button class="btn btn-primary" @click="add()">Add</button>
                    </div>
                </div>

                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Link</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(film, index) in films">
                        <th scope="row">{{index+1}}</th>
                        <td>{{film.name}}</td>
                        <td>
                            <img :src="getUrl(film.image)" class="avatar-img">
                        </td>
                        <td>
                            {{getLink(film)}}
                        </td>
                        <td>
                           <span class="mr5 crpt" @click="edit(film)">
                                <i class="fa fa-pencil-square-o"></i>
                            </span>
                                <span class="crpt" @click="remove(film)">
                                <i class="fa fa-trash"></i>
                            </span>
                            <span @click="selectVideo(film)" class="crpt">
                                Upload
                            </span>
                            <span @click="addActor(film)" class="crpt">
                                +Actors
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="container-fluid bg-light py-3" v-if="isShowActor">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="card card-body">
                            <h3 class="text-center mb-4">Add actor to film</h3>
                            <fieldset>
                                <form method="POST" enctype="multipart/form-data" v-on:submit.prevent="doAddActor">
                                    <div class="form-group">
                                        <label class="control-label">Actor</label>
                                        <select class="form-control input-lg" v-model="actor_film.actor_id">
                                            <option value="">Select Actor</option>
                                            <option v-for="actor in actors" :value="actor.id">
                                                {{actor.name}}
                                            </option>
                                        </select>
                                    </div>
                                    <button class="btn btn-lg btn-primary btn-block">Add Actor</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-light py-3" v-if="isShowUpload">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="card card-body">
                            <h3 class="text-center mb-4">Upload</h3>
                            <fieldset>
                                <form method="POST" enctype="multipart/form-data" v-on:submit.prevent="doUpload">
                                    <div class="form-group has-error">
                                        <label class="control-label">Video</label>
                                        <input class="form-control input-lg" ref="fileUpload" type="file" @change="uploadFile">
                                    </div>
                                    <button class="btn btn-lg btn-primary btn-block">Upload</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-light py-3" v-if="isShowAdd">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="card card-body">
                            <h3 class="text-center mb-4">Add</h3>
                            <fieldset>
                                <form method="POST" enctype="multipart/form-data" v-on:submit.prevent="doAdd">
                                    <div class="form-group">
                                        <label class="control-label">Category</label>
                                        <select class="form-control input-lg" v-model="film.category_id">
                                            <option value="">Select Category</option>
                                            <option v-for="category in categories" :value="category.id">
                                                {{category.name}}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Name</label>
                                        <input class="form-control input-lg" type="text" v-model="film.name">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Nation</label>
                                        <input class="form-control input-lg" type="text" v-model="film.nation">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Image</label>
                                        <input class="form-control input-lg" ref="image" type="file" @change="selectFile">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Length</label>
                                        <input class="form-control input-lg" type="text" v-model="film.length">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Resolution</label>
                                        <input class="form-control input-lg" type="text" v-model="film.resolution">
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="control-label">Slug</label>
                                        <input class="form-control input-lg" type="text" v-model="film.slug">
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
                                <div class="form-group">
                                    <label class="control-label">Category</label>
                                    <select class="form-control input-lg" v-model="activeEdit.category_id">
                                        <option value="">Select Category</option>
                                        <option v-for="category in categories" :value="category.id">
                                            {{category.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Name</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.name">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Nation</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.nation">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Image</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.image">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Length</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.length">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Resolution</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.resolution">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Slug</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.slug">
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
        films: null,
        isShowAdd: false,
        isShowEdit: false,
        isShowUpload: false,
        isShowActor: false,
        categories: null,
        film: {
          category_id: null,
          name: null,
          nation: null,
          image: null,
          length: null,
          resolution: null,
          slug: null
        },
        activeEdit: null,
        upload: {
            video: null,
            film_id: null
        },
        actors: null,
        actor_film: {
          film_id: "",
          actor_id: ""
        }
      }
    },

    created() {
      this.getCategories();
      this.getActors();
      this.getFilms();
    },

    methods: {
      getFilms() {
        Request.get('/api/films').then((response) => {
          this.films = response.data;
        });
      },

      selectFile() {
        this.film.image = this.$refs.image.files[0];
      },

      add() {
        this.isShowAdd = true;
      },

      doAdd() {
        let formData = new FormData();
        formData.append('image', this.film.image);
        formData.append('category_id', this.film.category_id);
        formData.append('name', this.film.name);
        formData.append('nation', this.film.nation);
        formData.append('length', this.film.length);
        formData.append('resolution', this.film.resolution);
        formData.append('slug', this.film.slug);

        Request.post('/api/films', formData).then((response) => {
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

      getCategories() {
        Request.get('/api/categories').then((response) => {
          this.categories = response.data;
        });
      },

      getActors() {
        Request.get('/api/actors').then((response) => {
          this.actors = response.data;
        });
      },

      getUrl(link)
      {
        return '/storage/img/film/' + link;
      },

      selectVideo(film) {
        this.upload.film_id = film.id;
        this.isShowUpload = true;
      },

      doUpload() {
        let formData = new FormData();
        formData.append('video', this.upload.video);
        Request.post('/api/films/' + this.upload.film_id + '/upload', formData).then((response) => {
          this.isShowUpload = false;
          this.initData();
        });
      },

      uploadFile() {
        this.upload.video = this.$refs.fileUpload.files[0];
      },

      getLink(film) {
        if (film.links.length) {
          return film.links[0].link;
        }
        return '';
      },

      addActor(film) {
        this.actor_film.film_id = film.id;
        this.isShowActor = true;
      },

      doAddActor() {
        let params = {
          actor_id: this.actor_film.actor_id
        };
        Request.post('/api/films/' + this.actor_film.film_id + '/addActor', params).then((response) => {
          this.isShowActor = false;
        });
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
td > span {
    margin-right: 5px;
}
</style>