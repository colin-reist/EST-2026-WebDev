<script setup lang="ts">
const petals = [
  { cx: 180, cy: 160, rx: 9, ry: 4, rotate: 32, duration: 19, delay: -2 },
  { cx: 320, cy: 620, rx: 7, ry: 3, rotate: -20, duration: 23, delay: -11 },
  { cx: 620, cy: 110, rx: 6, ry: 3, rotate: 60, duration: 17, delay: -6 },
  { cx: 760, cy: 720, rx: 10, ry: 4, rotate: 14, duration: 25, delay: -15 },
  { cx: 1310, cy: 210, rx: 8, ry: 3.5, rotate: -40, duration: 21, delay: -4 },
  { cx: 1240, cy: 680, rx: 6, ry: 2.5, rotate: 75, duration: 18, delay: -9 },
  { cx: 90, cy: 480, rx: 5, ry: 2.5, rotate: 10, duration: 22, delay: -13 },
  { cx: 1390, cy: 460, rx: 7, ry: 3, rotate: 25, duration: 20, delay: -7 }
]
</script>

<template>
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 800"
    preserveAspectRatio="xMidYMid slice"
    class="absolute inset-0 size-full opacity-55 pointer-events-none"
  >
    <g class="fill-crimson">
      <g
        v-for="(p, i) in petals"
        :key="i"
        class="petal"
        :style="{ animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }"
      >
        <ellipse
          :cx="p.cx"
          :cy="p.cy"
          :rx="p.rx"
          :ry="p.ry"
          :transform="`rotate(${p.rotate} ${p.cx} ${p.cy})`"
        />
      </g>
    </g>
  </svg>
</template>
