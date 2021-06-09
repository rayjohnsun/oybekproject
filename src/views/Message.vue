<template>
  <div class="home">
    <v-hover v-slot="{ hover }">
    	<v-card :elevation="hover ? 10 : 2">
    		<v-card-title>Test <v-icon>mdi-antenna</v-icon></v-card-title>
    		<v-card-text>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Alias, magnam.</v-card-text>
    	</v-card>
    </v-hover>
  </div>
</template>

<script>

export default {
  name: 'Message',
}
</script>
