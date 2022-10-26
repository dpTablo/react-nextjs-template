import DbnSfp from '../model/dbnSfp/DbnSfp';

interface DbnSfpService {
    getSample(): Promise<DbnSfp>;
}
export default DbnSfpService;
