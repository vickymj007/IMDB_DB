//Design database for Zen class programme
use zen_class_programme


//Creating collection and inserting documents

//users
db.createCollection('users')
db.users.insertMany([{student_id:1, name: 'Vignesh', age:22, placed_at:'TCS', mentor:'Sanjay', task_submitted_date: ISODate('2020-10-15')},{student_id:2, name: 'Mani', age:25, placed_at:'TCS', mentor:'Sanjay', task_submitted_date: ISODate('2020-12-14')},{student_id:3, name: 'Joseph', age:20, placed_at:'TCS', mentor:'Akbar', task_submitted_date: ISODate('2020-11-15')},{student_id:4, name: 'Kamal', age:25, placed_at:'Amazon', mentor:'Sanjay', task_submitted_date: ISODate('2020-12-18')},{student_id:5, name: 'Kaali', age:24, placed_at:'Amazon', mentor:'Akbar', task_submitted_date: ISODate('2020-10-12')},{student_id:6, name: 'Diva', age:23, placed_at:'TechBuddies', mentor:'Sanjay', task_submitted_date: ISODate('2020-09-01')},{student_id:7, name: 'Harish', age:22, placed_at:'TechBuddies', mentor:'Akbar', task_submitted_date: ISODate('2020-12-06')},{student_id:8, name: 'Jerrom', age:21, placed_at:'TechBuddies', mentor:'Akbar', task_submitted_date: ISODate('2020-11-28')},{student_id:9, name: 'Kalai', age:20, placed_at:'Google', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-24')},{student_id:10, name: 'Deepan', age:23, placed_at:'Google', mentor:'Sanjay', task_submitted_date: ISODate('2020-10-28')},{student_id:11, name: 'Selvi', age:26, placed_at:'Google', mentor:'Karthick', task_submitted_date: ISODate('2020-12-11')},{student_id:12, name: 'Kaartheban', age:20, placed_at:'Microsoft', mentor:'Karthick', task_submitted_date: ISODate('2020-12-15')},{student_id:13, name: 'Sruthi', age:24, placed_at:'Microsoft', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-10')},{student_id:14, name: 'Hema', age:26, placed_at:'Microsoft', mentor:'Karthick', task_submitted_date: ISODate('2020-11-16')},{student_id:15, name: 'Prasanth', age:25, placed_at:'Netflix', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-30')},{student_id:16, name: 'Deepak', age:22, placed_at:'Netflix', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-29')}])

