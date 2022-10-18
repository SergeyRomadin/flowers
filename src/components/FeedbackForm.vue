<template>
  <div class="form">
    <form method="POST" id="feedback-form">
      <h2>Заполните форму и мы с Вами свяжемся!</h2>
      <input
        class="input"
        type="text"
        name="nameFF"
        required
        placeholder="ФИО"
        x-autocompletetype="name"
      />
      <input
        class="input"
        type="email"
        name="contactFF"
        required
        placeholder="адрес электронной почты"
        x-autocompletetype="email"
      />
      <textarea
        class="input textarea"
        name="messageFF"
        placeholder="Укажите здесь ваши пожелания или дополнительную информацию"
        required
        rows="5"
      ></textarea>
      <input class="input button" type="submit" value="отправить" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  text-align: center;

  .input {
    width: 80%;
    border-radius: 0;
    height: 3vh;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid;
    background-color: rgba($color: white, $alpha: 0);
    &:focus {
      outline: 1px solid #50966f;
      border: none;
      box-shadow: 0 0 10px #50966f;
    }
  }

  .textarea {
    height: 5vh;
    resize: none;
    @media (max-width: 500px) {
      height: auto;
    }
  }
  .button {
    height: auto;
    text-decoration: none;
    display: inline-block;
    padding: 12px;
    background: #50966f;
    color: white;
    text-transform: uppercase;
    transition: 0.3s ease-in;
    border: none;
    width: 80%;
    text-align: center;
    font-weight: bold;
    &:hover {
      background: #2f63366b;
      transform: scale(0.98);
      // box-shadow: 0px 0px 5px #99ffdd;
    }
  }
}
</style>
