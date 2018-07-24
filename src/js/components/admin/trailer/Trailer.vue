<template>
<div>
    <main_header></main_header>
    <main class="py-4">
        <div class="container mt30">
            <div class="card-header">
                <h1>List trailer</h1>
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
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(trailer, index) in trailers">
                    <th scope="row">{{index+1}}</th>
                    <td>{{trailer.name}}</td>
                    <td>{{trailer.link}}</td>
                    <td>
                       <span class="mr5 crpt" @click="edit(trailer)">
                            <i class="fa fa-pencil-square-o"></i>
                        </span>
                        <span class="crpt" @click="remove(trailer)">
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
                            <div class="form-group has-error">
                                <label class="control-label">Name</label>
                                <input class="form-control input-lg" type="text" v-model="nameModel">
                            </div>
                            <div class="form-group has-error">
                                <label class="control-label">Link</label>
                                <input class="form-control input-lg" type="text" v-model="linkModel">
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
                        <h3 class="text-center mb-4">Add</h3>
                        <fieldset>
                            <div class="form-group has-error">
                                <label class="control-label">Name</label>
                                <input class="form-control input-lg" type="text" v-model="activeEdit.name">
                            </div>
                            <div class="form-group has-error">
                                <label class="control-label">Link</label>
                                <input class="form-control input-lg" type="text" v-model="activeEdit.link">
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
          isShowAdd: false,
          isShowEdit: false,
          linkModel: null,
          nameModel: null,
          activeEdit: null
        }
      },

      created() {
        this.initData();
      },

      methods: {
        initData() {
          Request.get('/api/trailers').then((response) => {
            this.trailers = response.data;
          });
        },

        add() {
            this.isShowAdd = true;
        },

        doAdd() {
          let params = {
            name: this.nameModel,
            link: this.linkModel
          };
          Request.post('/api/trailers', params).then((response) => {
            this.initData();
            this.isShowAdd = false;
          });
        },

        edit(trailer) {
            this.activeEdit = trailer;
            this.isShowEdit = true;
        },

        doEdit() {
          let params = {
            name: this.activeEdit.name,
            link: this.activeEdit.link
          };
          Request.put('/api/trailers/' + this.activeEdit.id, params).then((response) => {
            this.initData();
            this.isShowEdit = false;
          });
        },

        remove(trailer) {
          Request.delete('/api/trailers/' + trailer.id).then((response) => {
            this.initData();
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