<template>
  <!-- Mobile Header -->
  <section class="mobile_header">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="mobile_menu">
            <div class="mobile_logo">
              <img src="../../assets/img/Logo.png" alt="Logo" />
              <h1>Secure Password Generator</h1>
            </div>
            <div class="dropdown menubar">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../assets/img/icon/3line_manu.svg"
                  alt="mobile_menu_bar"
                />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="language">
                      <img
                        src="../../assets/img/icon/language_english_flag.svg"
                        alt="Language"
                      />
                      <p>English</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Desktop version -->
  <section class="header_section"></section>
</template>
<script>
export default {
  name: "Header",
  props: {},
};
</script>