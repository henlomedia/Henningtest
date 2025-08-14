<template>
  <div class="container-fluid py-4">
    <div class="row">
      <!-- Quick Access -->
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
              <h6 class="text-white text-capitalize ps-3">Quick Access</h6>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 mb-3">
                <div class="card border text-center h-100">
                  <div class="card-body">
                    <i class="material-icons text-primary mb-2" style="font-size: 2.5rem;">wifi</i>
                    <h6 class="mb-2">WiFi Access</h6>
                    <p class="text-sm text-muted mb-3">Network: CoWorkSpace</p>
                    <p class="text-sm font-weight-bold">Password: Work2024!</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-3 mb-3">
                <div class="card border text-center h-100">
                  <div class="card-body">
                    <i class="material-icons text-info mb-2" style="font-size: 2.5rem;">print</i>
                    <h6 class="mb-2">Printer</h6>
                    <p class="text-sm text-muted mb-3">HP LaserJet Pro</p>
                    <material-button size="sm" color="info">Instructions</material-button>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card border text-center h-100">
                  <div class="card-body">
                    <i class="material-icons text-warning mb-2" style="font-size: 2.5rem;">schedule</i>
                    <h6 class="mb-2">Opening Hours</h6>
                    <p class="text-sm text-muted mb-1">Mon-Fri: 7:00 AM - 10:00 PM</p>
                    <p class="text-sm text-muted mb-3">Sat-Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card border text-center h-100">
                  <div class="card-body">
                    <i class="material-icons text-danger mb-2" style="font-size: 2.5rem;">key</i>
                    <h6 class="mb-2">Access Card</h6>
                    <p class="text-sm text-muted mb-3">Tap your card to enter</p>
                    <material-button size="sm" color="danger">Request Card</material-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- House Rules -->
      <div class="col-lg-6">
        <div class="card h-100">
          <div class="card-header pb-0">
            <h6>House Rules</h6>
            <p class="text-sm mb-0">Please follow these guidelines for everyone's comfort</p>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item border-0 px-0">
                <div class="d-flex align-items-start">
                  <i class="material-icons text-success me-3 mt-1">check_circle</i>
                  <div>
                    <h6 class="mb-1 text-sm">Keep noise levels low</h6>
                    <p class="text-xs text-muted mb-0">Respect others working in the space</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="d-flex align-items-start">
                  <i class="material-icons text-success me-3 mt-1">check_circle</i>
                  <div>
                    <h6 class="mb-1 text-sm">Clean up after yourself</h6>
                    <p class="text-xs text-muted mb-0">Leave common areas tidy for the next person</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="d-flex align-items-start">
                  <i class="material-icons text-success me-3 mt-1">check_circle</i>
                  <div>
                    <h6 class="mb-1 text-sm">Book meeting rooms in advance</h6>
                    <p class="text-xs text-muted mb-0">Use the booking system to reserve spaces</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="d-flex align-items-start">
                  <i class="material-icons text-warning me-3 mt-1">warning</i>
                  <div>
                    <h6 class="mb-1 text-sm">No food in meeting rooms</h6>
                    <p class="text-xs text-muted mb-0">Use the kitchen or lounge areas for meals</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="d-flex align-items-start">
                  <i class="material-icons text-danger me-3 mt-1">block</i>
                  <div>
                    <h6 class="mb-1 text-sm">No smoking anywhere</h6>
                    <p class="text-xs text-muted mb-0">Designated smoking area outside only</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Useful Resources -->
      <div class="col-lg-6">
        <div class="card h-100">
          <div class="card-header pb-0">
            <h6>Useful Resources</h6>
            <p class="text-sm mb-0">Links and tools for members</p>
          </div>
          <div class="card-body">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-primary me-3">cloud</i>
                <div>
                  <h6 class="mb-0 text-sm">Google Drive</h6>
                  <p class="text-xs text-muted mb-0">Shared documents and files</p>
                </div>
                <i class="material-icons ms-auto">arrow_forward_ios</i>
              </a>

              <a href="#" class="list-group-item list-group-item-action border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-info me-3">folder</i>
                <div>
                  <h6 class="mb-0 text-sm">Dropbox</h6>
                  <p class="text-xs text-muted mb-0">File sharing and collaboration</p>
                </div>
                <i class="material-icons ms-auto">arrow_forward_ios</i>
              </a>

              <a href="#" class="list-group-item list-group-item-action border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-success me-3">video_call</i>
                <div>
                  <h6 class="mb-0 text-sm">Zoom Rooms</h6>
                  <p class="text-xs text-muted mb-0">Video conferencing setup guide</p>
                </div>
                <i class="material-icons ms-auto">arrow_forward_ios</i>
              </a>

              <a href="#" class="list-group-item list-group-item-action border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-warning me-3">local_cafe</i>
                <div>
                  <h6 class="mb-0 text-sm">Coffee Machine Guide</h6>
                  <p class="text-xs text-muted mb-0">How to use the new coffee machine</p>
                </div>
                <i class="material-icons ms-auto">arrow_forward_ios</i>
              </a>

              <a href="#" class="list-group-item list-group-item-action border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-dark me-3">description</i>
                <div>
                  <h6 class="mb-0 text-sm">Member Handbook</h6>
                  <p class="text-xs text-muted mb-0">Complete guide and policies</p>
                </div>
                <i class="material-icons ms-auto">arrow_forward_ios</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialButton from "@/components/MaterialButton.vue";

export default {
  name: "Resources",
  components: {
    MaterialButton,
  },
};
</script>