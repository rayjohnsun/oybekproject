<template>
  <div class="home">

  	<my-btn elevation="2" outlined text1="tttttt" text2="bbbbbb"></my-btn>
  	<my-btn text text2="Test2"></my-btn>
  	<my-btn>
  		<template v-slot:default>
  			<div>xxxxxxxxxxxxxxx</div>
  		</template>
  		<template v-slot:cont>
  			<div>
		    	<div style="font-size: 12px;">aaaaaaa</div>
		    	<div>cccccccc</div>
		    	<div style="font-size: 12px;">bbbbbb</div>
	    	</div>
  		</template>
  	</my-btn>
  	<my-btn outlined>Test4</my-btn>

  	<!-- <div class="mb-4">
	    <v-btn color="primary" elevation="2" outlined x-large>
	    	<div>
		    	<div style="font-size: 12px;">Text1</div>
		    	<div>Text2</div>
	    	</div>
	    </v-btn>
  	</div>
  	<div class="mb-4">
	    <v-btn color="primary" text x-large>Test2</v-btn>
  	</div>
  	<div class="mb-4">
	    <v-btn color="primary" x-large>Test3</v-btn>
  	</div> -->
  </div>
</template>

<script>

import MyBtn from '@/components/MyBtn'
export default {
	components: {MyBtn},
  name: 'Home',
}
</script>
