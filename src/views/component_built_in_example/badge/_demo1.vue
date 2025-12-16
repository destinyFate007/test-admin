<template>
  <div class="flex gap-8">
    <FaBadge :value="true">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge :value="99">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="噢">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="9" variant="secondary">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="9" variant="destructive">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
  </div>
</template>
