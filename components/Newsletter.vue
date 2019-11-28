<template>
  <el-form class="demo-form-inline">
    <el-form-item label="E-Mail Adresse" prop="email">
      <el-input
        placeholder="Deine E-Mail Adresse, falls bei der Lieferung etwas schief geht."
      ></el-input>
    </el-form-item>
    <el-form-item prop="print_name">
      <el-checkbox>
        Ich möchte Neuigkeiten per Email erhalten.
      </el-checkbox>
    </el-form-item>
    <div class="form-footer">
      <el-form-item class="submit-btn">
        <el-button type="primary">Newsletter Abonnieren</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
export default {
  methods: {
    showSupporter() {
      console.log('Läuft')
    }
  }
}
</script>
