const fs = require('fs')
const addData = (id,name,subject,grade,comment)=>{
    const data = loadData()
    const duplicateid = data.filter((data)=>{
        return data.id === id
    })
    console.log(duplicateid)
    if(duplicateid.length ===0){
        data.push({
            id:id,
            name:name,
            subject:subject,
            grade:grade,
            comment:comment
         })
         saveData(data)
         console.log('data saved')
    }
     else{
         console.log('wrong data')
     }
   
}
const loadData = () =>{
    // const dataBuffer = fs.readFileSync('data.json')
    // return JSON.parse(dataBuffer)
    try{
        const dataBuffer = fs.readFileSync('students.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return[]
    }
}
const saveData = (data) =>{
    const info = JSON.stringify(data)
    fs.writeFileSync('students.json' ,info)
}
const removedata = (id) =>{
    const data = loadData()
    const saveddata = data.filter((data)=>{
        return data.id !== id
    })
    console.log(saveddata)
    saveData(saveddata)
    console.log('data removed')
}
const readData = (id) =>{
    const data = loadData()
    const showData = data.find((data)=>{
        return data.id === id
    }) 
    if(data){
        console.log(data)
    }
    else{
        console.log('not found')
    }

}
const listData = () =>{
    const data = loadData()
    data.forEach(data =>{
     console.log(data.name,data.grade)
    })
    
}

module.exports = {
    addData,
    removedata,
    readData,
    listData
}