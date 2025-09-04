<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <!-- Barre latérale pour les écrans de bureau -->
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <router-link to="/" class="flex items-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path d="M15 6v12c0 .5-.5 1-1 1H5s-2 1.5-2 0V7c0-1 1.5-3 3-3h7Z" />
              <path d="M18 17a3 3 0 0 0-3 3v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3Z" />
              <path d="M17 14c2.8 1 4.5 2 5 3v1h-5" />
            </svg>
            <span class="">Mon Application</span>
          </router-link>
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <router-link
              to="/register"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Créer un utilisateur
            </router-link>
            <!-- Ajoutez d'autres liens de navigation ici -->
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <!-- En-tête pour les écrans mobiles -->
      <header
        class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 md:hidden"
      >
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col w-full sm:max-w-xs">
            <nav class="grid gap-2 text-lg font-medium">
              <router-link
                to="/"
                class="flex items-center gap-2 text-lg font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <path d="M15 6v12c0 .5-.5 1-1 1H5s-2 1.5-2 0V7c0-1 1.5-3 3-3h7Z" />
                  <path d="M18 17a3 3 0 0 0-3 3v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3Z" />
                  <path d="M17 14c2.8 1 4.5 2 5 3v1h-5" />
                </svg>
                <span class="sr-only">Mon Application</span>
              </router-link>
              <router-link
                to="/register"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Créer un utilisateur
              </router-link>
              <!-- Ajoutez d'autres liens de navigation ici -->
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <!-- Espace pour le contenu de la page, géré par Vue Router -->
      <main class="flex flex-1 justify-center items-center gap-4 p-4 lg:gap-6 lg:p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
</script>