db.users.insertMany([{student_id:17, name: 'Vasanth', age:21, placed_at:'Netflix', mentor:'Sanjay', task_submitted_date: ISODate('2020-10-28')},{student_id:18, name: 'Kumaran', age:20, placed_at:'Flipkart', mentor:'Karthick', task_submitted_date: ISODate('2020-10-14')},{student_id:19, name: 'Ajith', age:23, placed_at:'Flipkart', mentor:'Sanjay', task_submitted_date: ISODate('2020-10-16')},{student_id:20, name: 'Sanjay', age:24, placed_at:'Flipkart', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-01')},{student_id:21, name: 'James', age:22, placed_at:'Wallmart', mentor:'Dinesh', task_submitted_date: ISODate('2020-10-01')},{student_id:22, name: 'Azar', age:25, placed_at:'Wallmart', mentor:'Dinesh', task_submitted_date: ISODate('2020-10-22')},{student_id:23, name: 'Ganesh', age:27, placed_at:'Wallmart', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-16')},{student_id:24, name: 'Madhu', age:25, placed_at:'HCL', mentor:'Dinesh', task_submitted_date: ISODate('2020-10-23')},{student_id:25, name: 'Lokesh', age:24, placed_at:'HCL', mentor:'Sanjay', task_submitted_date: ISODate('2020-09-20')},{student_id:26, name: 'Yasin', age:22, placed_at:'HCL', mentor:'Dinesh', task_submitted_date: ISODate('2020-12-29')},{student_id:27, name: 'Bala', age:21, placed_at:'Accenture', mentor:'David', task_submitted_date: ISODate('2020-12-14')},{student_id:28, name: 'Sai', age:23, placed_at:'Accenture', mentor:'Sanjay', task_submitted_date: ISODate('2020-10-15')},{student_id:29, name: 'Anbu', age:20, placed_at:'Accenture', mentor:'David', task_submitted_date: ISODate('2020-10-23')},{student_id:30, name: 'Rakesh', age:20, placed_at:'Myntra', mentor:'David', task_submitted_date: ISODate('2020-09-02')},{student_id:31, name: 'Paramesh', age:21, placed_at:'Myntra', mentor:'David', task_submitted_date: ISODate('2020-10-06')},{student_id:32, name: 'Guru', age:25, placed_at:'Myntra', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-19')},{student_id:33, name: 'Keerthi', age:24, placed_at:'Uber', mentor:'David', task_submitted_date: ISODate('2020-11-21')},{student_id:34, name: 'Geetha', age:23, placed_at:'Uber', mentor:'David', task_submitted_date: ISODate('2020-11-22')},{student_id:35, name: 'Dhilip', age:26, placed_at:'Uber', mentor:'Dinesh', task_submitted_date: ISODate('2020-11-23')},{student_id:36, name: 'Vijay', age:24, placed_at:'Amazon', mentor:'Sanjay', task_submitted_date: ISODate('2020-11-26')}])


//codekata
db.codekata.insertMany([{student_id:1, problems_solved:18},{student_id:2, problems_solved:40},{student_id:3, problems_solved:65},{student_id:4, problems_solved:25},{student_id:5, problems_solved:65},{student_id:6, problems_solved:405},{student_id:7, problems_solved:94},{student_id:8, problems_solved:105},{student_id:9, problems_solved:250},{student_id:10, problems_solved:360},{student_id:11, problems_solved:55},{student_id:12, problems_solved:68},{student_id:13, problems_solved:65},{student_id:14, problems_solved:98},{student_id:15, problems_solved:75},{student_id:16, problems_solved:63},{student_id:17, problems_solved:48},{student_id:18, problems_solved:96},{student_id:19, problems_solved:36},{student_id:20, problems_solved:45},{student_id:21, problems_solved:88},{student_id:22, problems_solved:36},{student_id:23, problems_solved:45},{student_id:24, problems_solved:78},{student_id:25, problems_solved:98},{student_id:26, problems_solved:36},{student_id:27, problems_solved:105},{student_id:28, problems_solved:318},{student_id:29, problems_solved:45},{student_id:30, problems_solved:165},{student_id:31, problems_solved:186},{student_id:32, problems_solved:204},{student_id:33, problems_solved:254},{student_id:34, problems_solved:312},{student_id:35, problems_solved:319},{student_id:36, problems_solved:345}])

//attendance
db.attendance.insertMany([{date: ISODate('2020-10-10'), absent_students:['Vignesh', 'Ganesh']},{date: ISODate('2020-10-15'), absent_students:['Ajith', 'Azar']},{date: ISODate('2020-10-18'), absent_students:['Deepak']},{date: ISODate('2020-10-20'), absent_students:['Deepan', 'Geetha']},{date: ISODate('2020-10-24'), absent_students:['Jerrom']},{date: ISODate('2020-10-26'), absent_students:['Diva']},{date: ISODate('2020-10-27'), absent_students:['Harish']},{date: ISODate('2020-10-30'), absent_students:['Kalai', 'Kaartheban']},{date: ISODate('2020-11-02'), absent_students:['Kumar']},{date: ISODate('2020-11-08'), absent_students:['Prasanth']},{date: ISODate('2020-11-20'), absent_students:['Kamal', 'Keerthi']},{date: ISODate('2020-11-21'), absent_students:['Selvi', 'Rakesh']},])

// topics
db.topics.insertMany([{topic_name:'HTML', topic_completed_on: ISODate('2020-09-05')},{topic_name:'CSS', topic_completed_on: ISODate('2020-10-12')},{topic_name:'Javascript', topic_completed_on: ISODate('2020-10-18')},{topic_name:'React JS', topic_completed_on: ISODate('2020-10-25')},{topic_name:'SQL', topic_completed_on: ISODate('2020-11-05')},{topic_name:'MongoDB', topic_completed_on: ISODate('2020-11-10')},{topic_name:'Node JS', topic_completed_on: ISODate('2020-11-25')},{topic_name:'Express JS', topic_completed_on: ISODate('2020-11-30')}])

//tasks
db.tasks.insertMany([{task_name: 'HTML', question:'Create a Table of Students using HTML'},{task_name: 'CSS', question:'Create a Grid layout using CSS'},{task_name: 'Javascript', question:'Write a Blog about Rest & Spread Operators'},{task_name: 'React JS', question:'Create CRUD Operation using React.js'},{task_name: 'SQL', question:'Complete SQL Bolt and submit screenshot'},{task_name: 'MongoDB', question:'Create a Database for Guvi'},{task_name: 'Node JS', question:'Write a Blog about Node.Js file system'},{task_name: 'Express JS', question:'Create a Rest API with Node.js & Express.js'},])

//company_drives
db.company_drives.insertMany([{company_name: "TCS", appeared_date: ISODate("2020-10-20"), placed_candidates:['Vignesh', 'Mani', 'Joseph']},{company_name: "Amazon", appeared_date:ISODate("2020-10-26"), placed_candidates:['Kamal', 'Vijay', 'Kaali']},{company_name: "TechBuddies", appeared_date: ISODate("2020-10-10"), placed_candidates:['Diva', 'Harish', 'Jerrom']},{company_name: "Google", appeared_date: ISODate("2020-11-22"), placed_candidates:['Kalai', 'Deepan', 'Selvi']},{company_name: "Microsoft", appeared_date: ISODate("2020-12-20"), placed_candidates:['Kaartheban', 'Sruthi', 'Hema']},{company_name: "Netflix", appeared_date: ISODate("2020-11-28"), placed_candidates:['Prasanth', 'Deepak', 'Vasanth']},{company_name: "Flipkart", appeared_date: ISODate("2020-10-26"), placed_candidates:['Kumaran', 'Ajith', 'Sanjay']},{company_name: "Wallmart", appeared_date: ISODate("2020-10-27"), placed_candidates:['James', 'Azar', 'Ganesh']},{company_name: "HCL", appeared_date: ISODate("2020-10-29"), placed_candidates:['Madhu', 'Lokesh', 'Yasin']},{company_name: "Accenture", appeared_date: ISODate("2020-10-16"), placed_candidates:['Bala', 'Sai', 'Anbu']},{company_name: "Myntra", appeared_date: ISODate("2020-10-19"), placed_candidates:['Rakesh', 'Paramesh', 'Guru']},{company_name: "Uber", appeared_date: ISODate("2020-09-20"), placed_candidates:['Keerthi', 'Geetha', 'Dhilip']}])

//mentors
db.mentors.insertMany([{name:'Sanjay'},{name:'Akbar'},{name:'Karthick'},{name:'Dinesh'},{name:'David'}])

//Queries
//Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([{$match:{topic_completed_on:{$gt:new Date("2020-10-01"),$lt:new Date("2020-10-31")}}},{$lookup:{from: "tasks",localField : "topic_name",foreignField : "task_name",as: "task"}},{$project:{_id:0,task:{_id:0}}}])


//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({$and:[{appeared_date:{$gt:new Date('2020-10-10')}},{appeared_date:{$lt:new Date('2020-10-31')}}]},{_id:0, company_name:1, appeared_date:1})


//Find all the company drives and students who are appeared for the placement.
db.users.aggregate([{ $group: { _id: '$placed_at', placed_students:{$addToSet:'$name'}}}])


// Find the number of problems solved by the user in codekata
//Solution 1
db.users.aggregate([{$lookup:{from:"codekata",localField :"student_id",foreignField : "student_id",as: "codekata"}},{$project:{_id:0,name:1,codekata:{problems_solved:1}}}])
//Solution 2
db.users.aggregate([{$lookup:{from:"codekata",localField :"student_id",foreignField : "student_id",as: "codekata"}},{$project:{_id:0,name:1,"codekata.problems_solved":1}}])


//Find all the mentors with who has the mentee's count more than 15
db.users.aggregate([{$group:{_id:"$mentor",mentees_count:{$sum:1}}},{$match:{mentees_count:{$gt:15}}}])


//Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
db.users.find({task_submitted_date:{$not:{$gt:new Date("2020-10-15"),$lt:new Date("2020-10-31")}}}).count()

db.attendance.find({date:{$not:{$gt:new Date("2020-10-15"),$lt:new Date("2020-10-31")}}},{_id:0, absent_students:1})
