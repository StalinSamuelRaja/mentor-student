import { client } from "../db.js";

export function Getstudent() {
    return client.db("guvi").collection("student").find({}).toArray();
}

export function addstudent(data){
    return client.db("guvi").collection("student").insertOne(data)
}



export function getStudentsWithoutMentor() {
    return client.db("guvi").collection("student").find({ currentmentor: null }).toArray();
}

export function getPreviousMentorForStudent(name) {
    return client.db("guvi").collection("student").findOne({ student: name });
}

export function assignMentorToStudent(studname, mentor) {
    return client.db("guvi").collection("student").updateOne(
        { student: studname },
        { $set: { currentmentor: mentor } }
    );
}
