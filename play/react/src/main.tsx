import { createRoot } from 'react-dom/client'
import { ChapandaProvider } from '@chapanda/component-pro'
import App from './App.tsx'
import './index.scss'
import '@chapanda/style-preset/theme/antd'
createRoot(document.getElementById('root')!).render(
  <ChapandaProvider>
    <App />
  </ChapandaProvider>,
)
