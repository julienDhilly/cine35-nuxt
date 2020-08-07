<template>
  <div class="c35-sidebar-block">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Actualités</h3>
          <div class="mt-3">
            <c35-sidebar-content>
              <template #title>
                événement
              </template>
              <template #content>
                <a href="/news/123" title="Festival court métrange">
                  Festival
                  <span class="text-primary font-weight-bold">
                    Court métrange
                  </span>
                  à Rennes du 25 mars au 14 avril 2019
                </a>
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                avant-première
              </template>
              <template #content>
                <a href="/news/123" title="All inclusive">
                  <span class="text-primary font-weight-bold">
                    All inclusive
                  </span>
                  au CGR La Mézière. Mardi 12 février à 21h30
                </a>
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                ÉQUIPE DE FILM
              </template>
              <template #content>
                <a
                  href="/news/123"
                  title="équipe de qu'est-ce qu’on a fait au bon dieu ?"
                >
                  L’équipe de
                  <span class="text-primary font-weight-bold">
                    Qu’est-ce qu’on a fait au bon dieu ?
                  </span>
                  à Vern sur Seiche
                </a>
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content class="d-none d-lg-block">
              <template #title>
                événement
              </template>
              <template #content>
                <a href="/news/123" title="Festival court métrange">
                  Festival
                  <span class="text-primary font-weight-bold">
                    Court métrange
                  </span>
                  à Rennes du 25 mars au 14 avril 2019
                </a>
              </template>
            </c35-sidebar-content>
            <c35-sidebar-content class="d-none d-lg-block">
              <template #title>
                avant-première
              </template>
              <template #content>
                <a href="/news/123" title="All inclusive">
                  <span class="text-primary font-weight-bold">
                    All inclusive
                  </span>
                  au CGR La Mézière. Mardi 12 février à 21h30
                </a>
              </template>
            </c35-sidebar-content>
            <c35-sidebar-content class="d-none d-lg-block">
              <template #title>
                ÉQUIPE DE FILM
              </template>
              <template #content>
                <a
                  href="/news/123"
                  title="équipe de qu'est-ce qu’on a fait au bon dieu ?"
                >
                  L’équipe de
                  <span class="text-primary font-weight-bold">
                    Qu’est-ce qu’on a fait au bon dieu ?
                  </span>
                  à Vern sur Seiche
                Ar</a>
              </template>
            </c35-sidebar-content>
          </div>
          <div class="c35-sibera-content-action">
            <a
              href="/news"
              class="btn btn-primary c35-btn"
              title="Voir toutes les actualités"
            >
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
