<template>
  <div class="container mt-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          Admin
        </li>
      </ol>
    </nav>

    <ul class="list-group mt-4">
      <li class="list-group-item">
        <nuxt-link to="/admin/actors">
          Manage actors
        </nuxt-link>
      </li>
      <li class="list-group-item">
        <nuxt-link to="/admin/directors">
          Manage directors
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
