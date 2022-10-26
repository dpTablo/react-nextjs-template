import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import DbnSfp from '../model/dbnSfp/DbnSfp';

const IndexPage: NextPage = () => {
    const [dbnSfpData, setDbnSfpData] = useState<DbnSfp>();

    useEffect(() => {
        fetch('https://api.dptablo.com/v1/dbnSfp/sample')
            .then((response) => {
                if (response.status !== 200) return;
                return response.json();
            })
            .then((data) => {
                setDbnSfpData(data);
            });
    }, []);

    return (
        <div>
            <div>aminoAcid</div>
            <ul>
                <li>alt : {dbnSfpData?.aminoAcid.alt}</li>
                <li>ref : {dbnSfpData?.aminoAcid.ref}</li>
            </ul>
        </div>
    );
};

export default IndexPage;
