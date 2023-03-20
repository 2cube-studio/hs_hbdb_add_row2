import fetch from "node-fetch";

class JobModel {

    getJobsData = async () => {
        // let data = await fetch(`https://comanos.europersonal.com/api/public/v1/Stelle/Read?searchterm=1`, {
        let data = await fetch(`https://comanos.europersonal.com/api/public/v1/Stelle/Read`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'charset': 'utf-8',
                'X-ApiKey': `${process.env.API_KEY}`
            }
        })

        let JsonData = await data.json();

        return JsonData;
    };

    getUserJobsData = async (newRowData) => {
        // console.log(newRowData)
        let jobId = newRowData;

        // let newObjData = [];

        // jobId.forEach(element => {
        //     // console.log(element)
        //     // newObjData.push(element.StelleUuid);
        //     // res.status(200).send(JobData);
        //     // });

        //     let data = await fetch(`https://comanos.europersonal.com/api/public/v1/Stelle/GetStelleById?stelleUuid=${element}`, {
        //         method: "GET",
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //             'charset': 'utf-8',
        //             'X-ApiKey': `${process.env.API_KEY}`
        //         }
        //     })

        //     let JsonData = await data.json();

        //     // return JsonData;

        // });

        for (const file of jobId) {
            
            // console.log(file);
            let data = await fetch(`https://comanos.europersonal.com/api/public/v1/Stelle/GetStelleById?stelleUuid=${file}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'charset': 'utf-8',
                    'X-ApiKey': `${process.env.API_KEY}`
                }
            })

            let JsonData = await data.json();

            return JsonData;
        }
    }

}

export default new JobModel;