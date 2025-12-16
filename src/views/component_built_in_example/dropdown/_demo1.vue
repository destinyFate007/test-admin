<template>
  <FaDropdown
    :items="[
      [
        { label: '菜单1-1' },
        { label: '菜单1-2', disabled: true },
        { label: '菜单1-3' },
      ],
      [
        { label: '菜单2' },
      ],
    ]"
  >
    <FaButton>
      下拉菜单
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
