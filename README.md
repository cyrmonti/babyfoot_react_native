#Babyfoot React Native

##How to run the project on macOS ? 
- `npm install` in order to install the dependencies
- `react-native run-ios` will launch the app on the IOS simulator (please refer to the react-native docs below if you want to run on Android)

##Usage
- [Setting up React Native on your Desktop](https://facebook.github.io/react-native/docs/getting-started.html)

###Features
- Login (Email : root@babyfoot.com | Pwd : root123)
- Create User (Email, Pwd, Pseudo, Firstname, Name, Department)
- Display list of babyfoots
- Create a babyfoot (Name)
- Delete babyfoot (Click on the element)
- Display User Info
- Logout
- Create GUID
- Create token when login
- Local storage (GUID, token, User info)
- Redirect to home page if user already logged (tolen exists)

##Infos
As no back-end has been implemented for the app, created users won't be have in a database.
Once the user has logged out, you have to login (root@babyfoot.com:root123) or create a 
new user.

##Tools
-Redux
-Router (react-native-router-flux)
