<template>
  <main class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <div class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">{{ data.name }}</h1>
          <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {{ data.about }}
          </p>
          <p class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a
                class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                :href="data.locationLink"
                target="_blank"
            >
              <GlobeIcon class="size-3 print:hidden"/>
              {{ data.location }}
            </a>
          </p>
          <div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            <Button
                class="size-8"
                variant="outline"
                size="icon"
                asChild
                v-if="data.contact.email"
            >
              <a :href="`mailto:${data.contact.email}`">
                <MailIcon class="size-4"/>
              </a>
            </Button>
            <Button
                class="size-8"
                variant="outline"
                size="icon"
                asChild
                v-if="data.contact.tel"
            >
              <a :href="`tel:${data.contact.tel}`">
                <PhoneIcon class="size-4"/>
              </a>
            </Button>
            <Button
                class="size-8"
                variant="outline"
                size="icon"
                asChild
                v-for="social in data.contact.social"
                :key="social.name"
            >
              <a :href="social.url">
                <component :is="social.icon" class="size-4"/>
              </a>
            </Button>
          </div>
          <div class="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
            <a :href="`mailto:${data.contact.email}`">
              <span class="underline">{{ data.contact.email }}</span>
            </a>
            <a :href="`tel:${data.contact.tel}`">
              <span class="underline">{{ data.contact.tel }}</span>
            </a>
          </div>
        </div>
        <Avatar class="size-28 rounded-xl">
          <AvatarImage :alt="data.name" :src="data.avatarUrl"/>
          <AvatarFallback>{{ data.name }}</AvatarFallback>
        </Avatar>
      </div>

      <!-- About -->
      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">About</h2>
        <p class="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
          {{ data.summary }}
        </p>
      </section>

      <!-- Work Experience -->
      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">Work Experience</h2>
        <div class="rounded-lg bg-card text-card-foreground" v-for="work in data.work" :key="work"> <!-- Card -->
          <div class="flex flex-col space-y-1.5"> <!-- CardHeader -->
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a class="hover:underline" :href="work.link">
                  {{ work.company }}
                </a>

                <span class="inline-flex gap-x-1">
                  <Badge
                      variant="secondary"
                      class="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                      :key="badge"
                      v-for="badge in work.badges"
                  >
                    {{ badge }}
                  </Badge>
                </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ work.year }}
              </div>
            </div>
            <h4 class="font-mono text-sm leading-none print:text-[12px]">
              {{ work.title }}
            </h4>
          </div>
          <div class="text-pretty font-mono text-muted-foreground mt-2 text-xs print:text-[11px]"><!-- CardContent -->
            {{ work.description }}
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">Education</h2>
        <div class="rounded-lg bg-card text-card-foreground" v-for="education in data.education" :key="education">
          <!-- Card -->
          <div class="flex flex-col space-y-1.5"> <!-- CardHeader -->
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="font-semibold leading-none">
                {{ education.school }}
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ education.year }}
              </div>
            </div>
            <div class="text-pretty font-mono text-sm text-muted-foreground mt-2 print:text-[12px]"><!-- CardContent -->
              {{ education.degree }}
            </div>
          </div>
        </div>
      </section>

      <!-- Skill -->
      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">Skills</h2>
        <div class="flex flex-wrap gap-1">
          <Badge class="print:text-[10px] print:shadow-none print:border-muted print:text-foreground" :key="skill"
                 v-for="skill in data.skills">
            {{ skill }}
          </Badge>
        </div>
      </section>

      <!-- Projects -->
      <section class="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
        <h2 class="text-xl font-bold">Projects</h2>
        <div class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2">
          <div
              class="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3"
              v-for="project in data.projects"
              :key="project"
          >
            <div class="flex flex-col space-y-1.5">
              <div class="space-y-1">
                <h3 class="font-semibold tracking-tight text-base">
                  <a :href="project.link.href"
                     target="_blank"
                     class="inline-flex items-center gap-1 hover:underline"
                     v-if="project.link"
                  >
                    {{ project.title }}
                  </a>
                  <span v-else>{{ project.title }}</span>
                </h3>

                <div class="hidden font-mono text-xs underline print:flex print:text-[10px]">
                  {{ project.link?.label }}
                </div>
                <p class="text-muted-foreground font-mono text-xs print:text-[10px]">
                  {{ project.description }}
                </p>
              </div>
            </div>
            <div class="text-pretty font-mono text-sm text-muted-foreground mb-auto flex">
              <div class="mt-2 flex flex-wrap gap-1">
                <Badge
                    variant="secondary"
                    class="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                    v-for="tag in project.techStack"
                    :key="tag"
                >
                  {{ tag }}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import {onBeforeMount} from "vue";
import {GlobeIcon, MailIcon, PhoneIcon} from "@/components/icons";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge/index.js";
import data from '@/data'

onBeforeMount(() => document.title = data.name);
</script>

<style scoped>
</style>
