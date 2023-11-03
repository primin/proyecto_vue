<template>
  <h1>Áreas</h1>
  <!--
  <form @submit.prevent="nuevo()">
    <p>Área / Departamento: <input type="text" v-model="payload.nombredepartamento" required/> </p>
    <p>Encargado: <input type="text" v-model="payload.nombreEncargado" required/> </p>
    <p>Cant. Funcionarios: <input type="text" v-model="payload.cantidadFuncionarios" required/> </p>
    <button type="submit" >Agregar</button>
  </form>
-->
  <a class="waves-effect waves-light btn" @click="abrirModalArea()"><i class="material-icons left">add</i>Agregar</a>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Nombre Área / Departamento</th>
        <th>Nombre Encargado</th>
        <th>Cantidad Funcionarios</th>
        <th></th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in items">
        <td>{{ item.id }}</td>
        <td>{{ item.nombredepartamento }}</td>
        <td>{{ item.nombreEncargado }}</td>
        <td>{{ item.cantidadFuncionarios }}</td>
        <td> <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons" @click="eliminar(item.id)">delete</i></a></td>
        <td> <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons" @click="update(item.id)">edit</i></a></td>
      </tr>
    </tbody>
  </table>

  <div class="modal" id="areas-modal">
    <div class="modal-content">
      <div class="row">
        <form @submit.prevent="nuevo()">
          <p>Área / Departamento: <input type="text" v-model="payload.nombredepartamento" required/> </p>
          <p>Encargado: <input type="text" v-model="payload.nombreEncargado" required/> </p>
          <p>Cant. Funcionarios: <input type="text" v-model="payload.cantidadFuncionarios" required/> </p>

          <button class="btn waves-effect waves-light" type="submit" name="action">Guardar
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import M from 'materialize-css'

export default {
  name: 'AreasView',
  data(){
    const api = process.env.VUE_APP_API;
    return {
      api,
      items:[],
      payload: {
        name:null
      },
      modales: []
    }
  },
  methods:{
    update(id){
      this.$router.push('/areas/'+id);
    },
    eliminar(id){
      if(confirm("Estas seguro de eliminar el registro del Área?")){
        this.axios({
          method: 'delete',
          url: this.api+'/areas/'+id
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
        url: this.api+'/areas',
        data: this.payload
      }).
      then((response)=>{
        this.getList();
        this.cerrarModalArea();
        console.log(response);

      }).
      catch((error)=>{
        this.getList();
        this.cerrarModalArea();
        console.log(error);
      })
    },
    getList(){
      this.axios({
        method: 'get',
        url: this.api+'/areas'
      }).
      then((response)=>{
        this.items = response.data;
      }).
      catch((error)=>{
        console.log(error);
      })
    },
    abrirModalArea(){
      var modal_areas = M.Modal.getInstance(document.querySelector('#areas-modal'));
      modal_areas.open();
    },
    cerrarModalArea(){
      var modal_areas = M.Modal.getInstance(document.querySelector('#areas-modal'));
      modal_areas.close();
    }
  },
  components: {

  },
  mounted(){
    this.getList();
    var elems = document.querySelectorAll('.modal');
    this.modales = M.Modal.init(elems, null);
  },
}
</script>
