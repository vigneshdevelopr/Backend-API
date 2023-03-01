db.students.insertMany (
    [
        {
         "name": "vignesh",
         "batch": "B32",
         "age": "24",
         "qualification": "M.SC",
         "experience": "2+",
         "id": "1"
        },
        {
         "name": "John",
         "batch": "B34",
         "age": "23",
         "qualification": "BE CSE",
         "experience": "0",
         "id": "2"
        },
        {
         "name": "Ramya",
         "batch": "B35",
         "age": "21",
         "qualification": "B.Com",
         "experience": "3",
         "id": "3"
        },
        {
         "name": "Kishore",
         "batch": "B42",
         "age": "30",
         "qualification": "M.Sc",
         "experience": "4",
         "id": "4"
        },
        {
         "name": "Prasanna",
         "batch": "B42",
         "age": "26",
         "qualification": "M.Sc",
         "experience": "1",
         "id": "5"
        },
        {
         "name": "Swetha",
         "batch": "B34",
         "age": "26",
         "qualification": "B.SC",
         "experience": "2+",
         "id": "6"
        },
        {
         "name": "Sandhiya",
         "batch": "B42",
         "age": "23",
         "qualification": "BE CSE",
         "experience": "2",
         "id": "7"
        },
        {
         "name": "Priya",
         "batch": "B34",
         "age": "38",
         "qualification": "B.com",
         "experience": "0",
         "id": "8"
        },
        {
         "name": "Gokul",
         "batch": "B22",
         "age": "39",
         "qualification": "12th",
         "experience": "2",
         "id": "9"
        },
        {
         "name": "Kumaran",
         "batch": "B42",
         "age": "23",
         "qualification": "M.Sc",
         "experience": "2+",
         "id": "10"
        }
       ]
)
db.students.insertMany (
    [
        {
         "name": "vignesh",
         "batch": "B32",
         "age": "24",
         "qualification": "M.SC",
         "experience": "2+",
         "id": "1"
        },
        {
         "name": "John",
         "batch": "B34",
         "age": "23",
         "qualification": "BE CSE",
         "experience": "0",
         "id": "2"
        },
        {
         "name": "Ramya",
         "batch": "B35",
         "age": "21",
         "qualification": "B.Com",
         "experience": "3",
         "id": "3"
        },
        {
         "name": "Kishore",
         "batch": "B42",
         "age": "30",
         "qualification": "M.Sc",
         "experience": "4",
         "id": "4"
        },
        {
         "name": "Prasanna",
         "batch": "B42",
         "age": "26",
         "qualification": "M.Sc",
         "experience": "1",
         "id": "5"
        },
        {
         "name": "Swetha",
         "batch": "B34",
         "age": "26",
         "qualification": "B.SC",
         "experience": "2+",
         "id": "6"
        },
        {
         "name": "Sandhiya",
         "batch": "B42",
         "age": "23",
         "qualification": "BE CSE",
         "experience": "2",
         "id": "7"
        },
        {
         "name": "Priya",
         "batch": "B34",
         "age": "38",
         "qualification": "B.com",
         "experience": "0",
         "id": "8"
        },
        {
         "name": "Gokul",
         "batch": "B22",
         "age": "39",
         "qualification": "12th",
         "experience": "2",
         "id": "9"
        },
        {
         "name": "Kumaran",
         "batch": "B42",
         "age": "23",
         "qualification": "M.Sc",
         "experience": "2+",
         "id": "10"
        }
       ]
)

db.student.deleteOne({ name: "vignesh"})