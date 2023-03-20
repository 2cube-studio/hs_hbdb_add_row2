import express from 'express';
import dotenv from 'dotenv';

import jobModel from '../models/job.model.js';

import hubspot from '@hubspot/api-client';
dotenv.config();

const hubspotClient = new hubspot.Client({ "accessToken": process.env.ACCESS_TOKEN });


class RowController {

    create = async (req, res) => {
        const JobData = await jobModel.getJobsData();


        let newRowData = [];

        JobData.forEach(element => {
            newRowData.push(element.StelleUuid);
            // res.status(200).send(JobData);
        });
        // console.log(newRowData)
        const rowData = await jobModel.getUserJobsData(newRowData);
        console.log(rowData)

        // rowData.forEach(element => {
        //     console.log(element.StelleUuid)
        // });

    };

}

export default new RowController;