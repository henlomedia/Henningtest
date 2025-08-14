<template>
  <div class="container-fluid py-4">
    <div class="row">
      <!-- Admin Messages Section -->
      <div class="col-lg-8">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-warning shadow-warning border-radius-lg pt-4 pb-3">
              <h6 class="text-white text-capitalize ps-3">Announcements</h6>
            </div>
          </div>
          <div class="card-body">
            <!-- New Announcement Form -->
            <div class="mb-4">
              <h6 class="mb-3">Post New Announcement</h6>
              <div class="row">
                <div class="col-12 mb-3">
                  <material-input
                    id="title"
                    type="text"
                    label="Announcement Title"
                    v-model:value="newAnnouncement.title"
                    variant="outline"
                  />
                </div>
                <div class="col-12 mb-3">
                  <material-textarea
                    id="message"
                    label="Message"
                    v-model:value="newAnnouncement.message"
                    :rows="4"
                    variant="outline"
                  />
                </div>
                <div class="col-12">
                  <material-button color="warning" @click="postAnnouncement">
                    <i class="material-icons me-1">campaign</i>
                    Post Announcement
                  </material-button>
                </div>
              </div>
            </div>

            <hr class="horizontal dark" />

            <!-- Announcements List -->
            <div class="mt-4">
              <h6 class="mb-3">Recent Announcements</h6>
              <div v-for="announcement in announcements" :key="announcement.id" class="card mb-3">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                      <h6 class="mb-1">{{ announcement.title }}</h6>
                      <p class="text-sm text-muted mb-2">{{ announcement.message }}</p>
                      <small class="text-xs text-secondary">
                        Posted by {{ announcement.author }} • {{ announcement.date }}
                      </small>
                    </div>
                    <div class="dropdown">
                      <a href="#" class="text-secondary" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Edit</a></li>
                        <li><a class="dropdown-item text-danger" href="#">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Community Board -->
      <div class="col-lg-4">
        <div class="card my-4">
          <div class="card-header pb-0">
            <h6>Community Board</h6>
            <p class="text-sm mb-0">Member posts and requests</p>
          </div>
          <div class="card-body">
            <!-- New Post Form -->
            <div class="mb-4">
              <material-textarea
                id="newPost"
                placeholder="Share something with the community..."
                v-model:value="newPost"
                :rows="3"
                variant="outline"
              />
              <material-button color="primary" size="sm" class="mt-2" @click="postMessage">
                <i class="material-icons me-1">send</i>
                Post
              </material-button>
            </div>

            <!-- Community Posts -->
            <div class="timeline timeline-one-side">
              <div v-for="post in communityPosts" :key="post.id" class="timeline-block mb-3">
                <span class="timeline-step p-3 bg-gradient-primary">
                  <i class="material-icons opacity-10">person</i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">{{ post.author }}</h6>
                  <p class="text-secondary font-weight-normal text-xs mt-1 mb-2">{{ post.date }}</p>
                  <p class="text-sm mb-0">{{ post.message }}</p>
                  <div class="mt-2">
                    <material-button size="sm" color="primary" class="me-2">
                      <i class="material-icons">thumb_up</i>
                    </material-button>
                    <material-button size="sm" color="info">
                      <i class="material-icons">reply</i>
                    </material-button>
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
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextarea from "@/components/MaterialTextarea.vue";

export default {
  name: "Messages",
  components: {
    MaterialButton,
    MaterialInput,
    MaterialTextarea,
  },
  data() {
    return {
      newAnnouncement: {
        title: "",
        message: ""
      },
      newPost: "",
      announcements: [
        {
          id: 1,
          title: "New Coffee Machine Installed",
          message: "We've installed a new premium coffee machine in the kitchen area. Enjoy free coffee throughout the day!",
          author: "Admin",
          date: "Today, 9:00 AM"
        },
        {
          id: 2,
          title: "WiFi Upgrade Completed",
          message: "Our internet infrastructure has been upgraded. You should experience faster and more reliable connections.",
          author: "Admin",
          date: "Yesterday, 2:00 PM"
        },
        {
          id: 3,
          title: "Monthly Networking Event",
          message: "Join us this Friday at 6 PM for our monthly networking event. Light refreshments will be provided.",
          author: "Admin",
          date: "2 days ago"
        }
      ],
      communityPosts: [
        {
          id: 1,
          author: "Sarah Johnson",
          message: "Looking for a graphic designer for a small project. Anyone available for freelance work?",
          date: "2 hours ago"
        },
        {
          id: 2,
          author: "Mike Chen",
          message: "Has anyone tried the new coffee machine? It's amazing! ☕",
          date: "4 hours ago"
        },
        {
          id: 3,
          author: "Emma Wilson",
          message: "Organizing a lunch group for the new Thai restaurant nearby. Who's interested?",
          date: "1 day ago"
        }
      ]
    };
  },
  methods: {
    postAnnouncement() {
      if (this.newAnnouncement.title && this.newAnnouncement.message) {
        const announcement = {
          id: Date.now(),
          title: this.newAnnouncement.title,
          message: this.newAnnouncement.message,
          author: "Admin",
          date: "Just now"
        };
        this.announcements.unshift(announcement);
        this.newAnnouncement = { title: "", message: "" };
      }
    },
    postMessage() {
      if (this.newPost.trim()) {
        const post = {
          id: Date.now(),
          author: "You",
          message: this.newPost,
          date: "Just now"
        };
        this.communityPosts.unshift(post);
        this.newPost = "";
      }
    }
  }
};
</script>