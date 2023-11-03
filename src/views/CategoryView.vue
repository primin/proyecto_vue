<template>
  <h1>Categorias</h1>
  <form @submit.prevent="nuevo()">
    <p>Nombre: <input type="text" v-model="payload.name" required/> </p>
    <button type="submit" >Agregar</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th></th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in items">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td> <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons" @click="eliminar(item.id)">delete</i></a></td>
        <td> <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons" @click="update(item.id)">edit</i></a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CategoryView',
  data(){
    const api = process.env.VUE_APP_API;
    return {
      api,
      items:[],
      payload: {
        name:null
      }
    }
  },
  methods:{
    update(id){
      this.$router.push('/category/'+id);
    },
    eliminar(id){
      if(confirm("Estas seguro de eliminar el registro?")){
        this.axios({
          method: 'delete',
          url: this.api+'/categorias/'+id
        }).
        then((response)=>{
          this.getList();
        }).
        catch((error)=>{
          console.log(error);
        });
      }
    },
    nuevo(){
      this.axios({
        method: 'post',
        url: this.api+'/categorias',
        data: this.payload
      }).
      then((response)=>{
        this.getList();
        console.log(response);
      }).
      catch((error)=>{
        this.getList();
        console.log(error);
      })
    },
    getList(){
      this.axios({
        method: 'get',
        url: this.api+'/categorias'
      }).
      then((response)=>{
        this.items = response.data;
      }).
      catch((error)=>{
        console.log(error);
      })
    }
  },
  components: {

  },
  mounted(){
    this.getList();
  }
}
</script>
