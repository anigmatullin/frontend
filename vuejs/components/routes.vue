<template>
  <div>
    <h3>Routes:</h3>

      <table class="table table-bordered table-dark">

      <thead>
        <tr>
          <th>Destination</th>
          <th>Gateway</th>
          <th>Interface</th>
        </tr>
      </thead>

      <tbody>

      <tr v-for="route in routes.direct">

        <td>
          {{route.dst}}
        </td>

        <td>
          {{route.gw}}
        </td>

        <td>
          {{route.int}}
        </td>

      </tr>

      <tr v-for="route in routes.host">

        <td>
          {{route.dst}}
        </td>

        <td>
          {{route.gw}}
        </td>

        <td>
          {{route.int}}
        </td>

      </tr>

      <tr v-for="route in routes.network">

        <td>
          {{route.dst}}
        </td>

        <td>
          {{route.gw}}
        </td>

        <td>
          {{route.int}}
        </td>

      </tr>

      <tr v-for="route in routes.default">

        <td>
          {{route.dst}}
        </td>

        <td>
          {{route.gw}}
        </td>

        <td>
          {{route.int}}
        </td>

      </tr>

      </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  name: 'routes',
  props: {
    routes: {},
  }
}
</script>

<style scoped>
h3 {
  text-align: left;
}
</style>