import { openBrowserAsync } from 'expo-web-browser';

// prefer Chrome Tabs on Android
export const openTabAsync = async (url: string) => {
  return openBrowserAsync(url, {
    browserPackage: 'com.android.chrome',
  });
};
