const express = require('express');
const app = express();
const cors = require('cors');
const { db } = require('./firebase');

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/get_task_list', (req, res) => {
    
    let taskList = [];

    db.collection('tasks').orderBy('createdAt').get()
    .then(response => {
        response.docs.map(doc => {
            taskList.push({
                id: doc.id,
                ...doc.data(),
            })
        })
        res.status(200).json({
            success: true,
            taskList,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(200).json({
            success: false,
            taskList,
        });
    })
});

app.get('/get_task', (req, res) => {
    const url = new URL(`https://anyrandomwebsite.com/${req.originalUrl}`);
    const taskId = url.searchParams.get('taskId');

    db.collection('tasks').doc(taskId).get()
    .then(response => {
        const data = {
            id: response.id,
            ...response.data()
        }
        res.status(200).json({
            success: true,
            data: data,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(200).json({
            success: false,
            data: null,
        });
    })
});

app.post('/set_new_task', (req, res) => {
    const { firstName, lastName, phone, taskId } = req.body;
    const updatedData = {
        firstName, 
        lastName, 
        phone, 
    }

    let taskList = [];

    db.collection('tasks').doc(taskId).set(updatedData, { merge: true})
    .then(() => {
        db.collection('tasks').orderBy('createdAt').get()
        .then(response => {
            response.docs.map(doc => {
                taskList.push({
                    id: doc.id,
                    ...doc.data(),
                })
            })
            res.status(200).json({
                success: true,
                taskList,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({
                success: false,
                taskList,
            });
        })
    })
    .catch(error => {
        console.log(error);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));