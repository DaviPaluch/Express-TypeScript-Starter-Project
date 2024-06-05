import {Request,Response} from 'express'
import CreateCourseService from './CreateCourseService'


export function createCourse(req:Request,res:Response){
    CreateCourseService.execute({
        name:"Node",
        //duration:1,
        educator:"AA"
    })
    CreateCourseService.execute({
        name:"React",
        duration:1,
        educator:"TT"
    })
}