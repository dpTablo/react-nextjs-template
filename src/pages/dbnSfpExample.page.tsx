import React, { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DbnSfp from '../model/dbnSfp/DbnSfp';
import DefaultDbnSfpService from '@service/DefaultDbnSfpService';
import DbnSfpService from '@service/DbnSfpService';

export interface DbnSfpExamplePageProps {
    dbnSfpService?: DbnSfpService;
}

const Item = styled.div.attrs({
    className: 'font-bold text-xl text-red-200',
})``;

const Field = styled.li.attrs({
    className: 'text-blue-300',
})``;

const RequestButton = styled.button.attrs({
    className: 'requestButton p-2 border-2 border-white bg-gray-500',
})``;

const DbnSfpExamplePage: NextPage<DbnSfpExamplePageProps> = ({
    dbnSfpService = new DefaultDbnSfpService(),
}) => {
    const [dbnSfpData, setDbnSfpData] = useState<DbnSfp>();

    const getSampleData = async () => {
        const data = await dbnSfpService.getSample();
        setDbnSfpData(data);
    };

    return (
        <div>
            <div>
                <RequestButton onClick={getSampleData}>
                    샘플데이터 요청
                </RequestButton>
            </div>

            <Item>aminoAcid</Item>
            <ul>
                <Field data-id="alt">alt : {dbnSfpData?.aminoAcid.alt}</Field>
                <Field>ref : {dbnSfpData?.aminoAcid.ref}</Field>
            </ul>
            <hr />

            <Item>frequency</Item>
            <ul>
                <Field>alspac : {dbnSfpData?.frequency?.alspac}</Field>
                <Field>ul10k : {dbnSfpData?.frequency?.uk10k}</Field>
                <Field>twinsuk : {dbnSfpData?.frequency?.twinsuk}</Field>
            </ul>
            <hr />

            <Item>metaScores</Item>
            <ul>
                <li>
                    <div>metaLR (json string)</div>
                    <pre>{JSON.stringify(dbnSfpData?.metaScores?.metaLR)}</pre>
                </li>
            </ul>
            <hr />

            <Item>transcriptList</Item>
            <ul>
                {dbnSfpData?.transcriptList?.map((item) => (
                    <Field key={item.transcriptId}>{item.transcriptId}</Field>
                ))}
            </ul>
        </div>
    );
};

DbnSfpExamplePage.propTypes = {
    dbnSfpService: PropTypes.object,
};

export default DbnSfpExamplePage;
