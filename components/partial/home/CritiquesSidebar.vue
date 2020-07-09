<template>
  <div class="c35-sidebar-block">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>critiques</h3>
          <div class="mt-1">
            <c35-sidebar-content>
              <template #title>
                LE DAHLIA NOIR
              </template>
              <template #content>
                <span class="font-italic">
                  "Un désastre d'1h45"
                </span>
                par Martin G.
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                UN APRÈS-MIDI DE CHIEN
              </template>
              <template #content>
                <span class="font-italic">
                  "Le chef d’oeuvre de son auteur"
                </span>
                par Laura T.
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                LES TORTUES NINJAS
              </template>
              <template #content>
                <span class="font-italic">
                  "Vous reprendrez de la pizza ?"
                </span>
                par John G.
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                LE DAHLIA NOIR
              </template>
              <template #content>
                <span class="font-italic">
                  "Un désastre d'1h45"
                </span>
                par Martin G.
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                UN APRÈS-MIDI DE CHIEN
              </template>
              <template #content>
                <span class="font-italic">
                  "Le chef d’oeuvre de son auteur"
                </span>
                par Laura T.
              </template>
            </c35-sidebar-content>

            <c35-sidebar-content>
              <template #title>
                LES TORTUES NINJAS
              </template>
              <template #content>
                <span class="font-italic">
                  "Vous reprendrez de la pizza ?"
                </span>
                par John G.
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
  name: "C35HomeCritiquesSidebar",
  components: { C35SidebarContent },
}
</script>
