<template>
  <div class="py-4 container-fluid">
    <!-- Welcome Section -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-body p-4">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h3 class="mb-2">Welcome to CoWork Space</h3>
                <p class="text-muted mb-0">Your collaborative workspace for productivity and innovation</p>
              </div>
              <div class="col-md-4 text-end">
                <i class="material-icons text-success" style="font-size: 3rem;">business</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <mini-statistics-card
              :title="{ text: 'Active Members', value: '42' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+3</span> new this month"
              :icon="{
                name: 'people',
                color: 'text-white',
                background: 'dark',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Bookings Today', value: '8' }"
              detail="<span class='text-info text-sm font-weight-bolder'>3</span> meeting rooms booked"
              :icon="{
                name: 'event',
                color: 'text-white',
                background: 'primary',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Available Desks', value: '12' }"
              detail="<span class='text-success text-sm font-weight-bolder'>60%</span> occupancy rate"
              :icon="{
                name: 'desk',
                color: 'text-white',
                background: 'success',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Events This Week', value: '3' }"
              detail="<span class='text-warning text-sm font-weight-bolder'>2</span> upcoming events"
              :icon="{
                name: 'celebration',
                color: 'text-white',
                background: 'info',
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 col-md-12 mb-md-0 mb-4">
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6>Important Announcements</h6>
                <p class="text-sm mb-0">Latest news and updates</p>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">New Coffee Machine Installed</h6>
                          <p class="text-xs text-secondary mb-0">Kitchen area - Free coffee for all members</p>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">New</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">Today</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">WiFi Upgrade Completed</h6>
                          <p class="text-xs text-secondary mb-0">Faster internet speeds now available</p>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-info">Update</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">Yesterday</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Monthly Networking Event</h6>
                          <p class="text-xs text-secondary mb-0">Join us this Friday at 6 PM in the main hall</p>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-warning">Event</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">This Friday</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <timeline-list
          class="h-100"
          title="Upcoming Events"
          description="<i class='material-icons text-sm text-success' aria-hidden='true'>event</i>
        <span class='font-weight-bold'>3</span> events this week"
        >
          <timeline-item
            :icon="{
              component: 'coffee',
              class: 'text-success',
            }"
            title="Morning Coffee & Networking"
            date-time="Tomorrow 9:00 AM"
          />
          <TimelineItem
            :icon="{
              component: 'school',
              class: 'text-info',
            }"
            title="Tech Workshop: AI Tools"
            date-time="Wednesday 2:00 PM"
          />
          <TimelineItem
            :icon="{
              component: 'celebration',
              class: 'text-warning',
            }"
            title="Monthly Networking Event"
            date-time="Friday 6:00 PM"
          />
        </timeline-list>
      </div>
    </div>
  </div>
</template>
<script>
import MiniStatisticsCard from "./components/MiniStatisticsCard.vue";
import TimelineList from "@/examples/Cards/TimelineList.vue";
import TimelineItem from "@/examples/Cards/TimelineItem.vue";

export default {
  name: "dashboard-default",
  components: {
    MiniStatisticsCard,
    TimelineList,
    TimelineItem,
  },
};
</script>
