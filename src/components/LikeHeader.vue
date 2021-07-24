<template>
  <div>
    <!-- titleのみの適応 -->
    <slot name="title"></slot>
    <!-- numberのみの適応 -->
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>