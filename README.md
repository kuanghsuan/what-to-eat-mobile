# what-to-eat-mobile

A ML-based restaurant recommendation app written in React-Native with Expo.

# Setup

```
$ node -v                         // make sure your node version is greater than 10.13.0
$ npm install -g expo-cli.        // install the expo cli
```

Further more detail on how to set up an react-native app with [expo](https://docs.expo.io/tutorial/planning/?redirected)

```
$ git clone https://github.com/kuanghsuan/what-to-eat-mobile.git
$ cd what-to-eat-mobile

# install all required packages
$ yarn install
```

# Run on simulator

1.  Install the [XCODE](https://codewithchris.com/xcode-tutorial/). (Note: Only for developer whoe use <stronger>macOS</stronger> machine.)
2.  Install the [Android Studio](https://www.tutorialspoint.com/android/android_studio.htm).
3.  Open your xcode simulator or android simulator.
4.  Run `yarn start` in the root of project.
5.  Press `a` for Android simulator, or `i` for IOS simulator.
6.  Press `r` to restart bundler, or `shift+R` to restart and clear cache.
7.  If you want to run on real device, just download the 'Expo' in the App store, and scan the QR-code.

# Debug

1.  For <stronger>macOS</stronger>
    ```
    $ brew update && brew cask install react-native-debugger
    ```
2.  Open React Native Debugger you just download and press `command+T` to type the port `19001`.
3.  Press `command+D` on your simulator and click `Debug remote JS`, the React Native Debugger will connect to your app.
4.  Note: Must do step 2 before step 3, since the React Native Debugger using `19001` as the port is same as the default of `Debug remote JS` use on browser. If click the `Debug remote JS` first, the error will show you two debugger exiting on the same time.
5.  Further more detail on how to set up [react-native-debugger](https://github.com/jhen0409/react-native-debugger).
