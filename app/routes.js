/**
 * Created by ijoy on 16-6-28.
 */
export default{
    App: {
        initialRoute: true,
        title: 'Main',
        component: require('./scenes/App').default,
        actionsArray:[{icon: 'album',onPressRoute:'App'},{icon: 'tab',badge: { animate: true },onPressRoute:'Device'},{icon: 'person',onPressRoute:'People'},{icon: 'search',onPressRoute:'Search'}]
    },
    Device: {
        title: 'Main',
        component: require('./scenes/Device').default,
        actionsArray:[{icon: 'album',onPressRoute:'App'},{icon: 'tab',badge: { animate: true },onPressRoute:'Device'},{icon: 'person',onPressRoute:'People'},{icon: 'search',onPressRoute:'Search'}]
    },
    People: {
        title: 'Main',
        component: require('./scenes/People').default,
        actionsArray:[{icon: 'album',onPressRoute:'App'},{icon: 'tab',badge: { animate: true },onPressRoute:'Device'},{icon: 'person',onPressRoute:'People'},{icon: 'search',onPressRoute:'Search'}]
    },
    Search: {
        title: 'Main',
        component: require('./scenes/Search').default,
        actionsArray:[{icon: 'album',onPressRoute:'App'},{icon: 'tab',badge: { animate: true },onPressRoute:'Device'},{icon: 'person',onPressRoute:'People'},{icon: 'search',onPressRoute:'Search'}]
    },
    Task: {
        title: 'Task',
        component: require('./scenes/Task').default
    },
    Notify: {
        title: 'Notify',
        component: require('./scenes/Notify').default
    },
    Setting: {
        title: 'Setting',
        component: require('./scenes/Setting').default
    },

    Login: {
        title: 'Login',
        component: require('./scenes/Login').default
    },
    Register: {
        title: 'Register',
        component: require('./scenes/Register').default
    }
}