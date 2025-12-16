<template>
  <p>显示秒，且更新间隔为1秒</p>
  <FaTimeAgo :date="new Date()" :update-interval="1000" :show-second="true" />
</template>
