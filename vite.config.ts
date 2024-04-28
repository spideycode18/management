import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~compass-mixins': path.resolve(__dirname, 'node_modules/compass-mixins'),
      '~@mdi': path.resolve(__dirname, 'node_modules/@mdi'),
      '~nouislider': path.resolve(__dirname, 'node_modules/nouislider'),
      '~react-datepicker': path.resolve(__dirname, 'node_modules/react-datepicker'),
      '~react-bootstrap-typeahead': path.resolve(__dirname, 'node_modules/react-bootstrap-typeahead'),
    }
  },
})
