<template>
  <div class="row">
    <div class="col-12 col-md-3">
      <c35-prog-list-filters />
    </div>
    <div id="c35-prog-list-filters-values" class="col-12 col-md-9">
      <c35-prog v-for="(prog, index) in list" :key="index" :prog="prog" />
    </div>
  </div>
</template>

<script>
import C35Prog from "./Prog"
import C35ProgListFilters from "./ProgListFilters"

export default {
  name: "C35ProgList",
  components: { C35Prog, C35ProgListFilters },
  data() {
    return {
      list: [
        {
          cinema: {
            name: "CINEVILLE VERN VAL D'ORSON",
            city: "Vern-sur-Seiche à 20km",
            additional: "",
          },
          schedules: [
            {
              startDate: "01/09/2020",
              endDate: "05/09/2020",
              hours: ["12:00"],
              lang: "vfst",
              format: "2k",
              dimension: "2d",
              confort: "ice_lv",
            },
            {
              startDate: "01/09/2020",
              endDate: "01/09/2020",
              hours: ["14:00", "16:30", "19:00", "21:30"],
              lang: "vf",
              dimension: "2d",
              format: "35mm",
              confort: "ice",
            },
            {
              startDate: "01/09/2020",
              endDate: "05/09/2020",
              hours: ["23:30"],
              lang: "vfad",
              dimension: "3d",
              format: "4k",
              sound: "7.1",
              confort: "4dx",
            },
            {
              startDate: "02/09/2020",
              endDate: "02/09/2020",
              hours: ["14:00", "16:30", "19:00", "21:30"],
              lang: "vo",
              dimension: "3d",
              format: "4k+",
              sound: "atmos",
              confort: "dc",
            },
            {
              startDate: "01/09/2020",
              endDate: "05/09/2020",
              hours: ["14:00", "16:30"],
              lang: "vost",
              dimension: "2d",
              format: "4k",
            },
          ],
        },
        {
          cinema: {
            name: "CINEVILLE BRUZ VERT BUISSON",
            city: "Bruz à 15km",
            additional: "",
          },
          schedules: [
            {
              startDate: "01/09/2020",
              endDate: "05/09/2020",
              hours: ["12:00"],
              lang: "vfst",
              dimension: "2d",
              confort: "ice_lv",
            },
            {
              startDate: "01/09/2020",
              endDate: "01/09/2020",
              hours: ["14:00", "16:30", "19:00", "21:30"],
              lang: "vf",
              dimension: "2d",
              format: "35mm",
              confort: "ice",
            },
            {
              startDate: "01/09/2020",
              endDate: "05/09/2020",
              hours: ["23:30"],
              lang: "vfad",
              dimension: "3d",
              format: "4k",
              sound: "7.1",
              confort: "4dx",
            },
            {
              startDate: "02/09/2020",
              endDate: "02/09/2020",
              hours: ["14:00", "16:30", "19:00", "21:30"],
              lang: "vo",
              dimension: "3d",
              format: "4k+",
              sound: "atmos",
              confort: "dc",
            },
            {
              startDate: "01/09/2020",
              endDate: "05/09/2020",
              hours: ["14:00", "16:30"],
              lang: "vost",
              dimension: "2d",
              format: "4k",
            },
          ],
        },
      ],
    }
  },
}
</script>
