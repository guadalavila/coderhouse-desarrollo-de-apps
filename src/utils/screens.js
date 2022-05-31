import DashboardScreen from "../screens/DashboardScreen"
import DetailCategoryScreen from "../screens/DetailCategoryScreen"
import DetailProductScreen from "../screens/DetailProductScreen"


export const SCREENS = {
    Dashboard: {
        name:'DashboardScreen',
        component: DashboardScreen
    },
    Detail:{
        name:'DetailCategoryScreen',
        component: DetailCategoryScreen
    },
    DetailProduct: {
        name: 'DetailProductScreen',
        component: DetailProductScreen
    }
}