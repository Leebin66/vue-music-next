<!-- Modal.vue -->
<template>
  <teleport to="body">
    <div class="modal__mask">
      <p>Modal</p>
    </div>
  </teleport>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
