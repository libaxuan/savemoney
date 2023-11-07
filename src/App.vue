<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>{{ title }}</th>
        <th v-for="amount in amounts" :key="amount">{{ amount }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(year, yearIndex) in years" :key="yearIndex">
        <td>{{ year }}</td>
        <td v-for="(amount, amountIndex) in amounts" :key="amountIndex"
            @click="changeBackgroundColor(amountIndex, yearIndex)"
            :class="{ 'green-background': isSelected(amountIndex, yearIndex) }">
          {{ calculateValue(amount, year) }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: '年化 3.2%',
      years: [
        '1年', '2年', '3年', '4年', '5年', '6年', '7年', '8年', '9年', '10年',
        '11年', '12年', '13年', '14年', '15年', '16年', '17年', '18年', '19年', '20年',
        '21年', '22年', '23年', '24年', '25年', '26年', '27年', '28年', '29年', '30年',
        '31年', '32年', '33年', '34年', '35年', '36年', '37年', '38年', '39年', '40年',
        '41年', '42年', '43年', '44年', '45年', '46年', '47年', '48年', '49年', '50年',
        '51年', '52年', '53年', '54年', '55年', '56年', '57年', '58年', '59年', '60年',
        '61年', '62年', '63年', '64年', '65年', '66年', '67年', '68年', '69年', '70年',
        '71年', '72年', '73年', '74年', '75年', '76年', '77年', '78年', '79年', '80年'
      ],
      amounts: [
        '20万', '40万', '60万', '80万', '100万', '120万', '140万', '160万', '180万', '200万',
        '220万', '240万', '260万', '280万', '300万', '320万', '340万', '360万', '380万', '400万',
        '420万', '440万', '460万', '480万', '500万', '520万', '540万', '560万', '580万', '600万',
        '620万', '640万', '660万', '680万', '700万', '720万', '740万', '760万', '780万', '800万',
        '820万', '840万', '860万', '880万', '900万', '920万', '940万', '960万', '980万', '1000万'
      ],
      selectedCell: null
    };
  },
  methods: {
    calculateValue(amount, year) {
      const principal = parseInt(amount);
      const rate = 0.032;
      const time = parseInt(year);
      const value = principal * rate * time * 10000;
      return value.toFixed(0);
    },
    changeBackgroundColor(amountIndex, yearIndex) {
      if (this.selectedCell === `${amountIndex}-${yearIndex}`) {
        this.selectedCell = null;
      } else {
        this.selectedCell = `${amountIndex}-${yearIndex}`;
      }
    },
    isSelected(amountIndex, yearIndex) {
      return this.selectedCell === `${amountIndex}-${yearIndex}`;
    }
  }
};
</script>


<style>
table {
  width: 280%;
  table-layout: auto;
  text-align: left;
  mso-highlight: auto;
  border-collapse: collapse;
  margin: 0;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.green-background {
  background-color: green;
}
</style>
