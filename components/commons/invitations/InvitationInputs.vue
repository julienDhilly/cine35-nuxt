<template>
  <div>
    <div class="form-group row">
      <label for="inputCivility" class="col-sm-3 col-form-label text-right">
        Civilité* :
      </label>
      <div class="col-sm-9">
        <select id="inputCivility" class="form-control" required>
          <option selected>
            Monsieur
          </option>
          <option>
            Madame
          </option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label for="name" class="col-sm-3 col-form-label text-right">
        Nom* :
      </label>
      <div class="col-sm-9">
        <input id="name" type="text" class="form-control" required />
      </div>
    </div>
    <div class="form-group row">
      <label for="firstName" class="col-sm-3 col-form-label text-right">
        Prénom* :
      </label>
      <div class="col-sm-9">
        <input id="firstName" type="text" class="form-control" required />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label text-right">
        Né(e) le* :
      </label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <select id="inputBirthDay" class="form-control" required>
            <template v-for="day in days">
              <option :key="day">
                {{ day }}
              </option>
            </template>
          </select>
        </div>
        <div class="form-check form-check-inline">
          <select id="inputBirthMonth" class="form-control" required>
            <template v-for="month in months">
              <option :key="month">
                {{ month }}
              </option>
            </template>
          </select>
        </div>
        <div class="form-check form-check-inline">
          <select id="inputBirthYear" class="form-control" required>
            <template v-for="year in years">
              <option :key="year">
                {{ year }}
              </option>
            </template>
          </select>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-sm-3 col-form-label text-right">
        Addresse mail* :
      </label>
      <div class="col-sm-9">
        <input id="email" type="email" class="form-control" required />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-3" />
      <div class="col-sm-9 text-left">
        <input
          id="inputSubscribeNL"
          class="form-check-input"
          type="checkbox"
          name="subscribeNL"
        />
        <label for="inputSubscribeNL">
          M’inscrire gratuitement à la newsletter de Cine35.com
        </label>
      </div>
    </div>
    <div class="text-center">
      <input
        class="btn btn-primary c35-btn"
        type="submit"
        value="Envoyer"
        style="text-transform: uppercase;"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [],
      months: [],
      years: [],
    }
  },

  created() {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      this.months.push(i)
    }
    for (let i = 1900; i <= 2020; i++) {
      this.years.push(i)
    }
  },
}
</script>
