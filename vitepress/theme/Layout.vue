<template>
  <DefaultLayout v-bind="$attrs">
    <template #doc-before>
      <div class="vp-page-title" v-if="pageTitle">
        <h1 class="vp-page-title-text">{{ pageTitle }}</h1>
        <p v-if="pageDate" class="vp-page-date">{{ pageDate }}</p>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'

const DefaultLayout = DefaultTheme.Layout
const data = useData()

const pageTitle = computed(() => {
  const fm = data.frontmatter?.value || {}
  return fm.title || data.title?.value || ''
})

const pageDate = computed(() => {
  const fm = data.frontmatter?.value || {}
  const d = fm.date || ''
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return d
  }
})
</script>

<style>
.vp-page-title { margin: 1rem 0 1.25rem; border-bottom: 1px solid #e6e6e6; padding-bottom: 0.75rem }
.vp-page-title-text { font-size: 1.75rem; margin: 0; color: #111827 }
.vp-page-date { color: #6b7280; margin: 0.25rem 0 0 }
</style>
