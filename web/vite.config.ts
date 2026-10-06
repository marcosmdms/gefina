import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins:[react()],
    // configura proxy de requisição do servidor
    server:{
        proxy: {
        "/api":"http://localhost:3000"
        }
    }

});