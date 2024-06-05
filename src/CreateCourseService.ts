
interface Course {
    name:string;        /* atributo mandatório por default*/
    duration?:number;   /* '?' indica que o parâmetro é opcional */
    educator:string;    /*  */
}


class CreateCourseService{
    execute({duration = 8,educator,name}:Course) {  //valor de 'duration' setado para 8 como default
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();