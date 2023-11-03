<template>
  <h1>Editar Categorias</h1>
  <form @submit.prevent="update()">
    <p>Nombre: <input type="text" v-model="payload.name" required/> </p>
    <button type="submit" >Agregar</button>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CategoryUpdate',
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
    getOne(){
      this.axios({
        method: 'get',
        url: this.api+'/categorias/'+this.$route.params.id
      }).
      then((response)=>{
        this.payload = response.data;
      }).
      catch((error)=>{
          console.log(error);
        });
    },
    update(){
      if(confirm("Estas seguro de editar el registro?")){
        this.axios({
          method: 'patch',
          url: this.api+'/categorias/'+this.$route.params.id,
          data: this.payload
        }).
        then((response)=>{
          console.log(response);
        }).
        catch((error)=>{
          console.log(error);
        });
      }
    }
  },
  components: {

  },
  mounted(){
     this.getOne();
  }
}
</script>
