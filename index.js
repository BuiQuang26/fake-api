const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//parser body json
app.use(express.json())

//fake data 
const status = ["on", "off"]
const vehicle_hub = ["Cầu giấy", "Giải Phóng", "Long Biên", "Gia Lâm", "Ba Đình"]
const vehicle_type = ["xe 1", "xe 2", "xe 3"]
const history = [
    {
        id_hub: 112341,
        name_hub: "Cầu Giấy",
        time: "12/01/2022"
    },
    {
        id_hub: 21213123,
        name_hub: "Giải Phóng",
        time: "12/01/2022"
    },
    {
        id_hub: 123123123,
        name_hub: "Mai Dịch",
        time: "12/01/2022"
    },
    {
        id_hub: 445444,
        name_hub: "Đống Đa",
        time: "1/01/2022"
    },
    {
        id_hub: 5543,
        name_hub: "Hai Bà Trưng",
        time: "22/01/2022"
    },
    {
        id_hub: 6563,
        name_hub: "Hồ Tùng Mậu",
        time: "2/01/2022"
    }
]

const rescue = [
    {
        positioning: "Cầu giấy",
        problem: "xe hết pin, giúp tôi với",
        time: "12/01/2022"
    },
    {
        positioning: "Đống Đa",
        problem: "xe không khởi động được",
        time: "12/01/2022"
    },
    {
        positioning: "Cầu giấy",
        problem: "xe bị thủng xăm",
        time: "12/01/2022"
    },
    {
        positioning: "Cầu giấy",
        problem: "xe chết máy, pin nóng",
        time: "12/01/2022"
    }
]

//generate data fake
let vehicles = []
let id = 1
let newHistory = []
while (id < 1000) {

    for (let i = 0; i < 3; i++) {
        newHistory.push(history[Math.floor(Math.random() * history.length)])
    }

    vehicles.push({
        id: id.toString(),
        status: status[Math.floor(Math.random() * status.length)],
        vehicle_hub: vehicle_hub[Math.floor(Math.random() * vehicle_hub.length)],
        vehicle_type: vehicle_type[Math.floor(Math.random() * vehicle_type.length)],
        // history: newHistory,
        // resucue: rescue[Math.floor(Math.random() * rescue.length)]
    })
    newHistory = []
    id = id + 1;
}

app.get('/vehicles', (req, res) => {
    console.log("client access")
    // res.json({
    //     // status: 'OK',
    //     // message: 'get all vehicles successfully',
    //     // data: vehicles
    // })
    res.status(200).json(vehicles)
})

app.listen(port, function () {
    console.log(`listening on http://localhost:${port}`)
})