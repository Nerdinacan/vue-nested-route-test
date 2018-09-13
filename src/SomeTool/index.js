import subRoutes from './routes'

export default {
    install(Vue, { router }) {
        console.log("Installing Some Tool with router", router);
        router.addRoutes(subRoutes);
    }
}
