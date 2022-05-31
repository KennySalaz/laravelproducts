import axios from "axios";

export default {
    index({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.get('/api/products', payload)
                .then(res => {
                    commit('SET_PRODUCTS', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    store({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/api/products', payload)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    update({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.put('/api/products/' + payload.id, payload)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    delete({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios.delete('/api/products/' + id)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    }
}