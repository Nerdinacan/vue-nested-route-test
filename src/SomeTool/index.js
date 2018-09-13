import Wrapper from './Wrapper'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

function defineRoutes(routes) {
    routes.push({
        path: '/sometool',
        component: Wrapper,
        children: [
            {
                path: 'pageone',
                component: PageOne
            },
            {
                path: 'pagetwo',
                component: PageTwo
            }
        ]
    })
}


export default {

    install(Vue, { routes }) {
        console.log("Installing Some Tool with routes", routes);
        defineRoutes(routes);
    }

}
