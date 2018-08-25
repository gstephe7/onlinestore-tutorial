<template>

  <div>
    <form @submit.prevent="saveProduct">
      <div class="formSection">
        <div class="formGroup">
          <label>Name</label>
          <input type="text" placeholder="Name" v-model="model.name" v-validate="'required'" name="name" :class="{ 'form-control': true, 'error': errors.has('name') }">
          <span class="alertText" v-show="errors.has('name')">Name is required</span>
        </div>
        <div class="formGroup">
          <label>Price</label>
          <input type="text" class="form-control" placeholder="Price" v-model="model.price" v-validate="'required'" name="price" :class="{ 'form-control': true, 'error': errors.has('price') }">
          <span class="alertText" v-show="errors.has('price')">Price is required</span>
        </div>
        <div class="formGroup">
          <label>Manufacturer</label>
          <select type="text" class="form-control" v-model="model.manufacturer" v-validate="'required'" name="manufacturer" :class="{ 'form-control': true, 'error': errors.has('manufacturer') }">
            <template v-for="manufacturer in manufacturers">
              <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">{{ manufacturer.name }}</option>
            </template>
          </select>
          <span class="alertText" v-show="errors.has('name')">Name is required</span>
        </div>
      </div>
      <div class="formSection">
        <div class="formGroup">
          <label>Image</label>
          <input type="text" placeholder="Image" class="form-control" v-model="model.image" v-validate="'required'" name="image" :class="{ 'form-control': true, 'error': errors.has('image') }">
          <span class="alertText" v-show="errors.has('image')">Image is required</span>
        </div>
        <div class="formGroup">
          <label>Description</label>
          <textarea type="number" placeholder="Description" name="description" class="form-control" rows="5" v-model="model.description" v-validate="'required'" :class="{ 'form-control': true, 'error': errors.has('description') }"></textarea>
          <span class="alertText" v-show="errors.has('name')">Description is required</span>
        </div>
        <div class="formGroup">
          <input v-if="isEditing" type="submit" value="Update Product">
          <input v-else type="submit" value="Add Product">
        </div>
      </div>
    </form>
  </div>

</template>

<script>

export default {
  name: 'new',
  props: ['model', 'isEditing', 'manufacturers'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model);
    }
  }
};

</script>

<style>

  form {
    display: flex;
    flex-flow: row wrap;
  }

  .formSection {
    display: flex;
    flex-flow: row wrap;
    flex: 1;
    min-width: 300px;
  }

  .formGroup {
    flex: 1;
    min-width: 300px;
  }

  input, label, select, textarea {
    display: block;
    margin: 10px;
    width: 200px;
  }

  button {
    width: 150px;
  }

</style>
