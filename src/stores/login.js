import { defineStore } from 'pinia';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth,signOut  } from 'firebase/auth'; 
import router from '../router'

export const useSignInStore = defineStore({
  id: 'signin',
  state: () => ({ user: null,}),
  actions: {
    async signIn({ email, password }) {
      try {
        const Auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(Auth, email, password);
        const user = userCredential.user;
        localStorage.setItem('userData', user.email)
        router.push('/dashboard');
        alert("User log in successfully:", user);
      } catch (e) {
        alert(e);
      }
    },
      async signOutUser() {
        const Auth = getAuth();
        try{
        await signOut(Auth);
        router.push('/');
        alert("User signout in successfully" ,Auth);
        }
        catch(e){
            alert(e)
        }
      },
  },
});
