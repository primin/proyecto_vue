<template>
  <h1>Editar Activos</h1>
  <form @submit.prevent="update()">
    <p>Tipo Activo: <input type="text" v-model="payload.tipoActivo" required/> </p>
    <p>Marca: <input type="text" v-model="payload.marca" required/> </p>
    <p>Modelo: <input type="text" v-model="payload.modelo" required/> </p>
    <p>Estado: <input type="text" v-model="payload.estado" required/> </p>
    <p>idArea: <input type="text" v-model="payload.areaId" required/> </p>

    <button class="btn waves-effect waves-light" type="submit" name="action">Guardar
      <i class="material-icons right">send</i>
    </button>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ActivosUpdate',
  data(){
    const api = process.env.VUE_APP_API;
    return {
      api,
      items:[],
      payload: {
        tipoActivo: null,
        marca: null,
        modelo: null,
        estado: null,
        areaId: null
      }
    }
  },
  methods:{
    getOne(){
      this.axios({
        method: 'get',
        url: this.api+'/activos/'+this.$route.params.id
      }).
      then((response)=>{
        this.payload = response.data;
      }).
      catch((error)=>{
          console.log(error);
        });
    },
    update(){
      if(confirm("Estas seguro de editar el registro de activo?")){
        this.axios({
          method: 'patch',
          url: this.api+'/activos/'+this.$route.params.id,
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
