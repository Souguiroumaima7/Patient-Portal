<template>
    <div>
       <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <h2>Services</h2>
          <p></p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-heartbeat"></i></div>
              <h4><a href="">Preventive services</a></h4>
              <p>Many primary care doctors provide health promotion education to help prevent illnesses or diseases.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-pills"></i></div>
              <h4><a href="">Proper disease diagnosis</a></h4>
              <p>Primary care doctors can do physical exams or run lab tests to diagnose diseases or other illnesses.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-hospital-user"></i></div>
              <h4><a href="">Ongoing care for common illnesses</a></h4>
              <p>Primary care doctors can continue to see a patient to treat their illnesses 
                and diseases once they are diagnosed.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-dna"></i></div>
              <h4><a href="">Caring for chronic conditions like diabetes and arthritis</a></h4>
              <p>Many primary care physicians work with other specialists when it comes to 
                more severe conditions such as cancer or heart disease. However, the specialist will keep 
                the primary care doctor updated so that they can continue to monitor their patient's condition.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-wheelchair"></i></div>
              <h4><a href="">Annual checkups</a></h4>
              <p>A primary care doctor can complete yearly checkups, which are important, especially as we get older.
                 They are also familiar with their patients' medical histories
                 and will know what they are at a higher risk for.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-notes-medical"></i></div>
              <h4><a href="">Screening for common age-related conditions</a></h4>
              <p>A primary care physician can provide health screenings for common age-related conditions 
                such as high blood pressure,
                diabetes, cancer or osteoporosis.</p>
            </div>
          </div>

        </div>

      </div>
     </section>
    </div>
</template>
<script>
export default {
  name:"ServicesCompoment"  
}
</script>
<style>
  section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f1f7fd;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #2c4964;
}

.section-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #1977cc;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title p {
  margin-bottom: 0;
} 
.services .icon-box {
  text-align: center;
  border: 1px solid #d5e1ed;
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #1977cc;
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transform-style: preserve-3d;
}

.services .icon-box .icon i {
  color: #fff;
  font-size: 28px;
}

.services .icon-box .icon::before {
  position: absolute;
  content: "";
  left: -8px;
  top: -8px;
  height: 100%;
  width: 100%;
  background: #badaf7;
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-1px);
}

.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: #2c4964;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  background: #1977cc;
  border-color: #1977cc;
}

.services .icon-box:hover .icon {
  background: #fff;
}

.services .icon-box:hover .icon i {
  color: #1977cc;
}

.services .icon-box:hover .icon::before {
  background: #3291e6;
}

.services .icon-box:hover h4 a,
.services .icon-box:hover p {
  color: #fff;
}

</style>