package com.cptwo;

import android.app.Application;
import android.content.Intent;
import android.util.Log;

import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends Application implements ReactApplication {
    private ReactNativePushNotificationPackage mReactNativePushNotificationPackage;

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            mReactNativePushNotificationPackage = new ReactNativePushNotificationPackage();
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new MPChartPackage(),
                    mReactNativePushNotificationPackage
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    // Add onNewIntent
    public void onNewIntent(Intent intent) {
        if ( mReactNativePushNotificationPackage != null ) {
            mReactNativePushNotificationPackage.newIntent(intent);
        }
    }
}
