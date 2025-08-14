<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 class="text-white text-capitalize ps-3">Room Booking</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="row px-4">
              <div class="col-md-6">
                <h6 class="mb-3">Meeting Rooms</h6>
                <div class="list-group">
                  <div class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                    <div class="d-flex flex-column w-100">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <h6 class="mb-0 text-sm">Conference Room A</h6>
                        <span class="badge bg-gradient-success">Available</span>
                      </div>
                      <p class="text-xs text-secondary mb-2">Capacity: 8 people • Projector • Whiteboard</p>
                      <div class="d-flex justify-content-between">
                        <small class="text-muted">Next: 2:00 PM - 3:00 PM</small>
                        <material-button size="sm" color="primary">Book Now</material-button>
                      </div>
                    </div>
                  </div>
                  
                  <div class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                    <div class="d-flex flex-column w-100">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <h6 class="mb-0 text-sm">Conference Room B</h6>
                        <span class="badge bg-gradient-danger">Occupied</span>
                      </div>
                      <p class="text-xs text-secondary mb-2">Capacity: 12 people • TV Screen • Video Conference</p>
                      <div class="d-flex justify-content-between">
                        <small class="text-muted">Available: 4:00 PM</small>
                        <material-button size="sm" color="secondary" disabled>Occupied</material-button>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                    <div class="d-flex flex-column w-100">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <h6 class="mb-0 text-sm">Phone Booth 1</h6>
                        <span class="badge bg-gradient-success">Available</span>
                      </div>
                      <p class="text-xs text-secondary mb-2">Capacity: 1 person • Soundproof • Phone calls</p>
                      <div class="d-flex justify-content-between">
                        <small class="text-muted">Available now</small>
                        <material-button size="sm" color="primary">Book Now</material-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <h6 class="mb-3">Your Bookings</h6>
                <div class="card">
                  <div class="card-body">
                    <div class="timeline timeline-one-side">
                      <div class="timeline-block mb-3">
                        <span class="timeline-step p-3 bg-gradient-success">
                          <i class="material-icons opacity-10">event</i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">Conference Room A</h6>
                          <p class="text-secondary font-weight-normal text-xs mt-1 mb-0">Today 2:00 PM - 3:00 PM</p>
                          <div class="mt-2">
                            <material-button size="sm" color="warning" class="me-2">Edit</material-button>
                            <material-button size="sm" color="danger">Cancel</material-button>
                          </div>
                        </div>
                      </div>

                      <div class="timeline-block mb-3">
                        <span class="timeline-step p-3 bg-gradient-info">
                          <i class="material-icons opacity-10">event</i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">Phone Booth 2</h6>
                          <p class="text-secondary font-weight-normal text-xs mt-1 mb-0">Tomorrow 10:00 AM - 10:30 AM</p>
                          <div class="mt-2">
                            <material-button size="sm" color="warning" class="me-2">Edit</material-button>
                            <material-button size="sm" color="danger">Cancel</material-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Common Areas Section -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <h6>Common Areas</h6>
            <p class="text-sm mb-0">Book shared spaces for events and meetings</p>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="card border">
                  <div class="card-body text-center">
                    <i class="material-icons text-primary mb-2" style="font-size: 2rem;">kitchen</i>
                    <h6 class="mb-2">Kitchen Area</h6>
                    <p class="text-xs text-secondary mb-3">Perfect for lunch meetings and casual discussions</p>
                    <material-button size="sm" color="primary" fullWidth>Reserve</material-button>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 mb-3">
                <div class="card border">
                  <div class="card-body text-center">
                    <i class="material-icons text-success mb-2" style="font-size: 2rem;">event_seat</i>
                    <h6 class="mb-2">Lounge Area</h6>
                    <p class="text-xs text-secondary mb-3">Comfortable seating for informal meetings</p>
                    <material-button size="sm" color="success" fullWidth>Reserve</material-button>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3">
                <div class="card border">
                  <div class="card-body text-center">
                    <i class="material-icons text-info mb-2" style="font-size: 2rem;">celebration</i>
                    <h6 class="mb-2">Event Hall</h6>
                    <p class="text-xs text-secondary mb-3">Large space for presentations and events</p>
                    <material-button size="sm" color="info" fullWidth>Reserve</material-button>
                  </div>
                </div>
              </div>
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
  name: "Booking",
  components: {
    MaterialButton,
  },
};
</script>