function gradingStudents(grades) {
    const new_grade = grades.map(
        (item)=>{
            let next_multiple = Math.ceil(item/5)*5
            if((next_multiple-item<3) && item >= 38){return next_multiple }
            else{return item}
            
        }
    )
    return new_grade

}
