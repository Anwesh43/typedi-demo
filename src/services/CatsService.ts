import { Service } from "typedi";
import { BaseService } from "./service";
import { Cat } from '../models/Cat'

@Service()
class CatsService implements BaseService<Cat> {

    cats : Array<Cat> = []

    getAll() : Array<Cat> {
        return this.cats 
    }

    save(cat : Cat) {
        this.cats.push(cat)
    }

    getById(id : number) : Cat {
        return this.cats.filter((cat : Cat) => cat.id === id)[0]
    }

    delete(id : number) {
        const cats : Array<Cat> = []
        for (let i = 0; i < this.cats.length; i++) {
            if (this.cats[i].id !== id) {
                cats.push(this.cats[i])
            }
        }
        this.cats = cats 
    }
}

export default CatsService