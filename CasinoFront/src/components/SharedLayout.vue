<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <nav>
        <router-link to="/register" class="hover:text-gray-300">Create User</router-link>
      </nav>
    </header>
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>