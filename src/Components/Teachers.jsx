import Teacher from "./Teacher"
import data from "./Teacher.json"

const Teachers = () => {

    console.log(data);

    return (<>{
        data.map((teacher) => (

            <Teacher
                key={teacher.id}
                name={teacher.name}
                role={teacher.role}
                dept={teacher.dept}
                image={teacher.image}
            />
        )
        )}</>)
}

export default Teachers;