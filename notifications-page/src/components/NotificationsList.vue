<template>
  <div class="notifications">
    <div class="notifications__header">
      <h1>Notifications</h1>
      <div class="unread">{{ countUnread }}</div>
      <div class="mark-as-read">Mark all as read</div>
    </div>
    <div class="notifications__list">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="notification"
        :class="{ unread: notification.unread }"
      >
        <img
          :src="`images/avatars/${notification.avatar}`"
          :alt="notification.name"
        />
        <div>
          <div class="text">
            <span v-text="notification.name" class="name"> </span>
            <span v-html="notification.content"></span>
            <span v-if="notification.unread" class="dot">•</span>
          </div>
          <span class="time" v-text="notification.time"></span>
          <div v-if="notification.message" class="message">
            {{ notification.message }}
          </div>
        </div>
        <img
          v-if="notification.image"
          :src="notification.image"
          :alt="notification.id"
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { notifications } from "../data/notifications";

export default {
  name: "NotificationsList",

  data() {
    return {
      notifications,
    };
  },

  computed: {
    countUnread() {
      return 3;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.notifications {
  max-width: 580px;
  margin: auto;
  border-radius: 20px;
  background: white;
  padding: 25px;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    h1 {
      display: inline-block;
      margin: 0;
      font-size: 1.6rem;
    }

    .unread {
      background: var(--color-blue);
      color: white;
      display: inline-block;
      padding: 4px 8px;
      border-radius: 5px;
      margin-left: 6px;
    }

    .mark-as-read {
      margin-left: auto;
      color: var(--color-dark-grayish-blue);
      font-size: 14px;
    }
  }

  &__list {
    .notification {
      margin-bottom: 0.5rem;
      border-radius: 5px;
      padding: 1rem;
      font-size: 14px;
      display: flex;
      color: var(--color-dark-grayish-blue);

      img {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
      }

      .name {
        color: var(--color-very-dark-blue);
        font-weight: 700;
        margin-right: 5px;
      }

      .time {
        color: var(--color-grayish-blue);
      }

      .dot {
        color: var(--color-red);
        margin-left: 5px;
      }

      .image {
        margin-left: auto;
        width: 40px;
        height: 40px;
      }

      .message {
        color: var(--color-dark-grayish-blue);
        padding: 0.8rem;
        border: 1px solid var(--color-light-grayish-blue-1);
        border-radius: 5px;
        margin-top: 0.5rem;
      }

      &.unread {
        background: var(--color-background);
      }
    }
  }
}
</style>
