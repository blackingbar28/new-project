<template>
<div>
    <p>
        {{link.link}} | {{link.label}}
        <span class="crpt" @click="$emit('remove')">
            <i class="fa fa-trash"></i>
        </span>
    </p>
</div>
</template>

<script>
  export default {

    props: ['link'],

  }

</script>