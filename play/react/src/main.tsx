import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import '@chapanda/style-preset/theme/antd'
createRoot(document.getElementById('root')!).render(
  <App />,
)
