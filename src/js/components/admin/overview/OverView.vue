<template>
    <div>
        <main_header></main_header>
        <main class="py-4">
            <div class="container mt30">
                <div class="card-header">
                    <h1>List Overview film</h1>
                    <div>
                        <button class="btn btn-primary" @click="add()">Add</button>
                    </div>
                </div>

                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Link</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(overview, index) in overviews">
                        <th scope="row">{{index+1}}</th>
                        <td>{{overview.name}}</td>
                        <td>{{overview.content}}</td>
                        <td>{{overview.image}}</td>
                        <td>
                       <span class="mr5 crpt" @click="edit(overview)">
                            <i class="fa fa-pencil-square-o"></i>
                        </span>
                            <span class="crpt" @click="remove(overview)">
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
                                <div class="form-group">
                                    <label class="control-label">Category</label>
                                    <select class="form-control input-lg" v-model="overview.category_id">
                                        <option value="">Select Category</option>
                                        <option v-for="category in categories" :value="category.id">
                                            {{category.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Name</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.name">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Nation</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.nation">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Year</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.year">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Resolution</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.resolution">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Language</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.language">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Slug</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.slug">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Episodes</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.episodes">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Content</label>
                                    <textarea class="form-control input-lg" v-model="overview.content"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Type</label>
                                    <select class="form-control input-lg" v-model="overview.type">
                                        <option value="">Select Type</option>
                                        <option value="1">Short story</option>
                                        <option value="2">Long story</option>
                                    </select>
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Idmb</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.idmb">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Trailer</label>
                                    <select class="form-control input-lg" v-model="overview.trailer_id">
                                        <option value="">Select Category</option>
                                        <option v-for="trailer in trailers" :value="trailer.id">
                                            {{trailer.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Image</label>
                                    <input class="form-control input-lg" type="text" v-model="overview.image">
                                </div>
                                <button class="btn btn-lg btn-primary btn-block" @click="doAdd()">Add</button>
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
                                    <label class="control-label">Year</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.year">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Resolution</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.resolution">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Language</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.language">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Slug</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.slug">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Episodes</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.episodes">
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Content</label>
                                    <textarea class="form-control input-lg" v-model="activeEdit.content"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Type</label>
                                    <select class="form-control input-lg" v-model="activeEdit.type">
                                        <option value="">Select Type</option>
                                        <option value="1">Short story</option>
                                        <option value="2">Long story</option>
                                    </select>
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Idmb</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.idmb">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Trailer</label>
                                    <select class="form-control input-lg" v-model="activeEdit.trailer_id">
                                        <option value="">Select Category</option>
                                        <option v-for="trailer in trailers" :value="trailer.id">
                                            {{trailer.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group has-error">
                                    <label class="control-label">Image</label>
                                    <input class="form-control input-lg" type="text" v-model="activeEdit.image">
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
        trailers: null,
        overviews: null,
        isShowAdd: false,
        isShowEdit: false,
        overview: {
          category_id: null,
          name: null,
          nation: null,
          year: null,
          resolution: null,
          language: null,
          slug: null,
          content: null,
          type: null,
          idmb: null,
          trailer_id: null,
          image: null,
          episodes: null
        },
        activeEdit: null,
        categories: null
      }
    },

    created() {
      this.getCategories();
      this.getTrailers();
      this.getOverviews();
    },

    methods: {

      getTrailers() {
        Request.get('/api/trailers').then((response) => {
          this.trailers = response.data;
        });
      },

      getOverviews() {
        Request.get('/api/overviews').then((response) => {
          this.overviews = response.data;
        });
      },

      getCategories() {
        Request.get('/api/categories').then((response) => {
          this.categories = response.data;
        });
      },

      add() {
        this.isShowAdd = true;
      },

      doAdd() {
        Request.post('/api/overviews', this.overview).then((response) => {
          this.isShowAdd = true;
          this.getOverviews();
        });
      },

      edit(trailer) {
        this.activeEdit = trailer;
        this.isShowEdit = true;
      },

      doEdit() {
        Request.put('/api/overviews/' + this.activeEdit.id, this.activeEdit).then((response) => {
          this.getOverviews();
          this.isShowEdit = false;
        });
      },

      remove(overview) {
        Request.delete('/api/overviews/' + overview.id).then((response) => {
          this.getOverviews();
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
</style>