<template>
  <div class="col-4">
    <h3>System info:</h3>
    
    <table class="table table-bordered table-dark">
      <tbody>
      <tr>
        <td>
          Hostname:
        </td>
        <td>
          {{hostname}}
        </td>
      </tr>
      <tr>
        <td>Uptime:</td>
        <td>{{uptime}}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'sysinfo',
  props: {
    url: String,
    hostname: String,
    uptime: String
  }
}
</script>

<style scoped>
h3 {
  text-align: left;
}
</style>
