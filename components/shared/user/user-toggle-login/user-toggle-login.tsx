
"use client"

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import styles from "./user-toggle-login.module.css";

export default function UserToggleLogin() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const supabase = createClient();

        supabase.auth.getUser().then(({ data }) => setUser(data.user));

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    return(
        <div>
        {
            user ? (<Link href="/profile" className={styles.headerButtons}>{user.email}</Link>) 
            : <Link href="/login" className={styles.headerButtons}>LOGIN</Link>
        }
        </div>
   )
}