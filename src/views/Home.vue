<template>
  <main>
    <v-carousel height="300" cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      <v-divider />
    </v-carousel>

    <v-container mt-5 grid-list-xl>
      <v-layout justify-center my-2>
        <v-flex xs5>
          <h1 class="text display-2 text-center">QUIENES SOMOS</h1>
          <v-divider class="blue mt-3"/>
        </v-flex>
      </v-layout>
      <v-layout my-2>
        <v-flex>
          <p class=" text-center pa-2">
            Radio Enlace o radioenlace punto a punto, es un sistema de
            conexiones entre dos o más terminales "antenas" que utilizan ondas
            electromagnéticas para transmitir datos. Una antena se encargará de
            enviar la información y la otra se encargará de recibirlos para así
            facilitar la información hasta en los lugares que sea más difícil
            por el lugar geográfico o los costes que supondría.
          </p>
        </v-flex>
      </v-layout>
      <h1 class="text display-1 text-center">NUESTROS SERVICIOS</h1>
      <v-divider class="blue my-2"/>
      <v-row class="my-5">
        <v-col cols="6" sm="4">
          <v-img
            class="imgn"
            height="235"
            src="https://i.pinimg.com/originals/01/0a/92/010a92a27861d3d33a512affc93e7909.png"
            @click="llamarFibra()"
          ></v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img
            class="imgn"
            height="235"
            src="https://www.semana.com/resizer/NE-7dx26PDmXXCFCDy-5iJvYKPQ=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/PC2JX2ARLFHHDBGIDWZAONXEKU.jpg"
            @click="llamarRadio()"
          >
            <div class="fill-height bottom-gradient"></div>
          </v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img
            class="imgn"
            height="235"
            src="https://assets.website-files.com/5e56abed3017dc50b3fe8a11/5e7cc2847fd7ce133e6421b6_TB_blog_09.png"
            @click="llamarproducto()"
          >
            <div class="fill-height repeating-gradient"></div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-card class="my-5">
      <v-parallax
        height="300"
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-left" cols="12 mt-15">
            <h1 class="text-h4 font-weight-thin mb-4 mx-15">
              SERVICIO TECNICO DE CALIDAD
            </h1>
            <h4 class="subheading ">
              Somos profesionales certificados, contamos con los productos de
              mejor calidad
            </h4>
          </v-col>
        </v-row>
        <v-row align="center" justify="center my-3">
          <v-btn>Solicitar</v-btn>
        </v-row>
      </v-parallax>
    </v-card>
  </main>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/imagenes home/img-1.jpg"),
        },
        {
          src: require("../assets/imagenes home/img-3.jpg"),
        },
        {
          src: require("../assets/imagenes home/img-4.jpg"),
        },
        
      ],
    };
  },
  methods: {
    llamarproducto() {
      this.$router.push("/productos");
    },
    llamarFibra() {
      this.$router.push("/fibra");
    },
    llamarRadio() {
      this.$router.push("/radio");
    },
  },
};
</script>
