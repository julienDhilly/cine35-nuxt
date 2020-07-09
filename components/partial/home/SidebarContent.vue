<template>
  <div class="c35-sidebar-content-wrapper">
    <div class="row">
      <div class="col-5 pr-1">
        <div class="c35-sibera-content-title">
          <slot name="title" />
        </div>
      </div>
      <div class="col-7 pl-1">
        <div class="c35-sibera-content-desc">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "C35SidebarContent",
}
</script>
