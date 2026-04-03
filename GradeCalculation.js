let studentscore = [85, 92 , 78 , 96, 88]
let grade 
for (let i= 0 ; i< studentscore.length ; i++)
{
    switch(true){
        case (studentscore[i]>= 90):
            grade = 'A'
            break
        case (studentscore[i]>=80):
            grade = 'B'
            break;
        default:
            grade = 'C'
    }
    console.log("Student score : " + studentscore[i] + " Grade : " + grade)
}
