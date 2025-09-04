<template>
  <div class="flex justify-center items-center h-full">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Create User</CardTitle>
        <CardDescription>Enter user details to create a new user.</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit">
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Username</Label>
              <Input id="name" v-model="form.userName" placeholder="Enter username" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="email">Email</Label>
              <Input id="email" v-model="form.email" type="email" placeholder="Enter email" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Password</Label>
              <Input id="password" v-model="form.password" type="password" placeholder="Enter password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-end">
        <Button @click="handleSubmit">Create</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AuthAPI from '@/api/AuthApi'
import type { RegisterPayload } from '@/models/RegisterPayload'

const form = reactive<RegisterPayload>({
  userName: '',
  email: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    await AuthAPI.register(form)
  } catch (error) {
    console.error('Error creating user:', error)
  }
}
</script>
