export class GlobalStoreSynchronizer {
    constructor() {
        this.stores = [];
    }

    registerStore(store) {
        this.stores.push(store);
    }

    dispatch(event) {
        this.stores.forEach((s) => s.dispatch(event));
    }
}