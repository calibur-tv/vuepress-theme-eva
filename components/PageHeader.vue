<template>
  <header class="header">
    <div class="slimContent">
        <div class="navbar-header">
            <div class="profile-block text-center">
                <a id="avatar" :href="author.html_url" target="_blank">
                    <img class="img-circle" :src="author.avatar_url" width="200" height="200">
                </a>
                <h2 id="name" class="hidden-xs hidden-sm" v-text="author.login" />
                <h3 id="title" class="hidden-xs hidden-sm hidden-md" v-text="author.bio" />
                <small id="location" class="text-muted hidden-xs hidden-sm">
                    <i class="icon icon-map-marker"></i> {{ author.location }}
                </small>
            </div>
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <nav id="main-navbar" class="collapse navbar-collapse" role="navigation">
            <ul class="nav navbar-nav main-nav">
            </ul>
        </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import user from '@temp/author'

const author = computed(() => user)
</script>
