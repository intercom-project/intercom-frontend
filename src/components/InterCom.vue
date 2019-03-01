<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <md-card class="md-elevation-12">
      <md-card-header>
        <div class="md-title">Connectez-vous</div>
      </md-card-header>
      <md-content>
        <md-field md-inline>
          <label>exemple</label>
          <md-input class="md-input" v-model="server"></md-input>
        </md-field>
        <span class="md-headline">.intecom.com</span>
      </md-content>
      <md-card-actions>
        <md-button class="md-dense md-primary">Valider</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'InterCom',
  data () {
    return {
      msg: 'Bienvenue sur InterCom !',
      server: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200) // The primary color of your application
));
@import "~vue-material/dist/theme/all"; // Apply the theme

h1, h2
{
  font-weight: normal;
}
ul
{
  list-style-type: none;
  padding: 0;
}
li
{
  display: inline-block;
  margin: 0 10px;
}
a
{
  color: #42b983;
}

.md-card
{
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  background: #FFF;
}

.md-content
{
  width: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.md-field
{
  //margin-left: 10px;
  width: 150px;
}

.md-input
{
  width: 150px;
}
</style>
