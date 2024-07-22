const Dashboardstd = require('../modles/studentDashboard')

exports.dashboardStudentController = async(req , res) => {
    try {
        const {bookname , name, rollnumber , startingdate, returingdate} = req.body;
        const dashboardstd = await Dashboardstd.create({
            bookname,
            name,
            rollnumber,
            startingdate,
            returingdate
        })

        console.log(dashboardstd);

        return res.status(201).json({
            message: "Book is successfull requested in database",
        })


        
    } catch (error) {
        console.log(error);
    }

}

