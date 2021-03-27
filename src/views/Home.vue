<template>
  <div>
    <v-card elevation="2">
      <v-card-title> Abrir Conta </v-card-title>
      <v-card-text>
        <form>
          <v-text-field
            :error-messages="nameErrors"
            v-model="name"
            label="Name"
            required
            class="pa-2"
          ></v-text-field>
          <v-select
            v-model="limit"
            :items="limits"
            :error-messages="limitErrors"
            label="Limite de compra"
            required
            class="pa-2"
          ></v-select>
          <v-btn
            color="success"
            class="mr-4 mt-3"
            @click.prevent="openAccount()"
          >
            Abrir Conta
          </v-btn>
        </form>
      </v-card-text>
      <v-snackbar v-model="showNotification">
        Conta criada com sucesso!
        <template v-slot:action="{ attrs }">
          <v-btn
            color="indigo"
            text
            v-bind="attrs"
            @click="showNotification = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
    <v-card elevation="2" v-if="account">
      <v-card-title>Dados da Conta </v-card-title>
      <v-card-text>
        <div>Nome da conta: {{ account.name }}</div>
        <p class="text--primary">Limite da Conta: {{ account.limit }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import Account from "../model/Account";
import accountService from "../services/AccountService";

@Component({
  mixins: [validationMixin],
  data: () => {
    return {
      name: null,
      limit: null,
      showNotification: false,
      account: null,
    };
  },
  validations: {
    name: { required, minLength: minLength(10) },
    limit: { required },
  },
  computed: {
    nameErrors() {
      const errors: any = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Nome é um campo obrigatório");
      !this.$v.name.minLength &&
        errors.push("Nome deve ter no mínimo 10 caracteres");
      return errors;
    },
    limitErrors() {
      const errors: any = [];
      if (!this.$v.limit.$dirty) return errors;
      !this.$v.limit.required && errors.push("Limite é um campo obrigatório");
      return errors;
    },
  },
})
export default class extends Vue {
  limits = [10, 50, 75, 100];
  openAccount(): void {
    this.$v.$touch();
    if (this.$v.$invalid) {
      return;
    }

    let request: Account = new Account();
    request.name = this.$data.name;
    request.limit = this.$data.limit;
    request.activeCard = true;

    accountService.createAccount(request).then((r) => {
      this.$data.showNotification = true;
      this.$data.account = r.data;
    });
  }
}
</script>


