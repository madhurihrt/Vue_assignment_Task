import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth'; 
import router from '../router'
export const useSignUpStore = defineStore({
  id: 'signup',
  state: () => ({}),
  actions: {
    async signUp({ email, password }) {
      try {
        const Auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
        const user = userCredential.user;
        localStorage.setItem('userData', user.email)
        router.push('/dashboard');
        alert("User created successfully", user);
      } catch (e) {
        alert(e);
      }
    },
  },
});
