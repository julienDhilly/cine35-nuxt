<template>
  <div class="c35-sidebar-block">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Actualités</h3>
          <div class="mt-1">
            <c35-sidebar-content>
              <template #title>
                événement
              </template>
              <template #content>
                Festibal
                <span class="text-primary font-weight-bold">
                  Court métrange
                </span>
                à Rennes du 25 mars au 14 avril 2019
              </template>
            </c35-sidebar-content>
            <c35-sidebar-content>
              <template #title>
                avant-première
              </template>
              <template #content>
                <span class="text-primary font-weight-bold">
                  All inclusive
                </span>
                au CGR La Mézière. Mardi 12 février à 21h30
              </template>
            </c35-sidebar-content>
            <c35-sidebar-content>
              <template #title>
                ÉQUIPE DE FILM
              </template>
              <template #content>
                L’équipe de
                <span class="text-primary font-weight-bold">
                  Qu’est-ce qu’on a fait au bon dieu ?
                </span>
                à Vern sur Seiche
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                événement
              </template>
              <template #content>
                Festibal
                <span class="text-primary font-weight-bold">
                  Court métrange
                </span>
                à Rennes du 25 mars au 14 avril 2019
              </template>
            </c35-sidebar-content>
            <c35-sidebar-content>
              <template #title>
                avant-première
              </template>
              <template #content>
                <span class="text-primary font-weight-bold">
                  All inclusive
                </span>
                au CGR La Mézière. Mardi 12 février à 21h30
              </template>
            </c35-sidebar-content>
            <c35-sidebar-content>
              <template #title>
                ÉQUIPE DE FILM
              </template>
              <template #content>
                L’équipe de
                <span class="text-primary font-weight-bold">
                  Qu’est-ce qu’on a fait au bon dieu ?
                </span>
                à Vern sur Seiche
              </template>
            </c35-sidebar-content>
          </div>
          <div class="c35-sibera-content-action">
            <a class="btn btn-primary c35-btn">
              Voir toutes les actualités
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C35SidebarContent from "./SidebarContent"

export default {
  name: "C35HomeNewsSidebar",
  components: { C35SidebarContent },
}
</script>
