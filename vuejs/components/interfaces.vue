<template>
<div>
  <h3>Interfaces:</h3>

    <table class="table table-bordered table-dark">

      <thead>
        <tr>
          <th>Name</th>
          <th>IP</th>
          <th>MAC</th>
          <th>In Packets</th>
          <th>In Bytes</th>
          <th>Out Packets</th>
          <th>Out Bytes</th>
        </tr>
      </thead>

      <tbody>

      <tr v-for="iface in interfaces" :key="iface.name">

        <td>
          {{iface.name}}
        </td>

        <td>
          {{iface.ip}}
        </td>

        <td>
          {{iface.mac}}
        </td>

        <td>
          {{iface.in_packets}}
        </td>

        <td>
          {{iface.in_bytes}}
        </td>

        <td>
          {{iface.out_packets}}
        </td>

        <td>
          {{iface.out_bytes}}
        </td>

      </tr>

      </tbody>
    </table>

</div>
</template>

<script>
export default {
  name: 'interfaces',
  props: {
    interfaces: Array,
  }
}
</script>

<style scoped>
h3 {
  text-align: left;
}
</style>