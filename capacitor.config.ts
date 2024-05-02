import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'news.themurraystate.app',
  appName: 'The Murray State News',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
