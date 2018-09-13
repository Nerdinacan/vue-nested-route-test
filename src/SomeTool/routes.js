import Wrapper from './Wrapper'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

export default [
    {
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
    }
]
