'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect('/login?error=Credenciales incorrectas')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name, // Guarda el nombre en raw_user_meta_data para el Trigger
      },
    },
  })

  if (error) {
    return redirect('/register?error=No se pudo crear la cuenta')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/login')
}