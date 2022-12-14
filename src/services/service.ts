export interface BaseService<T> {
    getAll :  () => Array<T>,
    save : (t : T) => void, 
    getById : (id : number) => T, 
    delete : (id : number) => void 
}
