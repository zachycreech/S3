default-ios-device = iPhone 14 Pro
default-ios-tablet = iPad Pro (12.9-inch) (6th generation)
default-android-device = s3-default

run-doctor:
	@npx @react-native-community/cli doctor

accept-all-android-licenses:
	@yes | sdkmanager --licenses

create-default-android-emulator:
	@avdmanager create avd -n "$(default-android-device)" -k "system-images;android-32;google_apis;arm64-v8a" --device "pixel" --tag "google_apis"

start-default-android-emulator:
	@emulator -avd "$(default-android-device)" -no-snapshot -wipe-data -no-boot-anim &

clean:
	@echo '🗡 🗡   Killing all the processes 🗡 🗡'
	@killall Simulator || true
	@xcrun simctl shutdown all || true
	@bundle exec pod cache clean --all

clean-deep:
	@make clean
	@echo '☠️ ☠️  Removing node_modules, Pods, and Podfile ☠️ ☠️'
	@rm -rf \
		node_modules \
		ios/Pods \
		ios/Podfile.lock

nuke-ruby-fragment:
	@echo '☠️ ☠️  Removing bundler vendor directory and reinstalling Gemfile dependencies ☠️ ☠️'
	@rm -rf vendor || true
	@bundle install

nuke-js-fragment:
	@echo '☠️ ☠️  Removing temp react and metro directories, running watchman-del-all, removing node_modules, cleaning yarn and npm cache ☠️ ☠️'
	@rm -rf $TMPDIR/react-* || true
	@rm -rf $TMPDIR/metro-* || true
	@rm -rf node_modules || true
	@yarn cache clean
	@yarn install

nuke-ios-fragment:
	@echo '☠️ ☠️  Removing iOS build directory, cleaning pod cache, removing local cocoapods directory ☠️ ☠️'
	@rm -rf ios/build || true
	@rm ios/Podfile.lock || true
	@rm -rf ios/Pods || true
	@bundle exec pod cache clean --all
	@rm -rf ~/.cocoapods || true
	@cd ios && bundle exec pod install

nuke-android-fragment:
	@echo '☠️ ☠️  Removing Android build directory and running Gradle Clean ☠️ ☠️'
	@rm -rf android/build
	@cd android && ./gradlew clean

nuke-all: nuke-ruby-fragment nuke-js-fragment nuke-ios-fragment

install:
	@yarn install

install-ios:
	@yarn install
	@cd ios && bundle exec pod install

install-run:
	@make install
	@make run
	
install-run-device:
	@make install
	@make run-android-device

lint:
	@npm run lint:fix
	
reinstall:
	@make clean-deep
	@make install

reinstall-run:
	@make clean-deep
	@make install
	@make run

profiles: 
	@bundle exec fastlane profiles

profiles-nuke: 
	@bundle exec fastlane profiles_nuke

start:
	@npx react-native start

stop:
	@-npx --quiet react-native-kill-packager

open-simulator:
	@open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app

run-ios: 
	
	@make clean
	@npx react-native run-ios --no-packager --simulator '$(default-ios-iPhone)' && make start open-simulator --jobs

run:

	@adb reverse tcp:8081 tcp:8081
	@npx react-native run-android --no-packager
	@make start

run-device:
	@make clean
	@npx react-native run-ios --no-packager --device && make start




