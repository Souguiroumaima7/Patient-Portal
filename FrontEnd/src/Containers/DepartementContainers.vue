<template>
    <div>
        <section id="departments" class="departments">
      <div class="container">

        <div class="section-title">
          <h2>Departments</h2>
          <p>There are several departments are found in hospitals namely Outpatient department (OPD) ... </p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">Cardiology</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" tabindex="-1" role="tab">Neurology</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" tabindex="-1" role="tab">Hepatology</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4" aria-selected="false" tabindex="-1" role="tab">Pediatrics</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-5" aria-selected="false" tabindex="-1" role="tab">Eye Care</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1" role="tabpanel">
                <div class="row gy-4">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Cardiology</h3>
                    <p class="fst-italic">it is a branch of medicine that deals with disorders of the heart and
                       the cardiovascular system. The field includes medical diagnosis and treatment
                       of congenital heart defects, coronary artery disease, heart failure,
                       valvular heart disease and electrophysiology.</p>
                    <p>it is a branch of medicine that deals with disorders of the heart and the cardiovascular system.
                       The field includes medical diagnosis and treatment of congenital heart defects, 
                       coronary artery disease,
                       heart failure, valvular heart disease and electrophysiology.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-1.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-2" role="tabpanel">
                <div class="row gy-4">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Neurology</h3>
                    <p class="fst-italic">Neurology is the branch of medicine concerned with the study and treatment of
                       disorders of the nervous system.</p>
                    <p>Neurology is the branch of medicine concerned with the study and treatment of disorders 
                      of the nervous system. The nervous system is a complex, sophisticated system that regulates 
                      and coordinates body activities.
                      It has two major divisions: Central nervous system: the brain and spinal cord</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-2.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-3" role="tabpanel">
                <div class="row gy-4">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Hepatology</h3>
                    <p class="fst-italic">The responsibilities of a hepatologist 
                      include consulting on liver problems, conducting follow-up care of liver transplant patients, 
                      and performing various surgical procedures.</p>
                    <p> To be successful as a hepatologist, you should exhibit compassion for patients,
                    provide exceptional patient care, and be a patient person.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-3.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4" role="tabpanel">
                <div class="row gy-4">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Pediatrics</h3>
                    <p class="fst-italic">A pediatrician provides general medical care,
                       monitors growth and development, and tracks and administers immunizations for infants,
                       children, adolescents, and young adults</p>
                    <p>The pediatrician diagnoses and treats illnesses, medical conditions,
                    and injuries, and eases the lives of children with chronic conditions.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-4.jpg" alt="" class="img-fluid">
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-5" role="tabpanel">
                <div class="row gy-4">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Eye Care</h3>
                    <p class="fst-italic">Diagnose and treat ocular disease.
                       Prescribe, fit, and adjust eyeglasses, contact lenses, 
                       and other vision aids. Recommend appropriate patient follow-up and care options. 
                      Answer questions and provide advice to patients regarding vision and optical issues.</p>
                    <p>
                      Ophthalmologists are doctors who care for patients with eye conditions.
                      They diagnose, treat and prevent disorders of the eyes and visual system,
                       using medical and surgical skills.
                    </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-5.jpg" alt="" class="img-fluid">
                  </div>
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
    name :"DepartmentContainers" ,


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


.departments {
  overflow: hidden;
}

.departments .nav-tabs {
  border: 0;
}

.departments .nav-link {
  border: 0;
  padding: 12px 15px 12px 0;
  transition: 0.3s;
  color: #2c4964;
  border-radius: 0;
  border-right: 2px solid #ebf1f6;
  font-weight: 600;
  font-size: 15px;
}

.departments .nav-link:hover {
  color: #1977cc;
}

.departments .nav-link.active {
  color: #1977cc;
  border-color: #1977cc;
}

.departments .tab-pane.active {
  -webkit-animation: fadeIn 0.5s ease-out;
  animation: fadeIn 0.5s ease-out;
}

.departments .details h3 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2c4964;
}

.departments .details p {
  color: #777777;
}

.departments .details p:last-child {
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .departments .nav-link {
    border: 0;
    padding: 15px;
  }

  .departments .nav-link.active {
    color: #fff;
    background: #1977cc;
  }
}

</style>
