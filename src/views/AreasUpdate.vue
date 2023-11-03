<template>
  <h1>Editar Areas</h1>
  <form @submit.prevent="update()">
    <p>Área / Departamento: <input type="text" v-model="payload.nombredepartamento" required/> </p>
    <p>Encargado: <input type="text" v-model="payload.nombreEncargado" required/> </p>
    <p>Cant. Funcionarios: <input type="text" v-model="payload.cantidadFuncionarios" required/> </p>

    <button class="btn waves-effect waves-light" type="submit" name="action">Guardar
      <i class="material-icons right">send</i>
    </button>
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
        nombredepartamento:null,
        nombreEncargado:null,
        cantidadFuncionarios:null
      }
    }
  },
  methods:{
    getOne(){
      this.axios({
        method: 'get',
        url: this.api+'/areas/'+this.$route.params.id
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
          url: this.api+'/areas/'+this.$route.params.id,
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
