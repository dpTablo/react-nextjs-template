import AminoAcid from './AminoAcid';
import Frequency from './Frequency';
import Transcript from './Transcript';
import MetaScores from './MetaScores';
import IndividualPredictions from './IndividualPredictions';

interface DbnSfp {
    aminoAcid: AminoAcid;
    frequency?: Frequency;
    transcriptList?: Array<Transcript>;
    metaScores?: MetaScores;
    individualPredictions?: IndividualPredictions;
}
export default DbnSfp;
