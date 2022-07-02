<template>
<div class="col-4">

  <h3>DNS:</h3>

  <table class="table table-bordered table-dark">
    <!-- <thead>
      <tr>
        <th>
          Server
        </th>
      </tr>
    </thead> -->
    <tbody>
      <tr v-for="server in servers" :key="server">
        <td>{{server}}</td>
      </tr>
    </tbody>
  </table>

</div>
</template>

<script>
export default {
  name: 'dns',
  props: {
    servers: Array,
  }
}
</script>

<style scoped>
h3 {
  text-align: left;
}
</style>
