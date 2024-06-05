import {Request,Response} from 'express'
import CreateCourseService from './CreateCourseService'


export function createCourse(req:Request,res:Response){
    CreateCourseService.execute("Node",1,"Node")
}