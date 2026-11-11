import { Injectable, Service } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  createClient,
  SupabaseClient
} from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root'
})

export class SupabaseService {

  readonly client: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );

}
