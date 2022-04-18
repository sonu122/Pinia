import { defineStore } from 'pinia'

export const useCounterStore = defineStore('storeId', {
    // arrow function recommended for full type inference
    state: () =>
    {
        return {
            // all these properties will have their type inferred automatically
            counter: 25,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
})
