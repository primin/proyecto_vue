<template>
  <div class="container">
    <h1>Activos</h1>
    <div class="card">
      
    </div>
    <div class="card">
      <br>
      <a class="waves-effect waves-light btn" @click="abrirModalActivos()"><i class="material-icons left">add</i>Agregar</a>

      <div class="card-content">
        <form @submit.prevent="getList()">
          <h5>Buscar Activo</h5>
          <p>Nombre Tipo: <input type="search" v-model="search" @search="getList()" /></p>
          <button type="submit" class="waves-effect waves-light btn-small">buscar</button>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <h5>filtros</h5>
        <div class="input-field ">
          <select @change="filter('estado',$event.target.value)">
            <option value="" selected>todos</option>
              <option value="Nuevo">Nuevo</option>
              <option value="Usado">Usado</option>
              <option value="Desuso">Desuso</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Tipo Activo</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Estado</th>
              <th>idArea</th>
              <th>Área</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items">
              <td>{{ item.id }}</td>
              <td>{{ item.tipoActivo }}</td>
              <td>{{ item.marca }}</td>
              <td>{{ item.modelo }}</td>
              <td>{{ item.estado }}</td>
              <td>{{ item.areaId }}</td>
              <td></td>
              <td> <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons" @click="eliminar(item.id)">delete</i></a></td>
              <td> <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons" @click="update(item.id)">edit</i></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>

  <!--
  <form @submit.prevent="nuevo()">
    <p>Tipo Activo: <input type="text" v-model="payload.tipoActivo" required/> </p>
    <p>Marca: <input type="text" v-model="payload.marca" required/> </p>
    <p>Modelo: <input type="text" v-model="payload.modelo" required/> </p>
    <p>Estado: <input type="text" v-model="payload.estado" required/> </p>
    <p>idArea: <input type="text" v-model="payload.areaId" required/> </p>
    <button type="submit" >Agregar</button>
  </form>
-->




  <div class="modal" id="activos-modal">
    <div class="modal-content">
      <div class="row">
        <form @submit.prevent="nuevo()">
          <p>Tipo Activo: <input type="text" v-model="payload.tipoActivo" required/> </p>
          <p>Marca: <input type="text" v-model="payload.marca" required/> </p>
          <p>Modelo: <input type="text" v-model="payload.modelo" required/> </p>
          <p>Estado: <input type="text" v-model="payload.estado" required/> </p>
          <p>idArea: <input type="text" v-model="payload.areaId" required/> </p>

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
  name: 'ActivosView',
  data(){
    const api = process.env.VUE_APP_API;
    return {
      api,
      items:[],
      search: '',
      toFilter: '',
      payload: {
        name:null
      },
      modales: []
    }
  },
  methods:{
    filter(name, value) {
      this.toFilter = value === '' ? '' : '&' + name + '=' + value;
      this.getList();
    },
    update(id){
      this.$router.push('/activos/'+id);
    },
    eliminar(id){
      if(confirm("Estas seguro de eliminar el registro de activos?")){
        this.axios({
          method: 'delete',
          url: this.api+'/activos/'+id
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
        url: this.api+'/activos',
        data: this.payload
      }).
      then((response)=>{
        this.getList();
        this.cerrarModalActivos();
        console.log(response);
      }).
      catch((error)=>{
        this.getList();
        this.cerrarModalActivos();
        console.log(error);
      })
    },
    getList(name, value){
      this.axios({
        method: 'get',
        url: this.api+'/activos?q=' + this.search + this.toFilter
      }).
      then((response)=>{
        this.items = response.data;
      }).
      catch((error)=>{
        console.log(error);
      })
    },
    abrirModalActivos(){
      var modal_activos = M.Modal.getInstance(document.querySelector('#activos-modal'));
      modal_activos.open();
    },
    cerrarModalActivos(){
      var modal_activos = M.Modal.getInstance(document.querySelector('#activos-modal'));
      modal_activos.close();
    }
  },
  components: {

  },
  mounted(){
    this.getList();
    var elems = document.querySelectorAll('.modal');
    this.modales = M.Modal.init(elems, null);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }
}
</script>
