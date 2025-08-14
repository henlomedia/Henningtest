<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
              <h6 class="text-white text-capitalize ps-3">Members Directory</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <!-- Search and Filter -->
            <div class="row px-4 mb-3">
              <div class="col-md-6">
                <material-input
                  id="search"
                  type="text"
                  label="Search members..."
                  v-model:value="searchTerm"
                  variant="outline"
                />
              </div>
              <div class="col-md-4">
                <div class="input-group input-group-outline">
                  <label class="form-label">Filter by Company</label>
                  <select class="form-control" v-model="selectedCompany">
                    <option value="">All Companies</option>
                    <option value="TechCorp">TechCorp</option>
                    <option value="DesignStudio">DesignStudio</option>
                    <option value="StartupLab">StartupLab</option>
                    <option value="Freelancer">Freelancer</option>
                  </select>
                </div>
              </div>
              <div class="col-md-2">
                <material-button color="primary" fullWidth>
                  <i class="material-icons me-1">search</i>
                  Search
                </material-button>
              </div>
            </div>

            <!-- Members Grid -->
            <div class="row px-4">
              <div class="col-xl-3 col-md-6 mb-4" v-for="member in filteredMembers" :key="member.id">
                <div class="card card-profile">
                  <div class="card-body pt-4">
                    <div class="text-center">
                      <material-avatar
                        :img="member.avatar"
                        :alt="member.name"
                        size="lg"
                        shadow="regular"
                        circular
                        class="mb-3"
                      />
                      <h5 class="mb-1">{{ member.name }}</h5>
                      <p class="text-sm text-muted mb-1">{{ member.title }}</p>
                      <p class="text-xs text-primary font-weight-bold mb-3">{{ member.company }}</p>
                      
                      <div class="d-flex justify-content-center mb-3">
                        <div class="text-center me-3">
                          <span class="text-xs text-muted">Email</span>
                          <p class="text-sm font-weight-bold mb-0">{{ member.email }}</p>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center">
                        <material-button size="sm" color="primary" class="me-2">
                          <i class="material-icons">email</i>
                        </material-button>
                        <material-button size="sm" color="info">
                          <i class="material-icons">phone</i>
                        </material-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Members Table View -->
            <div class="px-4 mt-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6>Members List</h6>
                <material-button color="success">
                  <i class="material-icons me-1">person_add</i>
                  Add Member
                </material-button>
              </div>
              
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Member
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Company
                      </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Member Since
                      </th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="member in members" :key="member.id">
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <material-avatar
                              :img="member.avatar"
                              :alt="member.name"
                              size="sm"
                              class="me-3"
                            />
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{{ member.name }}</h6>
                            <p class="text-xs text-secondary mb-0">{{ member.email }}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">{{ member.company }}</p>
                        <p class="text-xs text-secondary mb-0">{{ member.title }}</p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm" :class="member.status === 'Active' ? 'bg-gradient-success' : 'bg-gradient-secondary'">
                          {{ member.status }}
                        </span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">{{ member.memberSince }}</span>
                      </td>
                      <td class="align-middle">
                        <div class="dropdown">
                          <a href="#" class="text-secondary" data-bs-toggle="dropdown">
                            <i class="fa fa-ellipsis-v text-xs"></i>
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">View Profile</a></li>
                            <li><a class="dropdown-item" href="#">Send Message</a></li>
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                          </ul>
                        </div>
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
  </div>
</template>

<script>
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialAvatar from "@/components/MaterialAvatar.vue";

export default {
  name: "Members",
  components: {
    MaterialButton,
    MaterialInput,
    MaterialAvatar,
  },
  data() {
    return {
      searchTerm: "",
      selectedCompany: "",
      members: [
        {
          id: 1,
          name: "John Smith",
          email: "john@techcorp.com",
          company: "TechCorp",
          title: "Software Developer",
          avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
          status: "Active",
          memberSince: "Jan 2024"
        },
        {
          id: 2,
          name: "Sarah Johnson",
          email: "sarah@designstudio.com",
          company: "DesignStudio",
          title: "UX Designer",
          avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
          status: "Active",
          memberSince: "Feb 2024"
        },
        {
          id: 3,
          name: "Mike Chen",
          email: "mike@startuplab.com",
          company: "StartupLab",
          title: "Product Manager",
          avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
          status: "Active",
          memberSince: "Mar 2024"
        },
        {
          id: 4,
          name: "Emma Wilson",
          email: "emma@freelancer.com",
          company: "Freelancer",
          title: "Marketing Consultant",
          avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
          status: "Inactive",
          memberSince: "Dec 2023"
        }
      ]
    };
  },
  computed: {
    filteredMembers() {
      let filtered = this.members;
      
      if (this.searchTerm) {
        filtered = filtered.filter(member => 
          member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          member.company.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
      
      if (this.selectedCompany) {
        filtered = filtered.filter(member => member.company === this.selectedCompany);
      }
      
      return filtered;
    }
  }
};
</script>