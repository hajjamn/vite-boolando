import {reactive} from 'vue'
import db from './data/db.json'

export const store = reactive({
    products: db.products
})