<template>
  <form
    @submit.prevent="createNewTwaat"
    class="create-twaat-panel"
    :class="{ '--exceeded': newTwaatCharacterCount > 180 }"
  >
    <label for="newTwaat"
      ><strong>New Twaat </strong>({{ newTwaatCharacterCount }}/180)</label
    >
    <textarea id="newTwaat" rows="3" v-model="state.newTwaatContent" />
    <div class="create-twaat-panel__submit">
      <div class="create-twaat-type">
        <label for="newTwaatType"><strong>Type: </strong></label>
        <select id="newTwaatType" v-model="state.selectedTwaatType">
          <option
            :value="option.value"
            v-for="(option, index) in state.twaatTypes"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>

      <button>TWAAT!</button>
    </div>
  </form>
</template>
<script>
// With Composition API Refactor :
import { reactive, computed } from "vue";
export default {
  name: "CreateTwaatPanel",
  // data function in composition API :
  setup(props, ctx) {
    const state = reactive({
      twaatTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Tweet" },
      ],
      newTwaatContent: "Good Morning Have a Nice day",
      selectedTwaatType: "instant",
    });

    // computed property in composition API :
    const newTwaatCharacterCount = computed(() => state.newTwaatContent.length);

    // method option in compositionAPI :
    function createNewTwaat() {
      console.log(state.newTwaatContent);
      if (state.newTwaatContent && state.selectedTwaatType !== "draft") {
        ctx.emit("add-twaat", state.newTwaatContent); // use context of component to emit events
        state.newTwaatContent = "";
      }
    }
    return {
      state,
      newTwaatCharacterCount,
      createNewTwaat,
    };
  },
  // Without Composition API :
  //data() {
  //  return {
  //  twaatTypes: [
  //  { value: "draft", name: "Draft" },
  //{ value: "instant", name: "Instant Tweet" },
  //],
  //newTwaatContent: "Good Morning Have a Nice day",
  //selectedTwaatType: "instant",
  //};
  //},
  //   computed: {
  //     newTwaatCharacterCount() {
  //       return this.newTwaatContent.length;
  //     },
  //   },
  //   methods: {
  //     createNewTwaat() {
  //       console.log(this.newTwaatContent);
  //       if (this.newTwaatContent && this.selectedTwaatType !== "draft") {
  //         this.$emit("add-twaat", this.newTwaatContent);
  //         this.newTwaatContent = "";
  //       }
  //     },
  //   },
};
</script>
<style lang="scss" scoped>
.create-twaat-panel {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
  }

  .create-twaat-panel__submit {
    display: flex;
    justify-content: space-between;

    .create-twaat-type {
      padding: 10px 0;
    }

    button {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: deepskyblue;
      color: white;
      font-weight: bold;
    }
  }

  &.--exceeded {
    color: red;
    border-color: red;

    .create-twaat-panel__submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>