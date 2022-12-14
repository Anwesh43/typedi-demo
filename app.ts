import "reflect-metadata"
import {Container} from 'typedi'
import { BaseService } from "./src/services/service"
import CatsService from "./src/services/CatsService"
import { Cat } from "./src/models/Cat"

const service : BaseService<Cat> = Container.get(CatsService)



const setTimeoutPromise : (delay : number) => Promise<any> = (delay : number) => new Promise((res : (t : unknown) => void, reject : (reason? : any) => void) => {
    if (delay > 2000) {
        reject("should not be more than 2 seconds")
    }
    setTimeout(res, delay)
    
})

async function demo() {
    try {
        service.save({id : 1, name : "Tom", age: 3})
        service.save({id : 2, name : "Bob", age: 2})
        service.save({id : 3, name : "Gretch", age: 1})
        service.save({id : 4, name : "Elias", age: 5})
        await setTimeoutPromise(1000)
        console.log("all", service.getAll())
        await setTimeoutPromise(1000)
        console.log("2", service.getById(2))
        await setTimeoutPromise(1000)
        console.log("3", service.getById(3))
        await setTimeoutPromise(1000)
        service.delete(2)
        console.log("Deleted 2")
        await setTimeoutPromise(1000)
        console.log("all", service.getAll())
    } catch(err : any) {
        console.log(err)
    }
}

demo()