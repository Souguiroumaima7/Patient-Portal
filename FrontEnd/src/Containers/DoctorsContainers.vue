<template>
    <div>
        <section id="doctors" class="doctors">
      <div class="container">

        <div class="section-title">
          <h2>Doctors</h2>
          <p>Doctors, also known as physicians, are licensed health professionals who maintain and 
            restore human health through the practice of medicine</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctors/doctors-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Medical Officer</span>
                <p>Chief Medical Officers have the primary responsibility of managing their health organization's 
                  doctors to provide safe, 
                  effective medical services to the public.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctors/doctors-2.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
                <p>Anesthesiologists evaluate, monitor, and supervise patient care before, 
                  during, and after surgery, delivering anesthesia, 
                  leading the Anesthesia Care Team, and ensuring optimal patient safety</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctors/doctors-3.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
                <p>Cardiologists diagnose, assess and treat patients with defects 
                  and diseases of the heart and the blood vessels,
                  which are known as the cardiovascular system.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctors/doctors-4.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
                <p>Neurosurgeons diagnose, assess and perform surgery on disorders 
                 affecting the central nervous system (brain and spinal cord) and
                 the peripheral nervous system which can involve any area of the body.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> 
    </div>
</template>
<script>
export default {
   name : "DoctorsContainers" 
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

/*--------------------------------------------------------------
# Doctors
--------------------------------------------------------------*/
.doctors {
  background: #fff;
}

.doctors .member {
  position: relative;
  box-shadow: 0px 2px 15px rgba(44, 73, 100, 0.08);
  padding: 30px;
  border-radius: 10px;
}

.doctors .member .pic {
  overflow: hidden;
  width: 180px;
  border-radius: 50%;
}

.doctors .member .pic img {
  transition: ease-in-out 0.3s;
}

.doctors .member:hover img {
  transform: scale(1.1);
}

.doctors .member .member-info {
  padding-left: 30px;
}

.doctors .member h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #2c4964;
}

.doctors .member span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}

.doctors .member span::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #b2c8dd;
  bottom: 0;
  left: 0;
}

.doctors .member p {
  margin: 10px 0 0 0;
  font-size: 14px;
}

.doctors .member .social {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.doctors .member .social a {
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: #a0bcd5;
}

.doctors .member .social a i {
  color: #fff;
  font-size: 16px;
  margin: 0 2px;
}

.doctors .member .social a:hover {
  background: #1977cc;
}

.doctors .member .social a+a {
  margin-left: 8px;
}
</style>