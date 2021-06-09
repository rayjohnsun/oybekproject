<template>
	<div class="mb-4">
    <v-btn color="primary" :elevation="elevation" 
    		:text="text !== undefined" 
    		:outlined="outlined !== undefined"
    		x-large>
			<div>
	    	<div style="font-size: 12px;">{{ text1 }}</div>
	    	<div>{{ text2 }}</div>
	  	</div>
	  	<slot name="cont"></slot>
	  	<slot></slot>
		</v-btn>
	</div>
</template>
<script>
export default {
	props: ['elevation', 'text', 'outlined', 'text1', 'text2']
}
</script>