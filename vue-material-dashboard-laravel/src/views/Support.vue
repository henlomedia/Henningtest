<template>
  <div class="container-fluid py-4">
    <div class="row">
      <!-- Contact Information -->
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 class="text-white text-capitalize ps-3">Contact Information</h6>
            </div>
          </div>
          <div class="card-body">
            <div class="list-group">
              <div class="list-group-item border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-primary me-3">person</i>
                <div>
                  <h6 class="mb-0 text-sm">Space Manager</h6>
                  <p class="text-xs text-muted mb-0">Anna Larsen</p>
                  <p class="text-xs text-primary mb-0">anna@coworkspace.com</p>
                </div>
              </div>

              <div class="list-group-item border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-success me-3">build</i>
                <div>
                  <h6 class="mb-0 text-sm">Maintenance</h6>
                  <p class="text-xs text-muted mb-0">Technical Support</p>
                  <p class="text-xs text-success mb-0">+47 123 45 678</p>
                </div>
              </div>

              <div class="list-group-item border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-warning me-3">emergency</i>
                <div>
                  <h6 class="mb-0 text-sm">Emergency</h6>
                  <p class="text-xs text-muted mb-0">24/7 Emergency Line</p>
                  <p class="text-xs text-warning mb-0">+47 911 00 000</p>
                </div>
              </div>

              <div class="list-group-item border-0 d-flex align-items-center p-3 mb-2 bg-gray-100 border-radius-lg">
                <i class="material-icons text-info me-3">schedule</i>
                <div>
                  <h6 class="mb-0 text-sm">Office Hours</h6>
                  <p class="text-xs text-muted mb-0">Monday - Friday</p>
                  <p class="text-xs text-info mb-0">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Support Request Form -->
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header pb-0">
            <h6>Submit Support Request</h6>
            <p class="text-sm mb-0">Report issues or request assistance</p>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitRequest">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <material-input
                    id="name"
                    type="text"
                    label="Your Name"
                    v-model:value="supportRequest.name"
                    variant="outline"
                    required
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <material-input
                    id="email"
                    type="email"
                    label="Email Address"
                    v-model:value="supportRequest.email"
                    variant="outline"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="input-group input-group-outline">
                    <label class="form-label">Request Type</label>
                    <select class="form-control" v-model="supportRequest.type" required>
                      <option value="">Select type...</option>
                      <option value="technical">Technical Issue</option>
                      <option value="maintenance">Maintenance Request</option>
                      <option value="booking">Booking Issue</option>
                      <option value="general">General Inquiry</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="input-group input-group-outline">
                    <label class="form-label">Priority</label>
                    <select class="form-control" v-model="supportRequest.priority">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 mb-3">
                  <material-input
                    id="subject"
                    type="text"
                    label="Subject"
                    v-model:value="supportRequest.subject"
                    variant="outline"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-12 mb-3">
                  <material-textarea
                    id="description"
                    label="Description"
                    placeholder="Please describe your issue or request in detail..."
                    v-model:value="supportRequest.description"
                    :rows="5"
                    variant="outline"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <material-button type="submit" color="primary" class="me-2">
                    <i class="material-icons me-1">send</i>
                    Submit Request
                  </material-button>
                  <material-button type="button" color="secondary" @click="resetForm">
                    <i class="material-icons me-1">refresh</i>
                    Reset
                  </material-button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Recent Requests -->
        <div class="card mt-4">
          <div class="card-header pb-0">
            <h6>Your Recent Requests</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Subject
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Type
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Status
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="request in recentRequests" :key="request.id">
                    <td>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ request.subject }}</h6>
                        <p class="text-xs text-secondary mb-0">{{ request.description.substring(0, 50) }}...</p>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-sm bg-gradient-info">{{ request.type }}</span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm" :class="getStatusClass(request.status)">
                        {{ request.status }}
                      </span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{ request.date }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextarea from "@/components/MaterialTextarea.vue";

export default {
  name: "Support",
  components: {
    MaterialButton,
    MaterialInput,
    MaterialTextarea,
  },
  data() {
    return {
      supportRequest: {
        name: "",
        email: "",
        type: "",
        priority: "medium",
        subject: "",
        description: ""
      },
      recentRequests: [
        {
          id: 1,
          subject: "Coffee machine not working",
          description: "The coffee machine in the kitchen area is not dispensing coffee properly",
          type: "Maintenance",
          status: "Resolved",
          date: "2 days ago"
        },
        {
          id: 2,
          subject: "WiFi connection issues",
          description: "Experiencing slow internet connection in Conference Room B",
          type: "Technical",
          status: "In Progress",
          date: "1 week ago"
        },
        {
          id: 3,
          subject: "Room booking system",
          description: "Unable to cancel my booking for tomorrow's meeting",
          type: "Booking",
          status: "Pending",
          date: "3 days ago"
        }
      ]
    };
  },
  methods: {
    submitRequest() {
      // Validate form
      if (!this.supportRequest.name || !this.supportRequest.email || 
          !this.supportRequest.type || !this.supportRequest.subject || 
          !this.supportRequest.description) {
        alert("Please fill in all required fields");
        return;
      }

      // Add to recent requests
      const newRequest = {
        id: Date.now(),
        subject: this.supportRequest.subject,
        description: this.supportRequest.description,
        type: this.supportRequest.type,
        status: "Pending",
        date: "Just now"
      };
      
      this.recentRequests.unshift(newRequest);
      
      // Reset form
      this.resetForm();
      
      // Show success message
      alert("Support request submitted successfully!");
    },
    
    resetForm() {
      this.supportRequest = {
        name: "",
        email: "",
        type: "",
        priority: "medium",
        subject: "",
        description: ""
      };
    },
    
    getStatusClass(status) {
      switch (status.toLowerCase()) {
        case 'resolved':
          return 'bg-gradient-success';
        case 'in progress':
          return 'bg-gradient-warning';
        case 'pending':
          return 'bg-gradient-secondary';
        default:
          return 'bg-gradient-info';
      }
    }
  }
};
</script>