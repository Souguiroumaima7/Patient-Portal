<template>
  <div id="app">
   <HeaderCompoment/> 
   <HeroCompoment/>
   <WhyUsCompoment/>
   <AboutCompoment/>
   <ServicesCompoment/>
   <AppointmentCompoment/>
   <DepartementContainers/>
   <DoctorsContainers/>
   <FaqCompoment/>
   <TestimonialsCompoment/>
   <GalleryCompoment/>
   <ContactCompoment/>
   <FooterCompoment/>
  </div>
</template>

<script>
import AboutCompoment from './components/AboutCompoment.vue';
import AppointmentCompoment from './components/AppointmentCompoment.vue';
import ContactCompoment from './components/ContactCompoment.vue';
import FaqCompoment from './components/FaqCompoment.vue';
import FooterCompoment from './components/FooterCompoment.vue';
import GalleryCompoment from './components/GalleryCompoment.vue';
import HeaderCompoment from './components/HeaderCompoment.vue';
import HeroCompoment from './components/HeroCompoment.vue';
import ServicesCompoment from './components/ServicesCompoment.vue';
import TestimonialsCompoment from './components/TestimonialsCompoment.vue';
import WhyUsCompoment from './components/WhyUsCompoment.vue';
import DepartementContainers from './Containers/DepartementContainers.vue';
import DoctorsContainers from './Containers/DoctorsContainers.vue';


export default {
  name: 'App',
  components: {
    HeaderCompoment,
    HeroCompoment,
    WhyUsCompoment,
    AboutCompoment,
    ServicesCompoment,
    AppointmentCompoment,
    FaqCompoment,
    TestimonialsCompoment,
    GalleryCompoment,
    ContactCompoment,
    FooterCompoment,
    DoctorsContainers,
    DepartementContainers
}
}
</script>

<style>

</style>
