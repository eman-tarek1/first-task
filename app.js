const yargs = require('yargs')
// console.log(yargs.argv)
const data = require('./students')
yargs.command({
    command:'add',
    describe:'add student data',
    builder:{
        id:{
            describe:'id of student',
            type:'number',
            demandOption:true
      
        },

        name:{
            describe:'name of student',
            type:'string',
            demandOption:true
      
        },
        subject:{
            describe:'subject of grade three',
            type:'string',
            demandOption:true
      
        },
        grade:{
            describe:'student grade',
            type:'number',
            demandOption:true
      
        },
        comment:{
            describe:'please write your comment',
            type:'string'
           
      
        }
    },
    handler:(argv)=>{
        // console.log('add student data')
        data.addData(argv.id,argv.name,argv.subject,argv.grade,argv.comment)
    }
})
yargs.command({
    command:'delete',
    describe:'add student data',
    builder:{
        id:{
            describe:'id of student',
            type:'number',
            demandOption:true
      
        }

        
    },
    handler:(argv)=>{
        data.removedata(argv.id)
        // console.log('delete student data')
        
    }
})
yargs.command({
    command:'list',
    describe:'list of students',
   
    handler:()=>{
        // console.log('list of student')
        data.listData()
    }
})
yargs.command({
    command:'read',
    describe:'read student data',
    builder:{
        id:{
            describe:'id of student',
            type:'integer',
            demandOption:true
      
        }

        
    },
    handler:(argv)=>{
        // console.log('read student data')
        data.readData(argv.id)

        
    }
})
yargs.parse()