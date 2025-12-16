<script setup lang="ts">
defineOptions({
  name: 'FeatureExampleConfetti',
})
const confetti = useConfetti()
/**
 * 五彩纸屑特效
 */
function onConfetti() {
  confetti({
    zIndex: 3000,
    particleCount: 100, // 粒子数量
    spread: 70, // 扩散范围
  })
}

/**
 * 逼真效果
 */
function onRealistic() {
  const baseConfig = {
    zIndex: 3000,
    origin: { y: 0.7 }, // 发射原点（y轴70%位置）
  }

  // 批量生成不同参数的粒子效果
  const createRealisticParticles = (scale: number, customConfig: any) => {
    confetti({
      ...baseConfig,
      ...customConfig,
      particleCount: Math.floor(200 * scale), // 根据比例计算粒子数
    })
  }

  // 多批次粒子参数（模拟层次感/逼真度）
  createRealisticParticles(0.25, { spread: 26, startVelocity: 55 })
  createRealisticParticles(0.2, { spread: 60 })
  createRealisticParticles(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
  createRealisticParticles(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
  createRealisticParticles(0.1, { spread: 120, startVelocity: 45 })
}

/**
 * 烟花特效
 */
function onFireworks() {
  const endTime = Date.now() + 15000 // 特效持续15秒
  const baseConfig = {
    zIndex: 3000,
    startVelocity: 30, // 初始速度
    spread: 360, // 360度扩散
    ticks: 60, // 粒子生命周期
  }

  // 随机数工具函数
  const randomRange = (min: number, max: number) => Math.random() * (max - min) + min

  // 定时生成烟花粒子（左右两侧交替发射）
  const timer = setInterval(() => {
    const remainingTime = endTime - Date.now()
    if (remainingTime <= 0) {
      return clearInterval(timer)
    }

    // 粒子数随剩余时间递减
    const particleCount = 50 * (remainingTime / 15000)

    // 左侧烟花
    confetti({
      ...baseConfig,
      particleCount,
      origin: { x: randomRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
    // 右侧烟花
    confetti({
      ...baseConfig,
      particleCount,
      origin: { x: randomRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  }, 250) // 每250ms发射一次
}

/**
 * 星星特效
 */
function onStars() {
  const baseConfig = {
    zIndex: 3000,
    spread: 360,
    ticks: 50,
    gravity: 0, // 无重力
    decay: 0.94, // 衰减速度
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'], // 星星配色（黄色系）
  }

  // 生成星星粒子
  const createStarParticles = () => {
    // 星形粒子
    confetti({
      ...baseConfig,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
    })
    // 圆形粒子（点缀）
    confetti({
      ...baseConfig,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle'],
    })
  }

  // 分批次生成（模拟星星闪烁效果）
  setTimeout(createStarParticles, 0)
  setTimeout(createStarParticles, 100)
  setTimeout(createStarParticles, 200)
}

/**
 * 雪花特效
 */
function onSnowflakes() {
  const endTime = Date.now() + 15000 // 持续15秒
  let scale = 1 // 雪花缩放比例

  // 随机数工具函数
  const randomRange = (min: number, max: number) => Math.random() * (max - min) + min

  // 递归生成雪花粒子（requestAnimationFrame 保证流畅）
  const createSnowflakes = () => {
    const remainingTime = endTime - Date.now()
    const ticks = Math.max(200, 500 * (remainingTime / 15000)) // 生命周期随时间递增

    // 缩放比例逐渐减小（模拟雪花飘远）
    scale = Math.max(0.8, scale - 0.001)

    // 生成单朵雪花
    confetti({
      zIndex: 3000,
      particleCount: 1, // 单粒子（雪花）
      startVelocity: 0, // 初始静止
      ticks,
      origin: { x: Math.random(), y: Math.random() * scale - 0.2 },
      colors: ['#ffffff'], // 雪花白色
      shapes: ['circle'], // 圆形模拟雪花
      gravity: randomRange(0.4, 0.6), // 轻微重力（飘落）
      scalar: randomRange(0.4, 1), // 随机大小
      drift: randomRange(-0.4, 0.4), // 随机漂移
    })

    // 未结束则继续生成
    if (remainingTime > 0) {
      requestAnimationFrame(createSnowflakes)
    }
  }

  // 启动雪花特效
  createSnowflakes()
}

/**
 * 学院风特效
 */
function onAcademy() {
  const endTime = Date.now() + 15000 // 持续15秒
  const colors = ['#bb0000', '#ffffff'] // 学院风配色（红+白）

  // 生成学院风粒子（左右两侧对称发射）
  const createAcademyParticles = () => {
    // 左侧粒子（60度角）
    confetti({
      zIndex: 3000,
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 },
      colors,
    })
    // 右侧粒子（120度角）
    confetti({
      zIndex: 3000,
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 },
      colors,
    })

    // 未结束则继续
    if (Date.now() < endTime) {
      requestAnimationFrame(createAcademyParticles)
    }
  }

  // 启动学院风特效
  createAcademyParticles()
}

/**
 * Emoji特效
 */
function onEmoji() {
  const baseConfig = {
    zIndex: 3000,
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    // 自定义Emoji粒子（独角兽🦄）
    shapes: [confetti.shapeFromText({ text: '🦄', scalar: 2 })],
    scalar: 2,
  }

  // 生成Emoji粒子
  const createEmojiParticles = () => {
    // 主要Emoji粒子
    confetti({ ...baseConfig, particleCount: 30 })
    // 扁平Emoji粒子
    confetti({ ...baseConfig, particleCount: 5, flat: true })
    // 圆形点缀粒子
    confetti({ ...baseConfig, particleCount: 15, scalar: 1, shapes: ['circle'] })
  }

  // 分批次生成
  setTimeout(createEmojiParticles, 0)
  setTimeout(createEmojiParticles, 100)
  setTimeout(createEmojiParticles, 200)
}
</script>

<template>
  <!---->
  <div>
    <FaPageHeader title="五彩纸屑" description="在成功完成注册或付款等活动后使用的庆祝动画" />
    <FaPageMain main-class="flex gap-2">
      <FaButton @click="onConfetti">
        五彩纸屑
      </FaButton>
      <FaButton @click="onRealistic">
        逼真效果
      </FaButton>
      <FaButton @click="onFireworks">
        烟花
      </FaButton>
      <FaButton @click="onStars">
        星星
      </FaButton>
      <FaButton @click="onSnowflakes">
        雪花
      </FaButton>
      <FaButton @click="onAcademy">
        学院风
      </FaButton>
      <FaButton @click="onEmoji">
        Emoji
      </FaButton>
    </FaPageMain>
  </div>
</template>
