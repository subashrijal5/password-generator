<template>
  <section class="secure_password_area">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2">
          <div class="password_generator_area">
            <InnerHeader />
            <div class="row align-items-center pass_box_area">
              <div class="col-md-3">
                <h3 class="passbox_title">Your New Password</h3>
              </div>
              <div class="col-md-8">
                <div class="password_box">
                  <div class="pass_box_text">
                    <input
                      type="text"
                      placeholder="Your new password will appear here."
                      v-model="generatedPassword"
                      ref="password"
                    />
                  </div>
                  <div class="pass_box_img">
                    <img
                      src="../assets/img/icon/Refresh.svg"
                      @click="refresh"
                      alt="refresh"
                    />
                    <img
                      class="pass_copy"
                      src="../assets/img/icon/copy.png"
                      alt="copy-password"
                      @click="copyPassword"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-1" v-if="copied">
                <img
                  class="pass_copy rotate-center"
                  width="50"
                  src="../assets/img/check-right.png"
                  alt="check-right"
                />
              </div>
            </div>
            <div class="row align-items-center pass_remember">
              <div class="col-md-3">
                <h3 class="rem-pass">Remember your password</h3>
              </div>
              <div class="col-md-9">
                <h3>
                  Remember your password with the first character of each word
                  in this sententence
                </h3>
              </div>
            </div>

            <div class="row text-center customze_pass_title">
              <h2>Customize your password</h2>
            </div>
            <div class="row">
              <div class="col-md-12 customize_area">
                <div class="range-length">
                  <div class="password-length">
                    <label for="pass_length"><h3>Password Length</h3></label>
                    <div class="pass-range mobile_visible">
                      <div id="slider-range-mobile"></div>
                    </div>
                    <input
                      type="number"
                      id="pass_length"
                      name="passord-length"
                      v-model="criteria.passwordLength"
                      min="1"
                    />
                  </div>
                  <div class="pass-range desktop_visible">
                    <div id="slider-range-min"></div>
                  </div>
                  <div class="customize-icon-box">
                    <div class="icon">
                      <img src="../assets/img/icon/Satting.svg" alt="setting" />
                    </div>
                    <div class="icon-text">
                      <h3>Load My Setting Anywhere</h3>
                      <p class="gray-text">
                        URL to load my settings on other computers quickly
                      </p>
                    </div>
                  </div>
                </div>
                <div class="password-check-box">
                  <div class="customize-icon-checkbox">
                    <div class="form-check">
                      <div class="check-box">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="criteria.symbol"
                        />
                      </div>
                      <label class="form-check-label" for="inc-symb">
                        <h3>Include Symbols</h3>
                        <p class="gray-text">( e.g. @#$% )</p>
                      </label>
                    </div>
                  </div>

                  <div class="customize-icon-checkbox">
                    <div class="form-check">
                      <div class="check-box">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="criteria.numbers"
                          id="inc-numb"
                        />
                      </div>
                      <label class="form-check-label" for="inc-numb">
                        <h3>Include Numbers</h3>
                        <p class="gray-text">( e.g. 123456 )</p>
                      </label>
                    </div>
                  </div>

                  <div class="customize-icon-checkbox">
                    <div class="form-check">
                      <div class="check-box">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="criteria.lowercase"
                          id="ilc"
                        />
                      </div>
                      <label class="form-check-label" for="ilc">
                        <h3>Include Lowercase Characters</h3>
                        <p class="gray-text">( e.g. abcdefgh )</p>
                      </label>
                    </div>
                  </div>
                  <div class="customize-icon-checkbox">
                    <div class="form-check">
                      <div class="check-box">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="criteria.similarChar"
                        />
                      </div>
                      <label class="form-check-label" for="exc">
                        <h3>Exclude Similar Characters</h3>
                        <p class="gray-text">( e.g. i, l, 1, L, o, 0, O )</p>
                      </label>
                    </div>
                  </div>

                  <div class="customize-icon-checkbox">
                    <div class="form-check">
                      <div class="check-box">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="criteria.ambiguous"
                        />
                      </div>
                      <label class="form-check-label" for="eac">
                        <h3>Exclude Ambiguous Character</h3>
                        <p class="gray-text">
                          ( { } [ ] ( ) / \ ' //" ` ~ , ; : . > )
                        </p>
                      </label>
                    </div>
                  </div>

                  <div class="customize-icon-checkbox">
                    <div class="form-check">
                      <div class="check-box">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="criteria.uppercase"
                        />
                      </div>
                      <label class="form-check-label" for="iuc">
                        <h3>Include Uppercase Characters</h3>
                        <p class="gray-text">( e.g. ABCDEFGH )</p>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="customize-icon-box mobile_visible">
                  <div class="icon">
                    <img src="../assets/img/icon/Satting.svg" alt="setting" />
                  </div>
                  <div class="icon-text">
                    <h3>Load My Setting Anywhere</h3>
                    <p class="gray-text">
                      URL to load my settings on other computers quickly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="border_top"></div>
            <OtherTools />
            <div class="border_top mobile_visible"></div>
            <div class="border_top landscape_visible"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import InnerHeader from "./partials/InnerHeader.vue";
import OtherTools from "./partials/OtherTools.vue";
export default {
  name: "SecurePassword",
  components: {
    InnerHeader,
    OtherTools,
  },
  data() {
    return {
      generatedPassword: "",
      copied: false,
      criteria: {
        passwordLength: 16,
        symbol: true,
        ambiguous: false,
        numbers: true,
        uppercase: true,
        lowercase: true,
        similarChar: true,
      },
    };
  },
  created() {
    //   created hook
    this.refresh();
  },
  //   computed: {
  //     newPassword() {
  //       return this.generate();
  //     },
  //   },
  watch: {
    criteria: {
      handler() {
        this.generatedPassword = this.generate();
      },
      deep: true,
    },
  },
  methods: {
    // copy password on clipboard
    copyPassword() {
      navigator.clipboard.writeText(this.generatedPassword);
      this.copied = true;
      this.$toast.success("Password copied on clipboard");
      setTimeout(() => (this.copied = false), 4000);
    },

    // genertes the password if length is more then 0
    generate() {
      if (this.passwordLength < 1) {
        this.passwordLength = 16;
        this.$toast.error("Password length cannot be less then one");
        return;
      }
      return this.randomString(this.criteria.passwordLength);
    },

    // Refresh the password
    refresh() {
      this.generatedPassword = this.generate();
    },

    // genertes the random string based on criteria
    randomString(length) {
      var mask = "";
      if (this.criteria.lowercase) mask += "abcdefghijklmnopqrstuvwxyz";
      if (this.criteria.uppercase) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (this.criteria.numbers) mask += "0123456789";
      if (this.criteria.symbol) mask += "~`!@#$%^&*+-=";
      if (!this.criteria.ambiguous) mask += "~`()_{}[]:\";'<>?,./|\\";
      //   check if the given criteria has enough string to generate
      if (mask == "") {
        this.$toast.error(
          "Please select at least one criteria to generate password"
        );
        return;
      }
      var result = "";
      var str = "";
      for (var i = length; i > 0; --i) {
        str = mask[Math.floor(Math.random() * mask.length)];
        // to get only unique charecter
        if (this.criteria.similarChar) {
          if (result.includes(str) === false) {
            result += str;
          }
        } else {
          result += str;
        }
      }
      return result;
    },
  },
};
</script>
<style scoped>
.rotate-center {
  -webkit-animation: rotate-center 0.6s ease-in-out both;
  animation: rotate-center 0.6s ease-in-out both;
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>